/*
 * CineNova katalog verileri.
 * Yalnızca katalog bilgisi içerir: başlık, yıl, tür, kısa (özgün) açıklama ve aile izleme bilgisi.
 * Telif hakkıyla korunan afiş kullanılmaz; kart görselleri CSS degradeleriyle üretilir.
 * Video dosyası yoktur — kartlar yalnızca bilgi kartıdır.
 *
 * family: 'all'  = tüm aile için uygun
 *         'pg'   = aileyle izlenebilir, küçük çocuklar için ebeveyn rehberliği önerilir
 *         'teen' = 13 yaş ve üzeri için önerilir
 *         'adult'= yetişkin izleyiciler için (aile izlemesi için önerilmez)
 * rating: ABD (MPA / TV) derecelendirmesi — yalnızca bilgilendirme amaçlıdır.
 */
(function (root) {
  const C = [
    {
      id: 'interstellar', title: 'Interstellar', trTitle: 'Yıldızlararası', year: 2014,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Dram', 'Macera'], credit: 'Christopher Nolan',
      family: 'teen', rating: 'PG-13', symbol: '✦',
      themes: ['uzay', 'zaman', 'baba-kız', 'hayatta kalma', 'bilim', 'fedakârlık', 'keşif', 'aile bağı'],
      moods: ['düşündürücü', 'duygusal', 'epik', 'meraklı'],
      desc: {
        tr: 'Kuraklıkla boğuşan Dünya için yeni bir yuva arayan bir ekip, bir solucan deliğinden geçerek bilinmeyene yolculuk eder. Zaman ve sevgi üzerine büyük ölçekli bir uzay dramı.',
        en: 'A crew searching for a new home for a dying Earth travels through a wormhole into the unknown. A large-scale space drama about time and love.'
      }
    },
    {
      id: 'the-martian', title: 'The Martian', trTitle: 'Marslı', year: 2015,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Macera', 'Komedi'], credit: 'Ridley Scott',
      family: 'teen', rating: 'PG-13', symbol: '◐',
      themes: ['uzay', 'mars', 'hayatta kalma', 'bilim', 'zekâ', 'yalnızlık', 'ekip ruhu', 'umut'],
      moods: ['umut verici', 'esprili', 'heyecanlı', 'ilham verici'],
      desc: {
        tr: 'Mars’ta yanlışlıkla geride bırakılan bir astronot, bilgisi ve mizah duygusuyla hayatta kalmaya çalışırken Dünya onu kurtarmanın yolunu arar.',
        en: 'An astronaut accidentally left behind on Mars relies on science and humour to survive while Earth races to bring him home.'
      }
    },
    {
      id: 'arrival', title: 'Arrival', trTitle: 'Geliş', year: 2016,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Dram', 'Gizem'], credit: 'Denis Villeneuve',
      family: 'teen', rating: 'PG-13', symbol: '◯',
      themes: ['uzaylılar', 'dil', 'iletişim', 'zaman', 'kayıp', 'bilim', 'anne-kız'],
      moods: ['düşündürücü', 'duygusal', 'sakin', 'meraklı'],
      desc: {
        tr: 'Dünyanın farklı noktalarına gizemli uzay araçları indiğinde, bir dil bilimci onlarla iletişim kurmanın yolunu bulmakla görevlendirilir.',
        en: 'When mysterious spacecraft land around the world, a linguist is asked to find a way to communicate with the visitors.'
      }
    },
    {
      id: 'paddington-2', title: 'Paddington 2', trTitle: null, year: 2017,
      kinds: ['Film'], genres: ['Aile', 'Komedi', 'Macera'], credit: 'Paul King',
      family: 'all', rating: 'PG', symbol: '☂',
      themes: ['iyilik', 'dostluk', 'aile', 'londra', 'nezaket', 'macera', 'ayı'],
      moods: ['neşeli', 'sıcak', 'komik', 'rahatlatıcı'],
      desc: {
        tr: 'Nazik ayı Paddington, teyzesine almak istediği özel bir hediye kitap çalınınca suçu üstlenmek zorunda kalır ve adını temize çıkarmak için uğraşır.',
        en: 'Kind-hearted bear Paddington is wrongly blamed when a special book he wanted for his aunt is stolen, and sets out to clear his name.'
      }
    },
    {
      id: 'paddington', title: 'Paddington', trTitle: null, year: 2014,
      kinds: ['Film'], genres: ['Aile', 'Komedi', 'Macera'], credit: 'Paul King',
      family: 'all', rating: 'PG', symbol: '✉',
      themes: ['iyilik', 'aile', 'londra', 'yuva', 'nezaket', 'ayı', 'aidiyet'],
      moods: ['neşeli', 'sıcak', 'komik', 'rahatlatıcı'],
      desc: {
        tr: 'Peru’dan Londra’ya gelen kibar bir ayı, yeni bir yuva ararken Brown ailesiyle tanışır ve hayatlarını renklendirir.',
        en: 'A polite bear from Peru arrives in London looking for a home and changes the lives of the Brown family.'
      }
    },
    {
      id: 'about-time', title: 'About Time', trTitle: 'Aşk Zamanı', year: 2013,
      kinds: ['Film'], genres: ['Romantik', 'Dram', 'Komedi', 'Fantastik'], credit: 'Richard Curtis',
      family: 'adult', rating: 'R', symbol: '⌛',
      themes: ['zaman yolculuğu', 'aşk', 'baba-oğul', 'aile', 'hayatın anlamı', 'anı yaşamak'],
      moods: ['duygusal', 'sıcak', 'romantik', 'hüzünlü', 'esprili'],
      desc: {
        tr: 'Ailesinin erkeklerinin zamanda geriye gidebildiğini öğrenen genç bir adam, bu yeteneği aşkı ve hayatı daha iyi yaşamak için kullanmaya çalışır.',
        en: 'A young man learns the men in his family can travel back in time, and tries to use the gift to make life and love better.'
      }
    },
    {
      id: 'la-la-land', title: 'La La Land', trTitle: 'Aşıklar Şehri', year: 2016,
      kinds: ['Film'], genres: ['Müzikal', 'Romantik', 'Dram'], credit: 'Damien Chazelle',
      family: 'teen', rating: 'PG-13', symbol: '♪',
      themes: ['aşk', 'hayaller', 'müzik', 'caz', 'kariyer', 'los angeles', 'fedakârlık'],
      moods: ['romantik', 'duygusal', 'hüzünlü', 'ilham verici'],
      desc: {
        tr: 'Los Angeles’ta oyuncu olmak isteyen bir genç kadın ile caz tutkunu bir piyanist, hem aşklarının hem de hayallerinin peşinden koşar.',
        en: 'In Los Angeles, an aspiring actress and a jazz pianist fall in love while chasing their dreams.'
      }
    },
    {
      id: 'inside-out', title: 'Inside Out', trTitle: 'Ters Yüz', year: 2015,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Komedi'], credit: 'Pete Docter',
      family: 'all', rating: 'PG', symbol: '☺',
      themes: ['duygular', 'büyümek', 'aile', 'anılar', 'taşınmak', 'iç dünya'],
      moods: ['duygusal', 'komik', 'sıcak', 'düşündürücü'],
      desc: {
        tr: 'Yeni bir şehre taşınan Riley’nin zihninde Neşe, Üzüntü, Korku, Öfke ve İğrenme; bu zorlu değişime nasıl uyum sağlayacağını birlikte öğrenir.',
        en: 'Inside the mind of Riley, who has just moved to a new city, her emotions learn to handle a difficult change together.'
      }
    },
    {
      id: 'inside-out-2', title: 'Inside Out 2', trTitle: 'Ters Yüz 2', year: 2024,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Komedi'], credit: 'Kelsey Mann',
      family: 'all', rating: 'PG', symbol: '☻',
      themes: ['duygular', 'büyümek', 'ergenlik', 'kaygı', 'dostluk', 'iç dünya'],
      moods: ['duygusal', 'komik', 'sıcak'],
      desc: {
        tr: 'Ergenliğe adım atan Riley’nin zihnine Kaygı başta olmak üzere yeni duygular gelir ve tanıdık ekibin dengesi değişir.',
        en: 'As Riley becomes a teenager, new emotions led by Anxiety arrive and shake up the familiar team.'
      }
    },
    {
      id: 'coco', title: 'Coco', trTitle: null, year: 2017,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Müzikal', 'Fantastik'], credit: 'Lee Unkrich',
      family: 'all', rating: 'PG', symbol: '✿',
      themes: ['aile', 'müzik', 'meksika', 'anılar', 'nesiller', 'hayaller', 'ölüler günü'],
      moods: ['duygusal', 'renkli', 'sıcak', 'hüzünlü'],
      desc: {
        tr: 'Müzisyen olmayı hayal eden Miguel, Ölüler Günü’nde kendini renkli bir öbür dünyada bulur ve ailesinin geçmişini keşfeder.',
        en: 'Aspiring musician Miguel finds himself in a colourful land of the dead on Día de Muertos and uncovers his family’s past.'
      }
    },
    {
      id: 'finding-nemo', title: 'Finding Nemo', trTitle: 'Kayıp Balık Nemo', year: 2003,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Macera', 'Komedi'], credit: 'Andrew Stanton',
      family: 'all', rating: 'G', symbol: '❂',
      themes: ['okyanus', 'baba-oğul', 'dostluk', 'yolculuk', 'cesaret', 'deniz canlıları'],
      moods: ['komik', 'sıcak', 'macera dolu', 'neşeli'],
      desc: {
        tr: 'Endişeli palyaço balığı Marlin, kaybolan oğlu Nemo’yu bulmak için unutkan ama neşeli Dory ile okyanusu boydan boya geçer.',
        en: 'Anxious clownfish Marlin crosses the ocean with cheerful, forgetful Dory to find his missing son Nemo.'
      }
    },
    {
      id: 'the-wild-robot', title: 'The Wild Robot', trTitle: 'Vahşi Robot', year: 2024,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Bilim Kurgu', 'Macera'], credit: 'Chris Sanders',
      family: 'all', rating: 'PG', symbol: '⚙',
      themes: ['robot', 'doğa', 'annelik', 'aile', 'hayatta kalma', 'hayvanlar', 'aidiyet'],
      moods: ['duygusal', 'sıcak', 'ilham verici', 'macera dolu'],
      desc: {
        tr: 'Issız bir adaya düşen robot Roz, vahşi doğaya uyum sağlamaya çalışırken yetim bir kaz yavrusunun annesi olur.',
        en: 'Stranded on a wild island, robot Roz learns to adapt to nature and becomes the parent of an orphaned gosling.'
      }
    },
    {
      id: 'up', title: 'Up', trTitle: 'Yukarı Bak', year: 2009,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Macera', 'Komedi'], credit: 'Pete Docter',
      family: 'all', rating: 'PG', symbol: '◍',
      themes: ['macera', 'kayıp', 'dostluk', 'hayaller', 'yaşlılık', 'yolculuk', 'nesiller'],
      moods: ['duygusal', 'komik', 'macera dolu', 'sıcak'],
      desc: {
        tr: 'Yaşlı Carl, evini binlerce balonla havalandırıp hayalindeki yere yola çıkar; ama yanında beklenmedik küçük bir yol arkadaşı vardır.',
        en: 'Elderly Carl ties thousands of balloons to his house to fly to his dream destination — with an unexpected young stowaway.'
      }
    },
    {
      id: 'wall-e', title: 'WALL·E', trTitle: 'VAL-İ', year: 2008,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Bilim Kurgu', 'Romantik'], credit: 'Andrew Stanton',
      family: 'all', rating: 'G', symbol: '▣',
      themes: ['robot', 'uzay', 'çevre', 'aşk', 'yalnızlık', 'gelecek'],
      moods: ['sıcak', 'romantik', 'düşündürücü', 'sakin'],
      desc: {
        tr: 'Terk edilmiş Dünya’da çöp toplayan küçük robot, keşif robotu EVE ile tanışınca insanlığın geleceğini etkileyecek bir yolculuğa çıkar.',
        en: 'A small trash-compacting robot on an abandoned Earth meets the probe EVE and sets off on a journey that affects humanity’s future.'
      }
    },
    {
      id: 'soul', title: 'Soul', trTitle: null, year: 2020,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Komedi', 'Fantastik'], credit: 'Pete Docter',
      family: 'all', rating: 'PG', symbol: '♫',
      themes: ['hayatın anlamı', 'müzik', 'caz', 'hayaller', 'anı yaşamak', 'ruh'],
      moods: ['düşündürücü', 'duygusal', 'sakin', 'ilham verici'],
      desc: {
        tr: 'Caz piyanisti olmayı hayal eden bir müzik öğretmeni, beklenmedik bir olayın ardından hayatın asıl anlamını sorgulamaya başlar.',
        en: 'A music teacher who dreams of playing jazz is forced, after an unexpected event, to rethink what makes life meaningful.'
      }
    },
    {
      id: 'toy-story', title: 'Toy Story', trTitle: 'Oyuncak Hikâyesi', year: 1995,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Komedi', 'Macera'], credit: 'John Lasseter',
      family: 'all', rating: 'G', symbol: '★',
      themes: ['oyuncaklar', 'dostluk', 'kıskançlık', 'çocukluk', 'macera'],
      moods: ['komik', 'neşeli', 'sıcak', 'nostaljik'],
      desc: {
        tr: 'Kovboy oyuncak Woody, yeni gelen gösterişli astronot Buzz’ı kıskanır; ikisi kaybolunca eve dönmek için birlikte çalışmak zorunda kalır.',
        en: 'Cowboy toy Woody is jealous of flashy newcomer Buzz, until both get lost and must work together to get home.'
      }
    },
    {
      id: 'zootopia', title: 'Zootopia', trTitle: 'Zootropolis: Hayvanlar Şehri', year: 2016,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Komedi', 'Gizem'], credit: 'Byron Howard, Rich Moore',
      family: 'all', rating: 'PG', symbol: '◆',
      themes: ['hayvanlar', 'önyargı', 'dostluk', 'polisiye', 'şehir', 'hayaller'],
      moods: ['komik', 'neşeli', 'macera dolu'],
      desc: {
        tr: 'Hevesli tavşan polis Judy, kurnaz tilki Nick ile birlikte hayvanların yaşadığı büyük şehirde gizemli bir vakayı çözmeye çalışır.',
        en: 'Eager rabbit officer Judy teams up with sly fox Nick to crack a mystery in a sprawling city of animals.'
      }
    },
    {
      id: 'how-to-train-your-dragon', title: 'How to Train Your Dragon', trTitle: 'Ejderhanı Nasıl Eğitirsin', year: 2010,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Macera', 'Fantastik'], credit: 'Dean DeBlois, Chris Sanders',
      family: 'all', rating: 'PG', symbol: '▲',
      themes: ['ejderhalar', 'dostluk', 'baba-oğul', 'cesaret', 'önyargı', 'uçmak'],
      moods: ['macera dolu', 'heyecanlı', 'sıcak', 'epik'],
      desc: {
        tr: 'Ejderhalarla savaşan bir Viking köyünde genç Hıçkıdık, yaralı bir ejderhayla dost olur ve her şeyin değişebileceğini gösterir.',
        en: 'In a Viking village at war with dragons, young Hiccup befriends an injured dragon and shows that things can change.'
      }
    },
    {
      id: 'spirited-away', title: 'Spirited Away', trTitle: 'Ruhların Kaçışı', year: 2001,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Fantastik', 'Macera', 'Aile'], credit: 'Hayao Miyazaki',
      family: 'pg', rating: 'PG', symbol: '❖',
      themes: ['ruhlar', 'büyümek', 'cesaret', 'japonya', 'büyülü dünya', 'aile'],
      moods: ['büyülü', 'meraklı', 'düşündürücü', 'macera dolu'],
      desc: {
        tr: 'Ailesiyle birlikte gizemli bir dünyaya adım atan Chihiro, ruhların uğradığı bir hamamda çalışarak ailesini kurtarmanın yolunu arar.',
        en: 'After stumbling into a mysterious world, Chihiro works at a bathhouse for spirits to find a way to save her parents.'
      }
    },
    {
      id: 'spider-verse', title: 'Spider-Man: Into the Spider-Verse', trTitle: 'Örümcek-Adam: Örümcek Evreninde', year: 2018,
      kinds: ['Film', 'Animasyon'], genres: ['Animasyon', 'Aksiyon', 'Macera', 'Komedi'], credit: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
      family: 'pg', rating: 'PG', symbol: '✺',
      themes: ['süper kahraman', 'büyümek', 'paralel evrenler', 'aile', 'cesaret', 'kimlik'],
      moods: ['heyecanlı', 'komik', 'renkli', 'ilham verici'],
      desc: {
        tr: 'Brooklyn’li genç Miles Morales, farklı evrenlerden gelen Örümcek kahramanlarla tanışır ve kendi kahramanlık yolunu bulur.',
        en: 'Brooklyn teen Miles Morales meets Spider-heroes from other dimensions and discovers his own path as a hero.'
      }
    },
    {
      id: 'gravity', title: 'Gravity', trTitle: 'Yerçekimi', year: 2013,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Gerilim', 'Dram'], credit: 'Alfonso Cuarón',
      family: 'teen', rating: 'PG-13', symbol: '◎',
      themes: ['uzay', 'hayatta kalma', 'yalnızlık', 'kayıp', 'dayanıklılık'],
      moods: ['heyecanlı', 'gergin', 'duygusal'],
      desc: {
        tr: 'Yörüngede yaşanan bir kazanın ardından iki astronot, uzay boşluğunda hayatta kalıp Dünya’ya dönmenin yolunu arar.',
        en: 'After an accident in orbit, two astronauts struggle to survive in space and find a way back to Earth.'
      }
    },
    {
      id: 'inception', title: 'Inception', trTitle: 'Başlangıç', year: 2010,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Aksiyon', 'Gerilim'], credit: 'Christopher Nolan',
      family: 'teen', rating: 'PG-13', symbol: '◇',
      themes: ['rüyalar', 'zihin', 'soygun', 'kayıp', 'gerçeklik'],
      moods: ['heyecanlı', 'düşündürücü', 'gergin', 'epik'],
      desc: {
        tr: 'Rüyalara girip sırları çalabilen bir ekip, bu kez bir fikri bir insanın zihnine yerleştirmek gibi imkânsız görünen bir işe girişir.',
        en: 'A team that can enter dreams to steal secrets takes on a near-impossible job: planting an idea in someone’s mind.'
      }
    },
    {
      id: 'contact', title: 'Contact', trTitle: null, year: 1997,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Dram', 'Gizem'], credit: 'Robert Zemeckis',
      family: 'pg', rating: 'PG', symbol: '⌁',
      themes: ['uzaylılar', 'iletişim', 'bilim', 'inanç', 'baba-kız', 'keşif', 'uzay'],
      moods: ['düşündürücü', 'meraklı', 'duygusal'],
      desc: {
        tr: 'Bir gökbilimci uzaydan gelen bir sinyal yakaladığında, bilim ile inanç arasındaki soruları da beraberinde getiren bir keşif başlar.',
        en: 'When an astronomer detects a signal from space, a discovery begins that raises questions about science and belief.'
      }
    },
    {
      id: 'hidden-figures', title: 'Hidden Figures', trTitle: 'Gizli Sayılar', year: 2016,
      kinds: ['Film'], genres: ['Dram', 'Biyografi'], credit: 'Theodore Melfi',
      family: 'pg', rating: 'PG', symbol: '∑',
      themes: ['uzay', 'bilim', 'matematik', 'eşitlik', 'gerçek hikâye', 'kadınlar', 'ekip ruhu'],
      moods: ['ilham verici', 'umut verici', 'sıcak'],
      desc: {
        tr: 'NASA’nın uzay yarışında kritik rol oynayan üç Afro-Amerikalı kadın matematikçinin gerçek hikâyesinden uyarlanan ilham verici bir film.',
        en: 'An inspiring film based on the true story of three African-American women mathematicians who played key roles at NASA.'
      }
    },
    {
      id: 'walter-mitty', title: 'The Secret Life of Walter Mitty', trTitle: 'Walter Mitty’nin Gizli Yaşamı', year: 2013,
      kinds: ['Film'], genres: ['Macera', 'Komedi', 'Dram'], credit: 'Ben Stiller',
      family: 'pg', rating: 'PG', symbol: '⛰',
      themes: ['hayaller', 'yolculuk', 'cesaret', 'hayatın anlamı', 'keşif', 'aşk'],
      moods: ['ilham verici', 'sıcak', 'esprili', 'umut verici'],
      desc: {
        tr: 'Gündüz düşleriyle yaşayan sessiz bir dergi çalışanı, kayıp bir fotoğraf negatifinin peşinde gerçek bir dünya macerasına atılır.',
        en: 'A quiet magazine employee who lives in daydreams sets off on a real-world adventure to find a missing photo negative.'
      }
    },
    {
      id: 'truman-show', title: 'The Truman Show', trTitle: null, year: 1998,
      kinds: ['Film'], genres: ['Komedi', 'Dram', 'Bilim Kurgu'], credit: 'Peter Weir',
      family: 'pg', rating: 'PG', symbol: '☀',
      themes: ['gerçeklik', 'medya', 'özgürlük', 'kimlik', 'keşif'],
      moods: ['düşündürücü', 'esprili', 'duygusal'],
      desc: {
        tr: 'Sıradan görünen hayatındaki tuhaflıkları fark eden Truman, yaşadığı dünyanın sandığı gibi olmayabileceğinden şüphelenir.',
        en: 'Noticing odd details in his seemingly ordinary life, Truman begins to suspect his world is not what it seems.'
      }
    },
    {
      id: 'back-to-the-future', title: 'Back to the Future', trTitle: 'Geleceğe Dönüş', year: 1985,
      kinds: ['Film'], genres: ['Bilim Kurgu', 'Macera', 'Komedi'], credit: 'Robert Zemeckis',
      family: 'pg', rating: 'PG', symbol: '⚡',
      themes: ['zaman yolculuğu', 'aile', 'dostluk', 'gençlik', 'nostalji'],
      moods: ['komik', 'heyecanlı', 'neşeli', 'nostaljik'],
      desc: {
        tr: 'Genç Marty, eksantrik bilim insanı dostunun icat ettiği zaman makinesiyle yanlışlıkla 1955’e gider ve geleceğini korumak zorunda kalır.',
        en: 'Teenager Marty is accidentally sent back to 1955 in his eccentric scientist friend’s time machine and must protect his own future.'
      }
    },
    {
      id: 'grand-budapest', title: 'The Grand Budapest Hotel', trTitle: 'Büyük Budapeşte Oteli', year: 2014,
      kinds: ['Film'], genres: ['Komedi', 'Macera', 'Suç'], credit: 'Wes Anderson',
      family: 'adult', rating: 'R', symbol: '▥',
      themes: ['otel', 'dostluk', 'avrupa', 'nostalji', 'kovalamaca', 'sadakat'],
      moods: ['esprili', 'renkli', 'komik', 'nostaljik'],
      desc: {
        tr: 'Ünlü bir otelin titiz konsiyerji ile genç lobi çocuğu, değerli bir tablo ve miras kavgasının ortasında kendilerini çılgın bir kovalamacada bulur.',
        en: 'A famed hotel’s meticulous concierge and his young lobby boy are swept into a caper over a priceless painting and an inheritance.'
      }
    },
    {
      id: 'intouchables', title: 'The Intouchables', trTitle: 'Can Dostum', year: 2011,
      kinds: ['Film'], genres: ['Komedi', 'Dram', 'Biyografi'], credit: 'Olivier Nakache, Éric Toledano',
      family: 'adult', rating: 'R', symbol: '♞',
      themes: ['dostluk', 'gerçek hikâye', 'engellilik', 'farklılıklar', 'hayata tutunmak'],
      moods: ['komik', 'sıcak', 'duygusal', 'umut verici'],
      desc: {
        tr: 'Varlıklı ve felçli bir adam ile ona bakmak için işe alınan genç arasında, beklenmedik ve hayat dolu bir dostluk filizlenir.',
        en: 'An unlikely, life-affirming friendship grows between a wealthy man with paralysis and the young carer he hires.'
      }
    },
    {
      id: 'little-miss-sunshine', title: 'Little Miss Sunshine', trTitle: 'Küçük Gün Işığım', year: 2006,
      kinds: ['Film'], genres: ['Komedi', 'Dram'], credit: 'Jonathan Dayton, Valerie Faris',
      family: 'adult', rating: 'R', symbol: '☼',
      themes: ['aile', 'yolculuk', 'hayaller', 'kusurlar', 'birlik'],
      moods: ['komik', 'sıcak', 'duygusal', 'esprili'],
      desc: {
        tr: 'Her biri kendi derdiyle boğuşan dağınık bir aile, küçük kızlarını bir güzellik yarışmasına yetiştirmek için eski bir minibüsle yola çıkar.',
        en: 'A struggling, chaotic family piles into an old van to get their young daughter to a children’s pageant.'
      }
    },
    {
      id: 'school-of-rock', title: 'School of Rock', trTitle: 'Rock Okulu', year: 2003,
      kinds: ['Film'], genres: ['Komedi', 'Müzikal', 'Aile'], credit: 'Richard Linklater',
      family: 'pg', rating: 'PG-13', symbol: '⚑',
      themes: ['müzik', 'okul', 'çocuklar', 'hayaller', 'özgüven', 'ekip ruhu'],
      moods: ['komik', 'neşeli', 'enerjik'],
      desc: {
        tr: 'İşsiz bir rock müzisyeni yedek öğretmen kılığına girer ve sınıfındaki öğrencilerle bir rock grubu kurmaya karar verir.',
        en: 'An out-of-work rock musician poses as a substitute teacher and turns his class into a rock band.'
      }
    },
    {
      id: 'pride-and-prejudice', title: 'Pride & Prejudice', trTitle: 'Aşk ve Gurur', year: 2005,
      kinds: ['Film'], genres: ['Romantik', 'Dram'], credit: 'Joe Wright',
      family: 'pg', rating: 'PG', symbol: '❦',
      themes: ['aşk', 'önyargı', 'aile', 'edebiyat uyarlaması', 'dönem', 'kız kardeşler'],
      moods: ['romantik', 'duygusal', 'sakin'],
      desc: {
        tr: 'Jane Austen’ın romanından uyarlanan filmde, keskin zekâlı Elizabeth Bennet ile mesafeli Bay Darcy arasındaki ilişki önyargılarla sınanır.',
        en: 'Adapted from Jane Austen’s novel: sharp-witted Elizabeth Bennet and aloof Mr Darcy are tested by pride and first impressions.'
      }
    },
    {
      id: 'the-notebook', title: 'The Notebook', trTitle: 'Not Defteri', year: 2004,
      kinds: ['Film'], genres: ['Romantik', 'Dram'], credit: 'Nick Cassavetes',
      family: 'teen', rating: 'PG-13', symbol: '✎',
      themes: ['aşk', 'anılar', 'yaşlılık', 'sınıf farkı', 'sadakat'],
      moods: ['romantik', 'duygusal', 'hüzünlü'],
      desc: {
        tr: 'Bir huzurevinde okunan eski bir defter, farklı dünyalardan gelen iki gencin yıllara meydan okuyan aşk hikâyesini anlatır.',
        en: 'An old notebook read aloud in a care home tells the story of two young people from different worlds whose love defies the years.'
      }
    },
    {
      id: 'eternal-sunshine', title: 'Eternal Sunshine of the Spotless Mind', trTitle: 'Sil Baştan', year: 2004,
      kinds: ['Film'], genres: ['Romantik', 'Dram', 'Bilim Kurgu'], credit: 'Michel Gondry',
      family: 'adult', rating: 'R', symbol: '❄',
      themes: ['aşk', 'anılar', 'zihin', 'ayrılık', 'pişmanlık'],
      moods: ['romantik', 'duygusal', 'hüzünlü', 'düşündürücü'],
      desc: {
        tr: 'Ayrılığın ardından eski sevgilisinin onu hafızasından sildirdiğini öğrenen Joel, aynı işlemi kendisi de yaptırmaya karar verir.',
        en: 'After a breakup, Joel discovers his ex has had him erased from her memory and decides to undergo the same procedure.'
      }
    },
    {
      id: 'amelie', title: 'Amélie', trTitle: 'Amelie', year: 2001,
      kinds: ['Film'], genres: ['Romantik', 'Komedi'], credit: 'Jean-Pierre Jeunet',
      family: 'adult', rating: 'R', symbol: '❀',
      themes: ['paris', 'iyilik', 'aşk', 'hayal gücü', 'yalnızlık'],
      moods: ['romantik', 'sıcak', 'esprili', 'renkli'],
      desc: {
        tr: 'Paris’te yaşayan hayalperest Amélie, çevresindeki insanların hayatına gizlice küçük mutluluklar eklerken kendi aşkını aramaya cesaret eder.',
        en: 'Dreamy Parisian Amélie secretly brings small joys to the people around her, and slowly finds the courage to seek love herself.'
      }
    },
    {
      id: 'march-of-the-penguins', title: 'March of the Penguins', trTitle: 'Penguenlerin Yürüyüşü', year: 2005,
      kinds: ['Belgesel'], genres: ['Belgesel', 'Doğa', 'Aile'], credit: 'Luc Jacquet',
      family: 'all', rating: 'G', symbol: '❅',
      themes: ['doğa', 'hayvanlar', 'antarktika', 'hayatta kalma', 'aile', 'göç'],
      moods: ['sakin', 'sıcak', 'meraklı'],
      desc: {
        tr: 'İmparator penguenlerin yavrularını büyütmek için Antarktika’nın zorlu koşullarında yaptığı uzun yolculuğu izleyen bir doğa belgeseli.',
        en: 'A nature documentary following emperor penguins on their long, harsh Antarctic journey to raise their young.'
      }
    },
    {
      id: 'my-octopus-teacher', title: 'My Octopus Teacher', trTitle: null, year: 2020,
      kinds: ['Belgesel'], genres: ['Belgesel', 'Doğa'], credit: 'Pippa Ehrlich, James Reed',
      family: 'all', rating: null, symbol: '≋',
      themes: ['okyanus', 'doğa', 'deniz canlıları', 'dostluk', 'iyileşme'],
      moods: ['sakin', 'duygusal', 'düşündürücü'],
      desc: {
        tr: 'Bir film yapımcısının Güney Afrika kıyısındaki yosun ormanında bir ahtapotla kurduğu sıra dışı bağı anlatan belgesel.',
        en: 'A documentary about a filmmaker’s remarkable bond with an octopus in a South African kelp forest.'
      }
    },
    {
      id: 'free-solo', title: 'Free Solo', trTitle: null, year: 2018,
      kinds: ['Belgesel'], genres: ['Belgesel', 'Spor'], credit: 'Elizabeth Chai Vasarhelyi, Jimmy Chin',
      family: 'teen', rating: 'PG-13', symbol: '⛰',
      themes: ['tırmanış', 'cesaret', 'gerçek hikâye', 'doğa', 'hedef'],
      moods: ['heyecanlı', 'gergin', 'ilham verici'],
      desc: {
        tr: 'Tırmanıcı Alex Honnold’un Yosemite’deki El Capitan kaya duvarına ip kullanmadan tırmanma hedefini izleyen belgesel.',
        en: 'A documentary following climber Alex Honnold’s goal of climbing Yosemite’s El Capitan without ropes.'
      }
    },
    {
      id: 'planet-earth-2', title: 'Planet Earth II', trTitle: null, year: 2016,
      kinds: ['Belgesel', 'Dizi'], genres: ['Belgesel', 'Doğa', 'Aile'], credit: 'BBC · David Attenborough (anlatıcı)',
      family: 'all', rating: null, symbol: '◉',
      themes: ['doğa', 'hayvanlar', 'gezegen', 'hayatta kalma', 'okyanus'],
      moods: ['sakin', 'meraklı', 'epik'],
      desc: {
        tr: 'Adalardan dağlara, ormanlardan şehirlere kadar farklı yaşam alanlarındaki canlıları yakından izleyen belgesel dizi.',
        en: 'A documentary series observing wildlife across islands, mountains, jungles, deserts and cities.'
      }
    },
    {
      id: 'bluey', title: 'Bluey', trTitle: null, year: 2018,
      kinds: ['Dizi', 'Animasyon'], genres: ['Animasyon', 'Aile', 'Komedi'], credit: 'Joe Brumm',
      family: 'all', rating: 'TV-Y', symbol: '❤',
      themes: ['aile', 'oyun', 'çocukluk', 'hayal gücü', 'ebeveynlik'],
      moods: ['komik', 'sıcak', 'neşeli', 'rahatlatıcı'],
      desc: {
        tr: 'Enerjik yavru köpek Bluey ve ailesi, gündelik hayatı hayal gücüyle dolu oyunlara dönüştürür. Kısa bölümlü bir aile animasyonu.',
        en: 'Energetic puppy Bluey and her family turn everyday life into imaginative games. A short-episode family animation.'
      }
    },
    {
      id: 'stranger-things', title: 'Stranger Things', trTitle: null, year: 2016,
      kinds: ['Dizi'], genres: ['Bilim Kurgu', 'Gizem', 'Korku', 'Dram'], credit: 'Duffer Kardeşler',
      family: 'teen', rating: 'TV-14', symbol: '◈',
      themes: ['dostluk', '80ler', 'doğaüstü', 'kasaba', 'gençlik', 'nostalji'],
      moods: ['gergin', 'heyecanlı', 'nostaljik', 'meraklı'],
      desc: {
        tr: '1980’lerde küçük bir kasabada bir çocuk kaybolunca arkadaşları, gizemli bir kız ve tuhaf olaylarla dolu doğaüstü bir sırra adım atar.',
        en: 'In a small 1980s town, a boy’s disappearance leads his friends to a mysterious girl and a supernatural secret.'
      }
    },
    {
      id: 'dark', title: 'Dark', trTitle: null, year: 2017,
      kinds: ['Dizi'], genres: ['Bilim Kurgu', 'Gizem', 'Gerilim', 'Dram'], credit: 'Baran bo Odar, Jantje Friese',
      family: 'adult', rating: 'TV-MA', symbol: '◬',
      themes: ['zaman yolculuğu', 'kasaba', 'aile sırları', 'nesiller', 'kayıp'],
      moods: ['gergin', 'düşündürücü', 'karanlık'],
      desc: {
        tr: 'Bir Alman kasabasında kaybolan çocuklar, dört ailenin nesiller boyu iç içe geçmiş sırlarını ve zamanla ilgili bir gizemi açığa çıkarır.',
        en: 'Disappearing children in a German town expose the secrets of four families across generations — and a mystery tied to time.'
      }
    },
    {
      id: 'ted-lasso', title: 'Ted Lasso', trTitle: null, year: 2020,
      kinds: ['Dizi'], genres: ['Komedi', 'Dram', 'Spor'], credit: 'Apple TV+',
      family: 'adult', rating: 'TV-MA', symbol: '⚽',
      themes: ['futbol', 'iyimserlik', 'ekip ruhu', 'iyilik', 'liderlik', 'dostluk'],
      moods: ['komik', 'sıcak', 'umut verici', 'duygusal'],
      desc: {
        tr: 'Amerikan futbolu antrenörü Ted Lasso, hiç bilmediği bir sporda İngiliz bir futbol kulübünü çalıştırmaya iyimserliğiyle başlar.',
        en: 'American football coach Ted Lasso takes over an English soccer club, armed with optimism rather than experience.'
      }
    }
  ];

  // Kart degradeleri (afiş yerine) — türe göre renk paleti.
  const palette = {
    'Bilim Kurgu': ['#0d1640', '#5a1fb3'], 'Animasyon': ['#3a0f6e', '#d24eaa'], 'Aile': ['#2b1458', '#e07a5f'],
    'Romantik': ['#3d0b2e', '#d6336c'], 'Komedi': ['#3b1a05', '#f59e0b'], 'Dram': ['#1b1030', '#7b3fa3'],
    'Müzikal': ['#2a0b3d', '#ff4f9a'], 'Belgesel': ['#05303f', '#18a6b4'], 'Doğa': ['#0b402b', '#4f9c58'],
    'Gizem': ['#0a1b36', '#3b5ba5'], 'Gerilim': ['#111827', '#a32139'], 'Macera': ['#1f1546', '#2f7dd1'],
    'Fantastik': ['#20104a', '#9d4edd'], 'Aksiyon': ['#260a10', '#e11d48'], 'Suç': ['#2a0f0f', '#9e3c25'],
    'Biyografi': ['#1d1a33', '#6c83bb'], 'Korku': ['#120509', '#7f1d1d'], 'Spor': ['#0c2a22', '#10b981']
  };
  C.forEach((m, i) => {
    const a = palette[m.genres[0]] || ['#32114d', '#b31c42'];
    const b = palette[m.genres[1]] || a;
    const angle = 120 + (i * 37) % 90;
    m.art = `linear-gradient(${angle}deg,${a[0]},${a[1]} 55%,${b[1]}88 85%,#08060d)`;
  });

  root.CINENOVA_CATALOG = C;
  if (typeof module !== 'undefined') module.exports = C;
})(typeof window !== 'undefined' ? window : globalThis);
