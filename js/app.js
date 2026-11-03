/* CineNova arayüz kodu: katalog, arama, filtreler, detay penceresi ve CineNova AI paneli. */
(function () {
  const data = window.CINENOVA_CATALOG;
  const engine = window.CineNovaAI.createEngine(data);
  const store = window.CineNovaAI.store;
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let filter = 'all', genre = 'all', lang = 'tr', query = '';

  const GENRE_EN = {
    'Bilim Kurgu': 'Sci-Fi', 'Dram': 'Drama', 'Macera': 'Adventure', 'Komedi': 'Comedy', 'Aile': 'Family', 'Romantik': 'Romance',
    'Fantastik': 'Fantasy', 'Müzikal': 'Musical', 'Animasyon': 'Animation', 'Gizem': 'Mystery', 'Gerilim': 'Thriller', 'Aksiyon': 'Action',
    'Biyografi': 'Biography', 'Suç': 'Crime', 'Belgesel': 'Documentary', 'Doğa': 'Nature', 'Spor': 'Sports', 'Korku': 'Horror'
  };
  const KIND_EN = { Film: 'Movie', Dizi: 'Series', Belgesel: 'Documentary', Animasyon: 'Animation' };
  const GENRE_CHIPS = ['Bilim Kurgu', 'Komedi', 'Romantik', 'Dram', 'Aile', 'Macera', 'Animasyon', 'Müzikal', 'Gizem', 'Fantastik', 'Doğa'];

  const T = {
    tr: {
      all: 'Tümü', family: { all: 'Tüm aile', pg: 'Aile · rehberlik', teen: '13+', adult: 'Yetişkin' },
      familyLong: {
        all: 'Tüm aile için uygun.', pg: 'Aileyle izlenebilir; küçük çocuklar için ebeveyn rehberliği önerilir.',
        teen: '13 yaş ve üzeri için önerilir.', adult: 'Yetişkin izleyiciler için; aile izlemesi için önerilmez.'
      },
      ratingNote: 'ABD derecelendirmesi', credit: 'Yapım / Yönetmen', familyTitle: 'Aile izleme bilgisi',
      noVideo: 'Bu bir katalog kaydıdır. CineNova bu demoda video yayınlamaz; film yasal platformlarda izlenebilir.',
      similar: 'Benzer filmler', askAi: '✦ CineNova AI ile benzerlerini bul',
      aiTitle: 'CineNova AI', aiSub: 'Ücretsiz, cihazında çalışan öneri asistanı',
      options: [
        ['last', '🎬', 'Son izlediğim filme benzer filmler bul.'],
        ['mood', '🌙', 'Ruh hâlime göre film öner.'],
        ['funny', '😄', 'Komik bir film bul.'],
        ['romantic', '💜', 'Romantik ama duygusal film öner.'],
        ['family', '👨‍👩‍👧', 'Ailemle izleyebileceğim film öner.'],
        ['liked', '⭐', 'Beğendiğim filme benzeyen filmler bul.']
      ],
      moods: { happy: '😊 Mutlu', sad: '🥺 Hüzünlü', curious: '🤔 Meraklı', excited: '⚡ Heyecan arıyorum', romantic: '💞 Romantik', calm: '🍵 Dinlenmek istiyorum', inspired: '🚀 İlham almak istiyorum' },
      ages: { kids: '🧸 Küçük çocuklarla', kids8: '🎒 8 yaş ve üzeri', teens: '🎧 Gençlerle (13+)' },
      moodQ: 'Bugün nasıl hissediyorsun?', ageQ: 'Kimlerle izleyeceksin?',
      pickLiked: 'Beğendiğin filmi seç:', pickLast: 'Son izlediğin filmi seç:',
      noLast: 'Henüz kayıtlı son film yok. İzlediğin filmi seç; sonraki sefer hatırlarım.',
      lastIs: 'Son seçtiğin film:', change: 'Değiştir',
      searchPh: 'Film adı yaz…', back: '← Geri', more: 'Başka öneriler', none: 'Eşleşen film bulunamadı.',
      because: 'Neden:', resultsFor: {
        last: 'filmine benzer öneriler', liked: 'filmine benzer öneriler', funny: 'Gülümseten öneriler',
        romantic: 'Romantik ama duygusal öneriler', mood: 'Ruh hâline göre öneriler', family: 'Aileyle izlemelik öneriler'
      },
      free: 'Harici yapay zekâ servisi kullanılmaz · Tamamen ücretsiz', open: 'CineNova AI’ı aç', close: 'Kapat',
      cardNote: 'Katalog kaydı', count: n => `${n} içerik`, searchPlaceholder: 'Film, tür veya yıl ara…'
    },
    en: {
      all: 'All', family: { all: 'All ages', pg: 'Family · guidance', teen: '13+', adult: 'Adults' },
      familyLong: {
        all: 'Suitable for the whole family.', pg: 'Family-friendly; parental guidance suggested for young children.',
        teen: 'Recommended for ages 13 and up.', adult: 'For adult viewers; not recommended for family viewing.'
      },
      ratingNote: 'US rating', credit: 'Studio / Director', familyTitle: 'Family viewing',
      noVideo: 'This is a catalog entry. CineNova does not stream video in this demo; watch the title on a licensed platform.',
      similar: 'Similar titles', askAi: '✦ Find similar with CineNova AI',
      aiTitle: 'CineNova AI', aiSub: 'Free recommendation assistant running on your device',
      options: [
        ['last', '🎬', 'Find movies similar to the last one I watched.'],
        ['mood', '🌙', 'Recommend a movie for my mood.'],
        ['funny', '😄', 'Find a funny movie.'],
        ['romantic', '💜', 'Recommend a romantic but emotional movie.'],
        ['family', '👨‍👩‍👧', 'Recommend a movie for family night.'],
        ['liked', '⭐', 'Find movies like one I loved.']
      ],
      moods: { happy: '😊 Happy', sad: '🥺 Down', curious: '🤔 Curious', excited: '⚡ Craving excitement', romantic: '💞 Romantic', calm: '🍵 Want to relax', inspired: '🚀 Need inspiration' },
      ages: { kids: '🧸 With young kids', kids8: '🎒 Ages 8+', teens: '🎧 With teens (13+)' },
      moodQ: 'How are you feeling today?', ageQ: 'Who are you watching with?',
      pickLiked: 'Pick a movie you loved:', pickLast: 'Pick the last movie you watched:',
      noLast: 'No recent movie saved yet. Pick what you watched; I’ll remember it next time.',
      lastIs: 'Your last pick:', change: 'Change',
      searchPh: 'Type a title…', back: '← Back', more: 'More picks', none: 'No matching titles.',
      because: 'Why:', resultsFor: {
        last: '— similar picks', liked: '— similar picks', funny: 'Picks to make you laugh',
        romantic: 'Romantic but emotional picks', mood: 'Picks for your mood', family: 'Family night picks'
      },
      free: 'No external AI service · Completely free', open: 'Open CineNova AI', close: 'Close',
      cardNote: 'Catalog entry', count: n => `${n} titles`, searchPlaceholder: 'Search titles, genres or years…'
    }
  };
  const t = () => T[lang];
  const gName = g => lang === 'tr' ? g : (GENRE_EN[g] || g);
  const kName = k => lang === 'tr' ? k : (KIND_EN[k] || k);
  const mainKind = m => m.kinds[0];
  const displayTitle = m => m.title;
  const subTitle = m => (lang === 'tr' && m.trTitle && m.trTitle !== m.title) ? m.trTitle : '';
  const locale = () => lang === 'tr' ? 'tr' : 'en';

  /* ---------- Katalog ---------- */
  function matches(m) {
    if (filter !== 'all' && !m.kinds.includes(filter)) return false;
    if (genre !== 'all' && !m.genres.includes(genre)) return false;
    const q = query.trim().toLocaleLowerCase(locale());
    if (!q) return true;
    const hay = [m.title, m.trTitle, m.year, m.credit, ...m.kinds, ...m.kinds.map(k => KIND_EN[k]), ...m.genres, ...m.genres.map(g => GENRE_EN[g]), m.desc[lang]]
      .filter(Boolean).join(' ').toLocaleLowerCase(locale());
    return hay.includes(q);
  }

  function cardHTML(m) {
    return `<article class="card" tabindex="0" role="button" data-id="${esc(m.id)}" aria-label="${esc(displayTitle(m))} (${m.year})">
      <div class="poster" style="--art:${m.art}"><span class="symbol" aria-hidden="true">${esc(m.symbol)}</span><span class="year-tag">${m.year}</span><strong>${esc(displayTitle(m))}</strong></div>
      <div class="meta"><b>${esc(displayTitle(m))}</b>${subTitle(m) ? `<span class="tr-title">${esc(subTitle(m))}</span>` : ''}
      <small>${esc(kName(mainKind(m)))} · ${m.year} · ${esc(gName(m.genres[0]))}</small>
      <div class="fam fam-${m.family}">${esc(t().family[m.family])}</div></div></article>`;
  }

  function render() {
    const list = data.filter(matches);
    const cards = $('cards');
    cards.innerHTML = list.map(cardHTML).join('');
    $('empty').style.display = list.length ? 'none' : 'block';
    $('count').textContent = t().count(list.length);
    bindCards(cards);
  }

  function bindCards(scope) {
    scope.querySelectorAll('[data-id]').forEach(c => {
      const go = () => openMovie(c.dataset.id);
      c.addEventListener('click', go);
      c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }

  function renderChips() {
    const chips = ['all', ...GENRE_CHIPS];
    $('genres').innerHTML = chips.map(g => `<button class="chip${g === genre ? ' active' : ''}" data-genre="${esc(g)}" aria-pressed="${g === genre}">${esc(g === 'all' ? t().all : gName(g))}</button>`).join('');
    $('genres').querySelectorAll('.chip').forEach(b => b.onclick = () => { genre = b.dataset.genre; renderChips(); render(); });
  }

  /* ---------- Modal ---------- */
  function showModal() { $('modalBg').classList.add('show'); $('close').focus(); }
  function hideModal() { $('modalBg').classList.remove('show'); }
  function modal(title, text) {
    $('modalTitle').textContent = title;
    $('modalBody').innerHTML = `<p class="plain">${esc(text)}</p>`;
    showModal();
  }

  function openMovie(id) {
    const m = engine.byId.get(id);
    if (!m) return;
    store.setLast(id);
    const sims = engine.similarTo(id).slice(0, 4);
    $('modalTitle').textContent = displayTitle(m);
    $('modalBody').innerHTML = `
      ${subTitle(m) ? `<div class="detail-sub">${esc(subTitle(m))}</div>` : ''}
      <div class="detail-art" style="--art:${m.art}"><span aria-hidden="true">${esc(m.symbol)}</span></div>
      <div class="detail-meta">${m.kinds.map(k => esc(kName(k))).join(' · ')} · ${m.year}</div>
      <div class="detail-genres">${m.genres.map(g => `<span class="badge">${esc(gName(g))}</span>`).join('')}</div>
      <p>${esc(m.desc[lang])}</p>
      <dl class="facts">
        <dt>${esc(t().credit)}</dt><dd>${esc(m.credit)}</dd>
        <dt>${esc(t().familyTitle)}</dt><dd><span class="fam fam-${m.family}">${esc(t().family[m.family])}</span> ${esc(t().familyLong[m.family])}${m.rating ? ` <small>(${esc(t().ratingNote)}: ${esc(m.rating)})</small>` : ''}</dd>
      </dl>
      <div class="no-video">ⓘ ${esc(t().noVideo)}</div>
      ${sims.length ? `<h3>${esc(t().similar)}</h3><div class="mini-list">${sims.map(r => `<button class="mini" data-id="${esc(r.movie.id)}"><i style="--art:${r.movie.art}">${esc(r.movie.symbol)}</i><span>${esc(displayTitle(r.movie))}<small>${r.movie.year} · ${esc(gName(r.movie.genres[0]))}</small></span></button>`).join('')}</div>` : ''}
      <button class="btn ai-btn" id="askAiSimilar">${esc(t().askAi)}</button>`;
    $('modalBody').querySelectorAll('.mini').forEach(b => b.onclick = () => openMovie(b.dataset.id));
    $('askAiSimilar').onclick = () => { hideModal(); openAI(); showResults('last', engine.similarTo(id), m); };
    showModal();
    $('modalBg').querySelector('.modal').scrollTop = 0;
  }

  /* ---------- CineNova AI ---------- */
  const ai = { view: 'menu', results: [], page: 0, intent: null, base: null };

  function openAI() { $('aiPanel').classList.add('show'); $('aiFab').setAttribute('aria-expanded', 'true'); if (ai.view === 'menu') renderMenu(); }
  function closeAI() { $('aiPanel').classList.remove('show'); $('aiFab').setAttribute('aria-expanded', 'false'); $('aiFab').focus(); }

  function aiBody(html) { $('aiBody').innerHTML = html; $('aiBody').scrollTop = 0; const b = $('aiBack'); if (b) b.onclick = renderMenu; }
  const backBtn = () => `<button class="ai-back" id="aiBack">${esc(t().back)}</button>`;

  function renderMenu() {
    ai.view = 'menu';
    aiBody(`<div class="ai-options">${t().options.map(([k, ico, label]) => `<button class="ai-opt" data-opt="${k}"><span aria-hidden="true">${ico}</span>${esc(label)}</button>`).join('')}</div>`);
    $('aiBody').querySelectorAll('.ai-opt').forEach(b => b.onclick = () => choose(b.dataset.opt));
  }

  function choose(opt) {
    if (opt === 'funny') return showResults('funny', engine.funny());
    if (opt === 'romantic') return showResults('romantic', engine.romanticEmotional());
    if (opt === 'mood') return renderChoices(t().moodQ, t().moods, k => showResults('mood', engine.forMood(k), null, t().moods[k]));
    if (opt === 'family') return renderChoices(t().ageQ, t().ages, k => showResults('family', engine.family(k), null, t().ages[k]));
    if (opt === 'liked') return renderPicker('liked');
    if (opt === 'last') {
      const last = engine.byId.get(store.getLast());
      if (last) return showResults('last', engine.similarTo(last.id), last);
      return renderPicker('last', t().noLast);
    }
  }

  function renderChoices(question, map, onPick) {
    ai.view = 'choices';
    aiBody(`${backBtn()}<p class="ai-q">${esc(question)}</p><div class="ai-chips">${Object.entries(map).map(([k, v]) => `<button class="chip" data-k="${k}">${esc(v)}</button>`).join('')}</div>`);
    $('aiBody').querySelectorAll('[data-k]').forEach(b => b.onclick = () => onPick(b.dataset.k));
  }

  function renderPicker(intent, note) {
    ai.view = 'picker';
    aiBody(`${backBtn()}${note ? `<p class="ai-note">${esc(note)}</p>` : ''}<p class="ai-q">${esc(intent === 'last' ? t().pickLast : t().pickLiked)}</p>
      <input class="ai-search" id="aiSearch" type="search" placeholder="${esc(t().searchPh)}" aria-label="${esc(t().searchPh)}" autocomplete="off">
      <div class="ai-pick-list" id="aiPickList"></div>`);
    const draw = () => {
      const list = engine.search($('aiSearch').value);
      $('aiPickList').innerHTML = list.length ? list.map(m => `<button class="mini" data-id="${esc(m.id)}"><i style="--art:${m.art}">${esc(m.symbol)}</i><span>${esc(displayTitle(m))}<small>${m.year}${subTitle(m) ? ' · ' + esc(subTitle(m)) : ''}</small></span></button>`).join('') : `<p class="ai-note">${esc(t().none)}</p>`;
      $('aiPickList').querySelectorAll('.mini').forEach(b => b.onclick = () => {
        const m = engine.byId.get(b.dataset.id);
        store.setLast(m.id);
        showResults(intent, engine.similarTo(m.id), m);
      });
    };
    $('aiSearch').oninput = draw;
    draw();
    if (window.matchMedia('(min-width: 651px)').matches) $('aiSearch').focus();
  }

  function reasonText(r) {
    const parts = [...r.reasons.genres.slice(0, 2).map(gName)];
    if (lang === 'tr') parts.push(...r.reasons.themes.slice(0, 2), ...r.reasons.moods.slice(0, 1));
    return parts.length ? parts.join(', ') : '';
  }

  function showResults(intent, results, base, label) {
    ai.view = 'results'; ai.intent = intent; ai.results = results; ai.page = 0; ai.base = base || null; ai.label = label || '';
    drawResults();
  }

  function drawResults() {
    const per = 4;
    const pages = Math.max(1, Math.ceil(ai.results.length / per));
    const slice = ai.results.slice(ai.page * per, ai.page * per + per);
    const head = ai.base
      ? `${esc(t().lastIs)} <b>${esc(displayTitle(ai.base))}</b> <button class="ai-link" id="aiChange">${esc(t().change)}</button><br><span>“${esc(displayTitle(ai.base))}” ${esc(t().resultsFor[ai.intent])}</span>`
      : `<span>${esc(t().resultsFor[ai.intent])}${ai.label ? ` · ${esc(ai.label)}` : ''}</span>`;
    aiBody(`${backBtn()}<div class="ai-head">${head}</div>
      <div class="ai-results">${slice.length ? slice.map(r => {
        const m = r.movie, why = reasonText(r);
        return `<button class="ai-result" data-id="${esc(m.id)}"><i style="--art:${m.art}">${esc(m.symbol)}</i><span><b>${esc(displayTitle(m))}</b>
          <small>${m.year} · ${m.genres.slice(0, 2).map(gName).map(esc).join(', ')} · <em class="fam fam-${m.family}">${esc(t().family[m.family])}</em></small>
          ${why ? `<small class="why">${esc(t().because)} ${esc(why)}</small>` : ''}</span><b class="go" aria-hidden="true">›</b></button>`;
      }).join('') : `<p class="ai-note">${esc(t().none)}</p>`}</div>
      ${pages > 1 ? `<button class="btn ai-more" id="aiMore">↻ ${esc(t().more)}</button>` : ''}`);
    $('aiBody').querySelectorAll('.ai-result').forEach(b => b.onclick = () => openMovie(b.dataset.id));
    const more = $('aiMore'); if (more) more.onclick = () => { ai.page = (ai.page + 1) % pages; drawResults(); };
    const ch = $('aiChange'); if (ch) ch.onclick = () => renderPicker(ai.intent === 'liked' ? 'liked' : 'last');
  }

  /* ---------- Dil ---------- */
  function setLang() {
    document.documentElement.lang = lang;
    $('language').textContent = lang === 'tr' ? 'TR / EN' : 'EN / TR';
    document.querySelectorAll('[data-tr][data-en]').forEach(e => e.textContent = e.dataset[lang]);
    $('searchInput').placeholder = t().searchPlaceholder;
    $('aiTitle').textContent = t().aiTitle; $('aiSub').textContent = t().aiSub; $('aiFree').textContent = t().free;
    $('aiFab').setAttribute('aria-label', t().open); $('aiClose').setAttribute('aria-label', t().close);
    renderChips(); render();
    if (ai.view === 'results') drawResults(); else renderMenu();
  }

  /* ---------- Olaylar ---------- */
  document.querySelectorAll('nav button').forEach(b => b.onclick = () => {
    document.querySelectorAll('nav button').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); filter = b.dataset.filter; render();
    $('catalog').scrollIntoView({ behavior: 'smooth' });
  });
  $('searchToggle').onclick = () => { const s = $('searchBox'); s.classList.toggle('show'); if (s.classList.contains('show')) $('searchInput').focus(); };
  $('searchInput').oninput = e => { query = e.target.value; render(); };
  $('reset').onclick = () => {
    filter = 'all'; genre = 'all'; query = ''; $('searchInput').value = '';
    document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    renderChips(); render();
  };
  $('explore').onclick = () => $('catalog').scrollIntoView({ behavior: 'smooth' });
  $('about').onclick = () => modal('CineNova', lang === 'tr'
    ? 'CineNova uluslararası bir yayın platformu fikrinin demo tasarımıdır. Katalogda gerçek filmlerin bilgi kayıtları bulunur; afiş yerine CineNova’ya özgü renk kartları kullanılır. Video oynatma, hesap, ödeme ve reklam altyapısı etkin değildir. CineNova AI tamamen tarayıcında çalışır ve ücretsizdir.'
    : 'CineNova is a demo of an international streaming platform idea. The catalog lists real movies as information entries, using CineNova’s own colour cards instead of posters. Video playback, accounts, payments and ads are not active. CineNova AI runs entirely in your browser and is free.');
  $('premiumBtn').onclick = () => modal('CineNova Plus', lang === 'tr' ? 'Premium üyelik bu prototipte yalnızca fikir olarak gösterilir. Gerçek ödeme alınmaz.' : 'Premium is shown as a concept only in this prototype. No payment is taken.');
  $('language').onclick = () => { lang = lang === 'tr' ? 'en' : 'tr'; setLang(); };
  $('close').onclick = hideModal; $('ok').onclick = hideModal;
  $('modalBg').onclick = e => { if (e.target.id === 'modalBg') hideModal(); };
  $('aiFab').onclick = () => $('aiPanel').classList.contains('show') ? closeAI() : openAI();
  $('aiClose').onclick = closeAI;
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if ($('modalBg').classList.contains('show')) return hideModal();
    if ($('aiPanel').classList.contains('show')) return closeAI();
    $('searchBox').classList.remove('show');
  });

  setLang();
})();
