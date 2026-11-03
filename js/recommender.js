/*
 * CineNova AI — yerel film öneri motoru.
 * Tamamen tarayıcıda çalışır: harici API, API anahtarı veya ücretli servis kullanılmaz.
 * Tür, tema, ruh hâli, açıklama anahtar kelimeleri ve aile uygunluğu üzerinden puanlama yapar.
 */
(function (root) {
  const STORAGE_KEY = 'cinenova.lastMovie';

  const STOP = new Set(('ve ile bir bu şu için gibi daha kadar olan olarak onun onlar kendi ama veya hem her çok ' +
    'sonra önce arasında birlikte zorunda kalır başlar eder yapar yolunu bulur ' +
    'the and with for from that this into their his her who are its').split(' '));

  // Türkçe ekleri kabaca yok saymak için kelimenin ilk 5 harfini kök kabul eder.
  function stems(text) {
    return new Set(String(text).toLocaleLowerCase('tr')
      .replace(/[^a-zçğıöşüâîû\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 5 && !STOP.has(w))
      .map(w => w.slice(0, 5)));
  }

  function intersect(a, b) { const s = new Set(b); return a.filter(x => s.has(x)); }
  function jaccard(a, b) { const i = intersect(a, b).length; const u = new Set([...a, ...b]).size; return u ? i / u : 0; }

  const FAMILY_ORDER = { all: 0, pg: 1, teen: 2, adult: 3 };

  function createEngine(catalog) {
    const byId = new Map(catalog.map(m => [m.id, m]));
    const stemCache = new Map(catalog.map(m => [m.id, stems(m.desc.tr + ' ' + m.desc.en)]));

    function similarity(a, b) {
      const sharedGenres = intersect(a.genres, b.genres);
      const sharedThemes = intersect(a.themes, b.themes);
      const sharedMoods = intersect(a.moods, b.moods);
      const sa = stemCache.get(a.id), sb = stemCache.get(b.id);
      let words = 0; sa.forEach(w => { if (sb.has(w)) words++; });

      let score = jaccard(a.genres, b.genres) * 4
        + Math.min(sharedThemes.length, 4) * 1.4
        + Math.min(sharedMoods.length, 3) * 0.8
        + Math.min(words, 5) * 0.25;
      if (a.kinds.includes('Animasyon') === b.kinds.includes('Animasyon')) score += 0.5;
      score -= Math.abs(FAMILY_ORDER[a.family] - FAMILY_ORDER[b.family]) * 0.35;
      return { score, reasons: { genres: sharedGenres, themes: sharedThemes, moods: sharedMoods } };
    }

    function rank(list) { return list.filter(r => r.score > 0).sort((x, y) => y.score - x.score); }

    function similarTo(id) {
      const base = byId.get(id);
      if (!base) return [];
      return rank(catalog.filter(m => m.id !== id).map(m => {
        const s = similarity(base, m);
        return { movie: m, score: s.score, reasons: s.reasons };
      }));
    }

    // Etiket tabanlı puanlama (ruh hâli, komedi, romantik, aile).
    function byProfile(profile, filter) {
      return rank(catalog.filter(filter || (() => true)).map(m => {
        const g = intersect(m.genres, profile.genres || []);
        const t = intersect(m.themes, profile.themes || []);
        const md = intersect(m.moods, profile.moods || []);
        let score = g.length * (profile.genreWeight || 2) + t.length * 1.2 + md.length * 1.5;
        (profile.mustGenres || []).forEach(x => { if (!m.genres.includes(x)) score -= 3; });
        if (profile.preferFamily) score += (3 - FAMILY_ORDER[m.family]) * 0.4;
        return { movie: m, score, reasons: { genres: g, themes: t, moods: md } };
      }));
    }

    const MOODS = {
      happy: { moods: ['neşeli', 'komik', 'enerjik', 'renkli'], genres: ['Komedi', 'Müzikal', 'Aile'] },
      sad: { moods: ['sıcak', 'umut verici', 'duygusal', 'rahatlatıcı'], genres: ['Aile', 'Dram', 'Komedi'], themes: ['dostluk', 'iyilik', 'umut'] },
      curious: { moods: ['meraklı', 'düşündürücü', 'büyülü'], genres: ['Bilim Kurgu', 'Gizem', 'Belgesel'], themes: ['bilim', 'keşif', 'uzay'] },
      excited: { moods: ['heyecanlı', 'gergin', 'epik', 'macera dolu'], genres: ['Aksiyon', 'Macera', 'Gerilim', 'Bilim Kurgu'] },
      romantic: { moods: ['romantik', 'duygusal'], genres: ['Romantik', 'Müzikal'], themes: ['aşk'] },
      calm: { moods: ['sakin', 'rahatlatıcı', 'sıcak'], genres: ['Belgesel', 'Doğa', 'Aile'], themes: ['doğa'] },
      inspired: { moods: ['ilham verici', 'umut verici'], genres: ['Biyografi', 'Dram'], themes: ['hayaller', 'cesaret', 'gerçek hikâye', 'hayatın anlamı'] }
    };

    function forMood(key) { return MOODS[key] ? byProfile(MOODS[key]) : []; }

    function funny() {
      return byProfile({ genres: ['Komedi'], genreWeight: 4, moods: ['komik', 'esprili', 'neşeli', 'enerjik'] },
        m => m.genres.includes('Komedi') || m.moods.includes('komik'));
    }

    function romanticEmotional() {
      return byProfile({ genres: ['Romantik', 'Dram', 'Müzikal'], genreWeight: 2.5, moods: ['duygusal', 'hüzünlü', 'romantik'], themes: ['aşk', 'anılar', 'hayaller'] },
        m => m.genres.includes('Romantik') || m.themes.includes('aşk'));
    }

    // age: 'kids' (küçük çocuklar), 'kids8' (8+), 'teens' (13+)
    function family(age) {
      const max = age === 'kids' ? 0 : age === 'teens' ? 2 : 1;
      return byProfile({ genres: ['Aile', 'Animasyon', 'Komedi', 'Macera'], genreWeight: 1.6, moods: ['sıcak', 'neşeli', 'komik', 'macera dolu'], themes: ['aile', 'dostluk'], preferFamily: age !== 'teens' },
        m => FAMILY_ORDER[m.family] <= max);
    }

    function search(q) {
      q = String(q || '').trim().toLocaleLowerCase('tr');
      if (!q) return catalog.slice();
      return catalog.filter(m => [m.title, m.trTitle || ''].join(' ').toLocaleLowerCase('tr').includes(q));
    }

    return { byId, similarity, similarTo, forMood, funny, romanticEmotional, family, search, MOODS };
  }

  const store = {
    getLast() { try { return root.localStorage ? root.localStorage.getItem(STORAGE_KEY) : null; } catch (e) { return null; } },
    setLast(id) { try { if (root.localStorage) root.localStorage.setItem(STORAGE_KEY, id); } catch (e) { /* gizli mod vb. */ } }
  };

  const api = { createEngine, store, STORAGE_KEY };
  root.CineNovaAI = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
