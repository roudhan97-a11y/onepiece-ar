// ============================================
// قاعدة بيانات المقالات والأخبار
// لإضافة مقال جديد: أضف كائن في ARTICLES
// لإضافة خبر جديد: أضف كائن في NEWS
// ============================================

// ===== المقالات =====
const ARTICLES = [
  {
    id: "one-piece-real",
    title: "ما هو الـ One Piece الحقيقي؟ أفضل النظريات",
    category: "theory",
    categoryLabel: "نظرية",
    emoji: "💡",
    author: "فريق الموسوعة",
    date: "2025-03-01",
    readTime: "12 دقيقة",
    views: "15,420",
    featured: true,
    excerpt: "منذ بداية القصة والسؤال الأكبر: ما هو الـ One Piece؟ نستعرض أقوى النظريات وأكثرها منطقية بناءً على الأدلة المتاحة.",
    tags: ["One Piece", "نظرية", "روجر", "Laugh Tale"]
  },
  {
    id: "void-century",
    title: "سر المئة عام الفراغي — كل ما نعرفه حتى الآن",
    category: "analysis",
    categoryLabel: "تحليل",
    emoji: "🌑",
    author: "فريق الموسوعة",
    date: "2025-02-15",
    readTime: "18 دقيقة",
    views: "12,800",
    featured: true,
    excerpt: "الـ Void Century هو أكبر غموض في ون بيس — من هي مملكة Joy Boy؟ ولماذا تخفيه الحكومة العالمية؟",
    tags: ["Void Century", "Joy Boy", "Poneglyph", "تاريخ"]
  },
  {
    id: "im-sama",
    title: "هوية إيم — كل الأدلة والنظريات",
    category: "theory",
    categoryLabel: "نظرية",
    emoji: "👑",
    author: "فريق الموسوعة",
    date: "2025-01-20",
    readTime: "10 دقيقة",
    views: "18,200",
    featured: false,
    excerpt: "إيم — الكيان الغامض الذي يجلس على العرش الفارغ. من هو؟ وما صلته بتاريخ عالم ون بيس القديم؟",
    tags: ["إيم", "الحكومة العالمية", "نظرية"]
  },
  {
    id: "yonko-comparison",
    title: "مقارنة اليونكو الخمسة: من الأقوى؟",
    category: "tierlist",
    categoryLabel: "تصنيف",
    emoji: "⚔️",
    author: "فريق الموسوعة",
    date: "2025-01-05",
    readTime: "8 دقيقة",
    views: "22,500",
    featured: false,
    excerpt: "لوفي، شانكس، بلاك بيرد، بيغ مام، كايدو — تحليل شامل لقوة كل يونكو ومقارنة عادلة بينهم.",
    tags: ["يونكو", "تصنيف", "قوة", "مقارنة"]
  },
  {
    id: "gear-fifth",
    title: "Gear Fifth — تحليل كامل لقوة نيكا",
    category: "character-deep",
    categoryLabel: "شخصية عمق",
    emoji: "🌟",
    author: "فريق الموسوعة",
    date: "2024-12-10",
    readTime: "15 دقيقة",
    views: "30,100",
    featured: true,
    excerpt: "Gear Fifth أحدث ثورة في فهم فاكهة لوفي — نحلل قوة نيكا وحدودها وما يعنيه وجودها في القصة.",
    tags: ["لوفي", "Gear Fifth", "نيكا", "تحليل"]
  },
  {
    id: "wano-review",
    title: "مراجعة آرك وانو — الأكبر في تاريخ ون بيس",
    category: "review",
    categoryLabel: "مراجعة",
    emoji: "⛩️",
    author: "فريق الموسوعة",
    date: "2024-11-20",
    readTime: "20 دقيقة",
    views: "25,300",
    featured: false,
    excerpt: "وانو انتهى — كيف كان؟ نقيّم الأحداث والمعارك والشخصيات في أطول وأضخم آرك قدّمه Oda.",
    tags: ["وانو", "مراجعة", "كايدو", "لوفي"]
  },
  {
    id: "world-government",
    title: "نظام الحكومة العالمية — كيف يعمل؟",
    category: "worldbuilding",
    categoryLabel: "بناء العالم",
    emoji: "🌍",
    author: "فريق الموسوعة",
    date: "2024-10-15",
    readTime: "14 دقيقة",
    views: "9,800",
    featured: false,
    excerpt: "شرح شامل لهيكل الحكومة العالمية — من إيم في القمة إلى البحرية والشيتشيبوكاي والـ CP.",
    tags: ["الحكومة العالمية", "البحرية", "CP9", "بناء العالم"]
  },
  {
    id: "zoro-character",
    title: "تطور شخصية زورو — من الصياد إلى الأسطورة",
    category: "character-deep",
    categoryLabel: "شخصية عمق",
    emoji: "⚔️",
    author: "فريق الموسوعة",
    date: "2024-09-01",
    readTime: "16 دقيقة",
    views: "14,600",
    featured: false,
    excerpt: "رورونوا زورو — رحلة من قرصان مبتدئ يريد هزيمة ميهوك إلى أقوى سيوفيين في العالم.",
    tags: ["زورو", "شخصية", "تطور", "ميهوك"]
  }
];

// ===== الأخبار =====
const NEWS = [
  {
    id: "chapter-1182",
    title: "الفصل 1182 — ملخص وتحليل أحداث آرك الباف",
    category: "manga",
    categoryLabel: "مانغا",
    emoji: "📖",
    date: "2025-05-01",
    breaking: true,
    excerpt: "الفصل الأخير من آرك الباف الجاري — ملخص كامل للأحداث وأبرز اللحظات.",
    tags: ["الباف", "فصل 1182", "مانغا"]
  },
  {
    id: "elbaph-arc",
    title: "آرك الباف — ما الذي نعرفه حتى الآن؟",
    category: "manga",
    categoryLabel: "مانغا",
    emoji: "🏔️",
    date: "2025-04-15",
    breaking: false,
    excerpt: "آرك الباف بدأ بقوة — نستعرض أبرز الأحداث والتساؤلات منذ الفصل 1123.",
    tags: ["الباف", "آرك جديد", "عمالقة"]
  },
  {
    id: "live-action-s2",
    title: "الإعلان الرسمي عن موسم 2 من الدراما التلفزيونية",
    category: "live-action",
    categoryLabel: "لايف أكشن",
    emoji: "🎬",
    date: "2025-03-20",
    breaking: true,
    excerpt: "Netflix أعلنت رسمياً عن موسم 2 من مسلسل ون بيس الحقيقي — التفاصيل والممثلون الجدد.",
    tags: ["لايف أكشن", "Netflix", "موسم 2"]
  },
  {
    id: "anime-1120",
    title: "حلقة الأنمي 1120 تتصدر مؤشرات المشاهدة عالمياً",
    category: "anime",
    categoryLabel: "أنمي",
    emoji: "📺",
    date: "2025-03-10",
    breaking: false,
    excerpt: "حلقة 1120 من أنمي ون بيس حققت أرقاماً قياسية في المشاهدة — ماذا حدث فيها؟",
    tags: ["أنمي", "حلقة 1120", "إيغهيد"]
  },
  {
    id: "oda-statement-2025",
    title: "Oda يؤكد: الآرك الحالي هو الأكبر في تاريخ السلسلة",
    category: "general",
    categoryLabel: "عام",
    emoji: "✏️",
    date: "2025-02-28",
    breaking: false,
    excerpt: "في تصريح جديد، أكد Oda أن آرك الباف يحمل أهمية استثنائية لنهاية القصة.",
    tags: ["Oda", "تصريح", "الباف"]
  },
  {
    id: "vivre-card-new",
    title: "إصدار Vivre Card جديد يكشف معلومات حصرية عن شخصيات إيغهيد",
    category: "general",
    categoryLabel: "عام",
    emoji: "🃏",
    date: "2025-02-10",
    breaking: false,
    excerpt: "الإصدار الجديد من Vivre Card يحتوي على أرقام رسمية للشخصيات الرئيسية في إيغهيد.",
    tags: ["Vivre Card", "إيغهيد", "معلومات رسمية"]
  }
];

// أنواع المقالات
const ARTICLE_CATEGORIES = [
  { id: "theory", label: "نظرية", color: "#9B59B6", emoji: "💡" },
  { id: "analysis", label: "تحليل", color: "#3498DB", emoji: "📊" },
  { id: "tierlist", label: "تصنيف", color: "#E74C3C", emoji: "⚔️" },
  { id: "review", label: "مراجعة", color: "#1ABC9C", emoji: "📖" },
  { id: "character-deep", label: "شخصية عمق", color: "#E67E22", emoji: "🎭" },
  { id: "worldbuilding", label: "بناء العالم", color: "#2ECC71", emoji: "🌍" }
];

// أنواع الأخبار
const NEWS_CATEGORIES = [
  { id: "manga", label: "مانغا", color: "#D4A843" },
  { id: "anime", label: "أنمي", color: "#3498DB" },
  { id: "live-action", label: "لايف أكشن", color: "#E74C3C" },
  { id: "general", label: "عام", color: "#1ABC9C" }
];
