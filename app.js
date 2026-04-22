// ============================================================
// İMTAHAN TİPİNƏ GÖRƏ OTOMATİK QEYDLƏR
// ============================================================
const EXAM_NOTES = {
  test: [
    "🖥️ Bu fənn <strong>Elektron-Test</strong> formatındadır.",
    "🔀 Sualların sırası fərqli ola bilər. Cavabları sıraya görə deyil, mənaya görə öyrənin.",
    "⚠️ Materiallardakı cavablar köhnə ola bilər, müəllimin dediyi mövzularla müqayisə edin.",
    "💡 Bütün variantları nəzərdən keçirin, bəzən test tipli fənnlər yazılıya çevrilə bilər."
  ],
  yazili: [
    "✍️ Bu fənn <strong>Elektron-Yazılı</strong> formatındadır.",
    "📝 Cavablarınızı tam, əsaslandırılmış və ən önəmlisi fərqli şəkildə yazmağa diqqət göstərin.",
    "⚠️ Materiallardakı suallar köhnə ola bilər, sillabusunuzla mütləq uyğunlaşdırın.",
    "💡 Əlavə mənbələrdən də istifadə etməyi tövsiyə edirik, bəzən yazılı tipli fənnlər testə çevrilə bilər."
  ]
};

// ============================================================
// DATA
// ============================================================
const data = {
  "1-ci kurs": {
    icon: "📘",
    subjects: {
      "Xətti cəbr və riyazi analiz": {
        type: "test", semester: 1,
        pdfs: [{ name: "Xətti Cəbr və Riyazi Analiz Q26", file: "xcraQ26.pdf" }]
      },
      "İKT - Baza kompüter bilikləri": {
        type: "test", semester: 1,
        pdfs: [
          { name: "İKT - Baza Kompüter Bilikləri Q26", file: "iktQ26.pdf" },
          { name: "İKT - Baza Kompüter Bilikləri Q25", file: "iktQ25.pdf" }
        ]
      },
      "Azərbaycanın tarixi": {
        type: "test", semester: 1,
        pdfs: [{ name: "Azərbaycanın Tarixi Q26", file: "aztarixiQ26.pdf" }]
      },
      "Karyera planlaması": {
        type: "test", semester: 1,
        pdfs: [
          { name: "Karyera Planlaması Q26", file: "karyeraQ26.pdf" },
          { name: "Karyera Planlaması Q25", file: "karyeraQ25.pdf" }
        ]
      },
      "Xarici dildə işgüzar və akademik kommunikasiya A1": {
        type: "test", semester: 1,
        pdfs: [{ name: "White Death A1", file: "whitedeathA1.pdf" }]
      },
      "Ehtimal nəzəriyyəsi və riyazi statistika": {
        type: "test", semester: 2,
        pdfs: [
          { name: "Ehtimal Nəzəriyyəsi və Riyazi Statistika Y25", file: "enrsY25.pdf" },
          { name: "Ehtimal Nəzəriyyəsi və Riyazi Statistika Y23", file: "enrsY23.pdf" }
        ]
      },
      "Xarici dildə işgüzar və akademik kommunikasiya A2": {
        type: "test", semester: 2,
        pdfs: [{ name: "Robinson Crusoe A2", file: "robinsoncrusoeA2.pdf" }]
      },
      "Azərbaycan dilində işgüzar və akademik kommunikasiya": {
        type: "test", semester: 2,
        pdfs: [
          { name: "ADİAK Q26", file: "adiakQ26.pdf" },
          { name: "ADİAK Y25", file: "adiakY25.pdf" },
          { name: "ADİAK Y23", file: "adiakY23.pdf" }
        ]
      },
      "Yumşaq bacarıqlar (Soft skills)": {
        type: "test", semester: 2,
        pdfs: [{ name: "Soft Skills Y25", file: "softskillsY25.pdf" }]
      },
      "İqtisadiyyata giriş": {
        type: "yazili", semester: 2,
        pdfs: [{ name: "İqtisadiyyata Giriş - 1", file: "iqtisadiyyat1.pdf" }]
      },
      "Mülki müdafiə": {
        type: "test", semester: 2,
        pdfs: [
          { name: "Mülki Müdafiə Q26", file: "mulkimudafieQ26.pdf" },
          { name: "Mülki Müdafiə Y24", file: "mulkimudafieY24.pdf" },
          { name: "Mülki Müdafiə Q23", file: "mulkimudafieQ23.pdf" }
        ]
      },
      "Liner cebir ve matematiksel analiz": {
        type: "test", semester: 1,
        pdfs: [
          { name: "Liner Cebir ve Matematiksel Analiz Q26", file: "lcmaQ26.pdf" },
          { name: "Liner Cebir ve Matematiksel Analiz Q23", file: "lcmaQ23.pdf" }
        ]
      },
      "Azerbaycanın tarihi": {
        type: "test", semester: 1,
        pdfs: [
          { name: "Azerbaycanın Tarihi Q26", file: "aztarihiQ26.pdf" },
          { name: "Azerbaycanın Tarihi Q25", file: "aztarihiQ25.pdf" }
        ]
      },
      "Bilgi işlem teknolojileri": {
        type: "test", semester: 1,
        pdfs: [{ name: "Bilgi İşlem Teknolojileri - 1", file: "bit1.pdf" }]
      },
      "Yönetim ve organizasyon": {
        type: "test", semester: 1,
        pdfs: [{ name: "Yönetim ve Organizasyon Q25", file: "yonetimorganizasyonQ25.pdf" }]
      },
      "Olasılık teorisi ve matematiksel istatistik": {
        type: "test", semester: 2,
        pdfs: [{ name: "Olasılık Teorisi ve Matematiksel İstatistik Y26", file: "otmiY26.pdf" }]
      },
    }
  },
  "2-ci kurs": {
    icon: "📗",
    subjects: {
      "Mikroiqtisadiyyat": {
        type: "yazili", semester: 1,
        pdfs: [
          { name: "Mikroiqtisadiyyat - 1", file: "mikroiqt1.pdf" },
          { name: "Mikroiqtisadiyyat - 2", file: "mikroiqt2.pdf" },
          { name: "Mikroiqtisadiyyat - 3", file: "mikroiqt3.pdf" },
          { name: "Mikroiqtisadiyyat - 1 - Məsələlər", file: "mikroiqtmesele1.pdf" },
          { name: "Mikroiqtisadiyyat - 2 - Məsələlər", file: "mikroiqtmesele2.pdf" }
        ]
      },
      "Qiymət siyasəti": {
        type: "yazili", semester: 1,
        pdfs: [{ name: "Qiymət Siyasəti", file: "qiymet1.pdf" }]
      },
      "Əməyin iqtisadiyyatı": {
        type: "yazili", semester: 1,
        pdfs: [
          { name: "Əməyin İqtisadiyyatı - 1", file: "emek1.pdf" },
          { name: "Əməyin İqtisadiyyatı - 1 - Kollekvium", file: "emekkollek1.pdf" }
        ]
      },
      "Xarici dildə işgüzar və akademik kommunikasiya B1": {
        type: "test", semester: 1,
        pdfs: [{ name: "Forrest Gump B1", file: "forrestgumpB1.pdf" }]
      },
      "Ətraf mühitin iqtisadiyyatı": {
        type: "yazili", semester: 1,
        pdfs: [
          { name: "Ətraf Mühitin İqtisadiyyatı - 1", file: "emi1.pdf" },
          { name: "Ətraf Mühitin İqtisadiyyatı - 2", file: "emi2.pdf" },
          { name: "Ətraf Mühitin İqtisadiyyatı - 1 - Kollekvium", file: "emikollek1.pdf" },
          { name: "Ətraf Mühitin İqtisadiyyatı - 2 - Kollekvium", file: "emikollek2.pdf" }
        ]
      },
      "Azərbaycan iqtisadiyyatı": {
        type: "yazili", semester: 2,
        pdfs: [
          { name: "Azərbaycan İqtisadiyyatı - 1", file: "aziqt1.pdf" },
          { name: "Azərbaycan İqtisadiyyatı - 2", file: "aziqt2.pdf" },
          { name: "Azərbaycan İqtisadiyyatı - 3", file: "aziqt3.pdf" }
        ]
      },
      "Makroiqtisadiyyat": {
        type: "yazili", semester: 2,
        pdfs: [
          { name: "Makroiqtisadiyyat - 1", file: "makroiqt1.pdf" },
          { name: "Makroiqtisadiyyat - 1 - Məsələlər", file: "makroiqtmesele1.pdf" }
        ]
      },
      "Maliyyə uçotu": {
        type: "test", semester: 2,
        pdfs: [{ name: "Maliyyə Uçotu Q26", file: "maliyyeQ26.pdf" }]
      },
      "Xarici dildə işgüzar və akademik kommunikasiya B1+": {
        type: "test", semester: 2,
        pdfs: [{ name: "Sherlock Holmes B1+", file: "sherlockholmesB1+.pdf" }]
      },
      "İqtisadi fikir tarixi": {
        type: "yazili", semester: 2,
        pdfs: [
          { name: "İqtisadi Fikir Tarixi - 1", file: "iqtfkrtrx1.pdf" },
          { name: "İqtisadi Fikir Tarixi - 2", file: "iqtfkrtrx2.pdf" },
          { name: "İqtisadi Fikir Tarixi - 3", file: "iqtfkrtrx3.pdf" }
        ]
      },
      "Xərclərin idarə edilməsi": {
        type: "test", semester: 2,
        pdfs: [{ name: "Xərclərin İdarə Edilməsi Y25", file: "xerclerY25.pdf" }]
      },
    }
  },
  "3-cü kurs": {
    icon: "📙",
    subjects: {
      "Mülki müdafiə": {
        type: "test", semester: 1,
        pdfs: [
          { name: "Mülki Müdafiə Q26", file: "mulkimudafieQ26.pdf" },
          { name: "Mülki Müdafiə Y24", file: "mulkimudafieY24.pdf" },
          { name: "Mülki Müdafiə Q23", file: "mulkimudafieQ23.pdf" }
        ]
      },
      "Statistika": {
        type: "yazili", semester: 1,
        pdfs: [{ name: "Statistika", file: "statistika.pdf" }]
      }
    }
  },
  "4-cü kurs": {
    icon: "📕",
    subjects: {
      "Menecment": {
        type: "test", semester: 1,
        pdfs: [{ name: "Management material", file: "Manage.pdf" }]
      }
    }
  }
};

const EXTRAS_BASE = "/unecimtahanmateriallari/pdf-extra/";

const extrasData = {
  "1-ci kurs": [
    { name: "Ehtimal nəzəriyyəsi və riyazi statistika - Kollekvium", file: "enrskollektaplarla1.pdf", desc: "Bir çox testin yanında həlli yolu var" },
    { name: "Azərbaycan dilində işgüzar və akademik kommunikasiya - Test", file: "adiaktest1.pdf", desc: "ADİAK fənninə aid test" }
  ],
  "2-ci kurs": [
    { name: "Robinson Crusoe - Azərbaycan", file: "robinsonazeA2.pdf", desc: "Robinson Crusoe Azərbaycan dilindəki versiyası" }
  ],
  "3-cü kurs": [{ name: "Nümunə Material", file: "numune3.pdf", desc: "Əlavə qeydlər" }],
  "4-cü kurs": [{ name: "Nümunə Material", file: "numune4.pdf", desc: "Əlavə qeydlər" }]
};

// ============================================================
// TƏŞƏKKÜRLƏr DATA
// ============================================================
const thanksData = [
  { name: "Nərimanov Elnur",  initial: "E", role: "code" },
  { name: "Şükürova Güləyar", initial: "G", role: "pdf"  },
  { name: "Hacıyev Tofiq",    initial: "T", role: "pdf"  },
  { name: "İslamlı Həsən",    initial: "H", role: "pdf"  }
];

function renderThanks() {
  const ul = document.getElementById('thanks-list');
  if (!ul) return;
  ul.innerHTML = '';
  const groups = [
    { key: 'code', label: '💻 Kod töhfəçiləri' },
    { key: 'pdf',  label: '📄 PDF töhfəçiləri' }
  ];
  groups.forEach(group => {
    const people = thanksData.filter(p => p.role === group.key);
    if (!people.length) return;
    const header = document.createElement('li');
    header.className = 'thanks-section-label';
    header.textContent = group.label;
    ul.appendChild(header);
    people.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="thanks-avatar">${p.initial}</span>
        <div class="thanks-person"><span class="thanks-name">${p.name}</span></div>
        <span class="thanks-heart">♥</span>
      `;
      ul.appendChild(li);
    });
  });
}

// ============================================================
// EXAM TYPE BADGE
// ============================================================
function getTypeBadgeHTML(type) {
  if (type === 'test')   return `<span class="exam-type-badge exam-type-test">🖥️ Test</span>`;
  if (type === 'yazili') return `<span class="exam-type-badge exam-type-yazili">✍️ Yazılı</span>`;
  return '';
}

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  az: {
    badge: "İmtahan Materialları · 2025–2026",
    heroTitle: 'UNEC <span>İmtahan</span><br>Materialları',
    heroDesc: "Bütün PDF-ləri bir yerdə tap, vaxt itirmə. Fənni seç, materialı aç.",
    coursesLabel: "Kurslar",
    popularLabel: "Ən çox açılanlar",
    subjectsLabel: "Fənlər",
    extrasLabel: "Əlavələr",
    favoritesLabel: "Seçilmişlər",
    pdfsLabel: "PDF Materiallar",
    searchPlaceholder: "Fənn axtar...",
    heroSearchPlaceholder: "Fənn axtar...",
    back1: "Kurslara qayıt",
    back2: "Fənlərə qayıt",
    bcHome: "Ana səhifə",
    subjects: "fənn",
    pdfs: "material",
    openPdf: "Aç",
    statCourses: "Kurs",
    statSubjects: "Fənn",
    statPdfs: "PDF",
    noFavorites: "Hələ seçilən PDF yoxdur. ★ basaraq əlavə edin.",
    noExtras: "Bu kurs üçün hələ əlavə material yoxdur.",
    footer: "Bu sayt rəsmi deyildir. Yalnız tələbələrin imtahan zamanı materialları daha rahat tapması üçün hazırlanıb.",
    semesterFall: "🍂 Payız Semestri",
    semesterSpring: "🌸 Yaz Semestri",
    navCourses: "Kurslar",
    navPopular: "Ən populyar",
    navAbout: "Haqqında"
  },
  en: {
    badge: "Exam Materials · 2025–2026",
    heroTitle: 'UNEC <span>Exam</span><br>Materials',
    heroDesc: "Find all PDFs in one place. Select a subject, open the material.",
    coursesLabel: "Courses",
    popularLabel: "Most opened",
    subjectsLabel: "Subjects",
    extrasLabel: "Extras",
    favoritesLabel: "Favorites",
    pdfsLabel: "PDF Materials",
    searchPlaceholder: "Search subjects...",
    heroSearchPlaceholder: "Search subjects...",
    back1: "Back to Courses",
    back2: "Back to Subjects",
    bcHome: "Home",
    subjects: "subjects",
    pdfs: "files",
    openPdf: "Open",
    statCourses: "Courses",
    statSubjects: "Subjects",
    statPdfs: "PDFs",
    noFavorites: "No favorites yet. Tap ★ to add one.",
    noExtras: "No extra materials for this course yet.",
    footer: "This site is unofficial. Created to help students find exam materials more easily.",
    semesterFall: "🍂 Fall Semester",
    semesterSpring: "🌸 Spring Semester",
    navCourses: "Courses",
    navPopular: "Most popular",
    navAbout: "About"
  }
};

// ============================================================
// TEMA
// ============================================================
const themes = {
  ocean:    { '--bg':'#070d1a','--surface':'#0d1a2e','--surface2':'#122240','--accent':'#3b82f6','--accent2':'#06b6d4','--accent3':'#8b5cf6','--text':'#e2e8f0','--muted':'#64748b','--border':'rgba(59,130,246,0.15)','--glow':'rgba(59,130,246,0.08)' },
  forest:   { '--bg':'#071a0d','--surface':'#0d2e1a','--surface2':'#124022','--accent':'#22c55e','--accent2':'#4ade80','--accent3':'#86efac','--text':'#e2e8f0','--muted':'#6b7280','--border':'rgba(34,197,94,0.15)','--glow':'rgba(34,197,94,0.08)' },
  sunset:   { '--bg':'#1a0a07','--surface':'#2e150d','--surface2':'#402012','--accent':'#f97316','--accent2':'#ec4899','--accent3':'#fbbf24','--text':'#f1e8e0','--muted':'#78716c','--border':'rgba(249,115,22,0.15)','--glow':'rgba(249,115,22,0.08)' },
  midnight: { '--bg':'#0a0a0a','--surface':'#141414','--surface2':'#1f1f1f','--accent':'#ffffff','--accent2':'#a3a3a3','--accent3':'#737373','--text':'#e5e5e5','--muted':'#525252','--border':'rgba(255,255,255,0.1)','--glow':'rgba(255,255,255,0.04)' },
  candy:    { '--bg':'#fafafa','--surface':'#ffffff','--surface2':'#f3f4f6','--accent':'#a855f7','--accent2':'#ec4899','--accent3':'#8b5cf6','--text':'#1e1b4b','--muted':'#6b7280','--border':'rgba(168,85,247,0.15)','--glow':'rgba(168,85,247,0.06)' },
  arctic:   { '--bg':'#f0f9ff','--surface':'#ffffff','--surface2':'#e0f2fe','--accent':'#0284c7','--accent2':'#0ea5e9','--accent3':'#38bdf8','--text':'#0c1a2e','--muted':'#64748b','--border':'rgba(2,132,199,0.15)','--glow':'rgba(2,132,199,0.06)' },
};

function applyTheme(name, btn) {
  const vars = themes[name];
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  localStorage.setItem('theme', name);
  document.querySelectorAll('.theme-opt').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function toggleThemePanel() {
  document.getElementById('theme-panel').classList.toggle('hidden');
}

document.addEventListener('click', function(e) {
  const panel = document.getElementById('theme-panel');
  if (!panel.classList.contains('hidden') &&
      !panel.contains(e.target) &&
      !e.target.closest('.theme-toggle-btn')) {
    panel.classList.add('hidden');
  }
});

// ============================================================
// DİL
// ============================================================
let lang = localStorage.getItem('lang') || 'az';
let currentCourse = null;
let currentSubject = null;

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  applyTranslations();
  const view = getCurrentView();
  if (view === 'subjects') renderSubjects(currentCourse);
  else if (view === 'home') renderCourses();
  const si = document.getElementById('searchInput');
  const hi = document.getElementById('heroSearchInput');
  if (si) si.placeholder = translations[lang].searchPlaceholder;
  if (hi) hi.placeholder = translations[lang].heroSearchPlaceholder;
}

function getCurrentView() {
  if (!document.getElementById('view-home').classList.contains('hidden')) return 'home';
  if (!document.getElementById('view-subjects').classList.contains('hidden')) return 'subjects';
  return 'pdfs';
}

function applyTranslations() {
  const t = translations[lang];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set('hero-badge', t.badge);
  set('hero-title', t.heroTitle);
  setText('hero-desc', t.heroDesc);
  setText('label-courses', t.coursesLabel);
  setText('label-popular', t.popularLabel);
  setText('label-subjects', t.subjectsLabel);
  setText('label-extras', t.extrasLabel);
  setText('label-favorites', t.favoritesLabel);
  setText('label-pdfs', t.pdfsLabel);
  setText('back1-text', t.back1);
  setText('back2-text', t.back2);
  setText('bc-home', t.bcHome);
  setText('bc-home2', t.bcHome);
  setText('stat-courses-label', t.statCourses);
  setText('stat-subjects-label', t.statSubjects);
  setText('stat-pdfs-label', t.statPdfs);
  setText('footer-text', t.footer);

  // Navbar links
  setText('navlink-courses', t.navCourses);
  setText('navlink-popular', t.navPopular);
  setText('navlink-about', t.navAbout);
  setText('m-navlink-courses', t.navCourses);
  setText('m-navlink-popular', t.navPopular);
  setText('m-navlink-about', t.navAbout);

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btns = document.querySelectorAll('.lang-btn');
  if (lang === 'az' && btns[0]) btns[0].classList.add('active');
  if (lang === 'en' && btns[1]) btns[1].classList.add('active');
}

// ============================================================
// STATİSTİKA
// ============================================================
function computeStats() {
  let totalSubjects = 0, totalPdfs = 0;
  Object.values(data).forEach(course => {
    const subs = Object.values(course.subjects);
    totalSubjects += subs.length;
    subs.forEach(subj => totalPdfs += subj.pdfs.length);
  });
  document.getElementById('stat-courses').textContent  = Object.keys(data).length;
  document.getElementById('stat-subjects').textContent = totalSubjects;
  document.getElementById('stat-pdfs').textContent     = totalPdfs;
}

// ============================================================
// MOBİL MENU
// ============================================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const burger = document.getElementById('hamburger');
  menu.classList.toggle('hidden');
  burger.classList.toggle('open');
}

// ============================================================
// SCROLL TO SECTION
// ============================================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (getCurrentView() !== 'home') {
    goTo('home');
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ============================================================
// NAVİGASİYA
// ============================================================
function goTo(view) {
  ['home', 'subjects', 'pdfs'].forEach(v => {
    document.getElementById('view-' + v).classList.add('hidden');
  });
  document.getElementById('view-' + view).classList.remove('hidden');
  clearSearch();
  if (view === 'home') { renderCourses(); renderPopular(); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// HERO AXTARIŞ
// ============================================================
function initHeroSearch() {
  const input   = document.getElementById('heroSearchInput');
  const clear   = document.getElementById('heroSearchClear');
  const results = document.getElementById('heroSearchResults');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    clear.classList.toggle('hidden', q.length === 0);
    if (!q) { results.classList.add('hidden'); results.innerHTML = ''; return; }
    showHeroResults(q);
  });

  // Kənar klik ilə bağla
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.hero-search-wrap')) {
      results.classList.add('hidden');
    }
  });
}

function clearHeroSearch() {
  const input   = document.getElementById('heroSearchInput');
  const clear   = document.getElementById('heroSearchClear');
  const results = document.getElementById('heroSearchResults');
  if (input)   input.value = '';
  if (clear)   clear.classList.add('hidden');
  if (results) { results.classList.add('hidden'); results.innerHTML = ''; }
}

function showHeroResults(q) {
  const results = document.getElementById('heroSearchResults');
  const t = translations[lang];
  const matches = [];

  Object.entries(data).forEach(([courseName, courseData]) => {
    Object.entries(courseData.subjects).forEach(([subjectName, subj]) => {
      subj.pdfs.forEach(pdf => {
        if (pdf.name.toLowerCase().includes(q) || subjectName.toLowerCase().includes(q)) {
          matches.push({ pdfName: pdf.name, subjectName, courseName, file: pdf.file });
        }
      });
    });
  });

  results.innerHTML = '';
  results.classList.remove('hidden');

  if (!matches.length) {
    results.innerHTML = `<div class="hero-no-result">Nəticə tapılmadı</div>`;
    return;
  }

  matches.slice(0, 7).forEach(m => {
    const div = document.createElement('div');
    div.className = 'hero-result-item';
    div.innerHTML = `
      <div class="hero-result-icon">PDF</div>
      <div class="hero-result-info">
        <div class="hero-result-name">${m.pdfName}</div>
        <div class="hero-result-meta">${m.courseName} · ${m.subjectName}</div>
      </div>
      <span class="hero-result-open">↗ ${t.openPdf}</span>
    `;
    div.onclick = () => {
      clearHeroSearch();
      currentCourse = m.courseName;
      openPDFs(m.subjectName);
    };
    results.appendChild(div);
  });
}

// ============================================================
// POPULAR SECTION — ən çox açılan PDF-lər
// ============================================================
function getOpenCounts() {
  return JSON.parse(localStorage.getItem('openCounts') || '{}');
}

function incrementOpenCount(file) {
  const counts = getOpenCounts();
  counts[file] = (counts[file] || 0) + 1;
  localStorage.setItem('openCounts', JSON.stringify(counts));
}

function renderPopular() {
  const list = document.getElementById('popular-list');
  if (!list) return;
  const t = translations[lang];

  // Bütün PDF-ləri yığ
  const allPdfs = [];
  Object.entries(data).forEach(([courseName, courseData]) => {
    Object.entries(courseData.subjects).forEach(([subjectName, subj]) => {
      subj.pdfs.forEach(pdf => {
        allPdfs.push({ name: pdf.name, file: pdf.file, subject: subjectName, course: courseName, type: subj.type });
      });
    });
  });

  const counts = getOpenCounts();

  // Açılma sayına görə sırala; 0-sa əvvəlcədən seçilmiş 3-ü göstər
  const sorted = [...allPdfs].sort((a, b) => (counts[b.file] || 0) - (counts[a.file] || 0));
  const top = sorted.slice(0, 3);

  list.innerHTML = '';
  top.forEach(item => {
    const div = document.createElement('div');
    div.className = 'popular-item animate-in';
    div.innerHTML = `
      <div class="popular-file-icon"><span>PDF</span></div>
      <div class="popular-info">
        <div class="popular-name">${item.name}</div>
        <div class="popular-meta">${item.course} · ${item.subject}</div>
      </div>
      <div class="popular-right">
        <a class="popular-open-btn"
           href="/unecimtahanmateriallari/pdf/${item.file}"
           target="_blank"
           onclick="incrementOpenCount('${item.file}')">
          ↗ ${t.openPdf}
        </a>
      </div>
    `;
    list.appendChild(div);
  });
}

// ============================================================
// SUBJECTS VİEW AXTARIŞ
// ============================================================
function initSearch() {
  const si = document.getElementById('searchInput');
  const sc = document.getElementById('searchClear');
  if (!si) return;
  si.placeholder = translations[lang].searchPlaceholder;
  si.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    sc.classList.toggle('visible', q.length > 0);
    filterSubjects(q);
  });
}

function clearSearch() {
  const si  = document.getElementById('searchInput');
  const sc  = document.getElementById('searchClear');
  const sri = document.getElementById('searchResultsInfo');
  if (si) { si.value = ''; if (sc) sc.classList.remove('visible'); if (sri) sri.textContent = ''; filterSubjects(''); }
}

function filterSubjects(query) {
  const grid = document.getElementById('subjects-grid');
  if (!grid) return;
  const cards   = grid.querySelectorAll('.subject-card');
  const headers = grid.querySelectorAll('.semester-header');
  const sri     = document.getElementById('searchResultsInfo');
  let visible   = 0;
  cards.forEach(card => {
    const name = card.querySelector('h4').textContent.toLowerCase();
    const show = !query || name.includes(query);
    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });
  headers.forEach(h => { h.style.display = query ? 'none' : ''; });
  if (sri) sri.textContent = query ? `${visible} nəticə tapıldı` : '';
}

// ============================================================
// RENDER COURSES — yeni kart dizaynı
// ============================================================
function renderCourses() {
  const t = translations[lang];
  const grid = document.getElementById('courses-grid');
  grid.innerHTML = '';
  Object.entries(data).forEach(([courseName, courseData], i) => {
    const subs = Object.values(courseData.subjects);
    const subCount = subs.length;
    const pdfCount = subs.reduce((a, s) => a + s.pdfs.length, 0);
    const types = [...new Set(subs.map(s => s.type))];

    const div = document.createElement('div');
    div.className = 'course-card animate-in';
    div.innerHTML = `
      <div class="course-card-top">
        <span class="course-icon">${courseData.icon}</span>
        <span class="course-kurs-badge">${courseName}</span>
      </div>
      <h3>${courseName.replace('-ci kurs', '. kurs').replace('-cü kurs', '. kurs')}</h3>
      <div class="sub-count">${subCount} ${t.subjects} · ${pdfCount} ${t.pdfs}</div>
      <div class="course-card-footer">
        <div class="course-type-tags">
          ${types.includes('test')   ? '<span class="type-tag test">🖥️ Test</span>' : ''}
          ${types.includes('yazili') ? '<span class="type-tag yazili">✍️ Yazılı</span>' : ''}
        </div>
        <span class="course-arrow">→</span>
      </div>
    `;
    div.onclick = () => openSubjects(courseName);
    grid.appendChild(div);
  });
}

function openSubjects(courseName) {
  currentCourse = courseName;
  document.getElementById('bc-course').textContent  = courseName;
  document.getElementById('bc-course2').textContent = courseName;
  switchTab('subjects');
  goTo('subjects');
  renderSubjects(courseName);
}

function switchTab(tab) {
  ['subjects', 'extras', 'favorites'].forEach(t => {
    document.getElementById(`tab-${t}-btn`).classList.toggle('active', t === tab);
    document.getElementById(`tab-${t}-content`).classList.toggle('hidden', t !== tab);
  });
  clearSearch();
  if (tab === 'favorites') renderFavorites();
  if (tab === 'extras')    renderExtras();
}

function renderExtras() {
  const t = translations[lang];
  const list = document.getElementById('extras-list');
  list.innerHTML = '';
  const items = extrasData[currentCourse] || [];
  if (!items.length) { list.innerHTML = `<div class="empty-favs">${t.noExtras}</div>`; return; }
  items.forEach(pdf => {
    const isFav = getFavorites().includes('pdf-extra/' + pdf.file);
    const div = document.createElement('div');
    div.className = 'pdf-item animate-in';
    div.innerHTML = `
      <div class="pdf-file-icon" style="background:linear-gradient(135deg,#f59e0b,#d97706);">
        <span>PDF</span>
      </div>
      <div class="pdf-info">
        <div class="pdf-name">${pdf.name}</div>
        <div class="pdf-meta">${pdf.desc || pdf.file}</div>
      </div>
      <div class="pdf-actions">
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('pdf-extra/${pdf.file}', this)" title="Sevimlilərə əlavə et">
          ${isFav ? '★' : '☆'}
        </button>
        <a class="pdf-open-btn" href="${EXTRAS_BASE}${pdf.file}" target="_blank" onclick="incrementOpenCount('${pdf.file}')">
          ↗ ${t.openPdf}
        </a>
      </div>
    `;
    list.appendChild(div);
  });
}

function renderFavorites() {
  const t = translations[lang];
  const favs = getFavorites();
  const list = document.getElementById('favorites-list');
  list.innerHTML = '';
  const allPdfs = [];
  if (currentCourse) {
    Object.entries(data[currentCourse].subjects).forEach(([subjectName, subj]) => {
      subj.pdfs.forEach(pdf => {
        const path = 'pdf/' + pdf.file;
        if (favs.includes(path)) allPdfs.push({ name: pdf.name, meta: subjectName, path, color: '' });
      });
    });
    (extrasData[currentCourse] || []).forEach(pdf => {
      const path = 'pdf-extra/' + pdf.file;
      if (favs.includes(path)) allPdfs.push({ name: pdf.name, meta: pdf.desc || '📦 Əlavə material', path, color: 'background:linear-gradient(135deg,#f59e0b,#d97706)' });
    });
  }
  if (!allPdfs.length) { list.innerHTML = `<div class="empty-favs">${t.noFavorites}</div>`; return; }
  allPdfs.forEach(item => {
    const div = document.createElement('div');
    div.className = 'pdf-item animate-in';
    div.innerHTML = `
      <div class="pdf-file-icon" ${item.color ? `style="${item.color}"` : ''}><span>PDF</span></div>
      <div class="pdf-info">
        <div class="pdf-name">${item.name}</div>
        <div class="pdf-meta">${item.meta}</div>
      </div>
      <div class="pdf-actions">
        <button class="fav-btn active" onclick="removeFavAndRefresh('${item.path}')" title="Sil">★</button>
        <a class="pdf-open-btn" href="${BASE}${item.path}" target="_blank">↗ ${t.openPdf}</a>
      </div>
    `;
    list.appendChild(div);
  });
}

function removeFavAndRefresh(filePath) {
  let favs = getFavorites().filter(f => f !== filePath);
  localStorage.setItem("favorites", JSON.stringify(favs));
  removeFromCache(filePath);
  renderFavorites();
}

// ============================================================
// SUBJECTS — semester qrupları
// ============================================================
function renderSubjects(courseName) {
  const t = translations[lang];
  const grid = document.getElementById('subjects-grid');
  grid.innerHTML = '';
  const icons = ['📊','📐','🗓','💡','📝','📈','🔬','⚙️','🎯','📌','🏛','💰','📉','🌿','🔗','📋','🧮','🏆'];

  const allEntries = Object.entries(data[courseName].subjects);
  const sem1 = allEntries.filter(([, s]) => s.semester === 1);
  const sem2 = allEntries.filter(([, s]) => s.semester === 2);
  let idx = 0;

  function renderGroup(entries, label) {
    if (!entries.length) return;
    const h = document.createElement('div');
    h.className = 'semester-header';
    h.textContent = label;
    grid.appendChild(h);
    entries.forEach(([subjectName, subj]) => {
      const div = document.createElement('div');
      div.className = 'subject-card animate-in';
      div.innerHTML = `
        <div class="subject-icon">${icons[idx % icons.length]}</div>
        <div class="subject-info">
          <h4>${subjectName}</h4>
          <div class="pdf-count">
            ${getTypeBadgeHTML(subj.type)}
            <span class="pdf-badge">PDF ${subj.pdfs.length}</span>
          </div>
        </div>
      `;
      div.onclick = () => openPDFs(subjectName);
      grid.appendChild(div);
      idx++;
    });
  }

  renderGroup(sem1, t.semesterFall);
  renderGroup(sem2, t.semesterSpring);
}

// ============================================================
// TƏŞƏKKÜRLƏr MODALI
// ============================================================
function openThanks() {
  renderThanks();
  document.getElementById('thanksOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeThanks() {
  document.getElementById('thanksOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function closeThanksIfOutside(e) {
  if (e.target === document.getElementById('thanksOverlay')) closeThanks();
}

// ============================================================
// EASTER EGG
// ============================================================
let easterClickCount = 0;
let easterTimer = null;

function easterEggClick() {
  easterClickCount++;
  clearTimeout(easterTimer);
  easterTimer = setTimeout(() => { easterClickCount = 0; }, 2000);
  if (easterClickCount >= 3) {
    easterClickCount = 0;
    clearTimeout(easterTimer);
    openEaster();
  }
}

function openEaster() {
  document.getElementById('easterOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeEaster() {
  document.getElementById('easterOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function closeEasterIfOutside(e) {
  if (e.target === document.getElementById('easterOverlay')) closeEaster();
}

// ============================================================
// INFO PANEL
// ============================================================
function toggleInfoPanel() {
  const p = document.getElementById('subject-info-panel');
  if (p) p.classList.toggle('hidden');
}

function closeInfoPanel() {
  const p = document.getElementById('subject-info-panel');
  if (p) p.classList.add('hidden');
}

document.addEventListener('click', function(e) {
  const p = document.getElementById('subject-info-panel');
  if (p && !p.classList.contains('hidden') && !p.contains(e.target) && !e.target.closest('.info-btn')) {
    p.classList.add('hidden');
  }
});

// ============================================================
// PDF SƏHİFƏSİ
// ============================================================
function openPDFs(subjectName) {
  currentSubject = subjectName;
  const t = translations[lang];
  const subj  = data[currentCourse].subjects[subjectName];
  const pdfs  = subj.pdfs;
  const type  = subj.type;
  const notes = EXAM_NOTES[type] || [];

  document.getElementById('bc-subject').textContent = subjectName;

  const titleEl = document.getElementById('pdf-subject-title');
  titleEl.innerHTML = `
    <span>${subjectName}</span>
    ${getTypeBadgeHTML(type)}
    <button class="info-btn" onclick="toggleInfoPanel()" title="Bu fənn haqqında">?</button>
  `;

  const existing = document.getElementById('subject-info-panel');
  if (existing) existing.remove();

  const panel = document.createElement('div');
  panel.id = 'subject-info-panel';
  panel.className = 'info-panel hidden';
  panel.innerHTML = `
    <div class="info-panel-inner info-panel-${type}">
      <div class="info-panel-header">
        <span class="info-panel-title">${type === 'test' ? '🖥️ Elektron-test haqqında' : '✍️ Elektron-yazılı haqqında'}</span>
        <button class="info-panel-close" onclick="closeInfoPanel()">✕</button>
      </div>
      <ul class="info-panel-list">
        ${notes.map(n => `<li>${n}</li>`).join('')}
      </ul>
    </div>
  `;
  document.querySelector('.pdf-section-header').appendChild(panel);

  const list = document.getElementById('pdf-items');
  list.innerHTML = '';

  pdfs.forEach(pdf => {
    const isFav = getFavorites().includes('pdf/' + pdf.file);
    const div = document.createElement('div');
    div.className = 'pdf-item animate-in';
    div.innerHTML = `
      <div class="pdf-file-icon"><span>PDF</span></div>
      <div class="pdf-info">
        <div class="pdf-name">${pdf.name}</div>
        <div class="pdf-meta">${pdf.file}</div>
      </div>
      <div class="pdf-actions">
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('pdf/${pdf.file}', this)" title="Seçilmişlərə əlavə et">
          ${isFav ? '★' : '☆'}
        </button>
        <a class="pdf-open-btn" href="/unecimtahanmateriallari/pdf/${pdf.file}" target="_blank"
           onclick="incrementOpenCount('${pdf.file}')">
          ↗ ${t.openPdf}
        </a>
      </div>
    `;
    list.appendChild(div);
  });

  const reportBtn = document.createElement('button');
  reportBtn.className = 'report-error-btn';
  reportBtn.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="7"/>
      <line x1="8" y1="5" x2="8" y2="8.5"/>
      <circle cx="8" cy="11.5" r="0.6" fill="currentColor" stroke="none"/>
    </svg>
    Xəta Göndər
  `;
  reportBtn.onclick = () => openReportModal(subjectName, currentCourse);
  list.appendChild(reportBtn);

  goTo('pdfs');
}

// ============================================================
// SEVİMLİLƏR + CACHE
// ============================================================
const BASE = "/unecimtahanmateriallari/";

function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

async function toggleFavorite(filePath, btn) {
  let favs = getFavorites();
  if (favs.includes(filePath)) {
    favs = favs.filter(f => f !== filePath);
    removeFromCache(filePath);
    if (btn) { btn.textContent = '☆'; btn.classList.remove('active'); }
  } else {
    favs.push(filePath);
    cacheOnePDF(filePath);
    if (btn) { btn.textContent = '★'; btn.classList.add('active'); }
  }
  localStorage.setItem("favorites", JSON.stringify(favs));
}

async function cacheOnePDF(filePath) {
  if (!("caches" in window)) return;
  try { const c = await caches.open("pdf-cache"); await c.add(BASE + filePath); } catch(e) {}
}

async function removeFromCache(filePath) {
  if (!("caches" in window)) return;
  try { const c = await caches.open("pdf-cache"); await c.delete(BASE + filePath); } catch(e) {}
}

// ============================================================
// XƏTA BİLDİRİŞ
// ============================================================
let reportSubjectName = '';
let reportCourseName  = '';

function openReportModal(subjectName, courseName) {
  reportSubjectName = subjectName;
  reportCourseName  = courseName;
  const overlay  = document.getElementById('reportOverlay');
  const ctx      = document.getElementById('report-context');
  const form     = document.getElementById('report-form');
  const success  = document.getElementById('report-success');
  const textarea = document.getElementById('report-message');
  const select   = document.getElementById('report-type');
  if (ctx)      ctx.textContent      = `${courseName} · ${subjectName}`;
  if (form)     form.classList.remove('hidden');
  if (success)  success.classList.add('hidden');
  if (textarea) textarea.value       = '';
  if (select)   select.selectedIndex = 0;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeReportModal() {
  document.getElementById('reportOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function closeReportIfOutside(e) {
  if (e.target === document.getElementById('reportOverlay')) closeReportModal();
}

async function sendReport() {
  const type    = document.getElementById('report-type').value;
  const message = document.getElementById('report-message').value.trim();
  const sendBtn = document.getElementById('report-send-btn');
  if (!message) { document.getElementById('report-message').focus(); return; }
  sendBtn.disabled    = true;
  sendBtn.textContent = 'Göndərilir...';
  try {
    const response = await fetch('https://formspree.io/f/xjgjrkyz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "Kurs": reportCourseName, "Fənn": reportSubjectName, "Xəta növü": type, "Məzmun": message })
    });
    if (response.ok) {
      document.getElementById('report-form').classList.add('hidden');
      document.getElementById('report-success').classList.remove('hidden');
      setTimeout(closeReportModal, 2800);
    } else { throw new Error(); }
  } catch {
    const body = encodeURIComponent(`Kurs: ${reportCourseName}\nFənn: ${reportSubjectName}\nXəta növü: ${type}\n\n${message}`);
    window.open(`mailto:ericismyhero2467@gmail.com?subject=UNEC%20X%C9%99ta&body=${body}`, '_blank');
    closeReportModal();
  } finally {
    sendBtn.disabled  = false;
    sendBtn.innerHTML = '↗ Göndər';
  }
}

// ============================================================
// ESC
// ============================================================
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeThanks(); closeEaster(); closeReportModal(); }
});

// ============================================================
// BAŞLAT
// ============================================================
(function loadSavedTheme() {
  const saved = localStorage.getItem('theme');
  if (saved && themes[saved]) {
    const btn = document.querySelector(`[data-theme="${saved}"]`);
    applyTheme(saved, btn);
  }
})();

computeStats();
applyTranslations();
renderCourses();
renderPopular();
initSearch();
initHeroSearch();
