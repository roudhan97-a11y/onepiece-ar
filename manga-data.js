// ============================================
// قاعدة بيانات محتوى المانغا
// لإضافة محتوى جديد: أضف في القسم المناسب فقط
// ============================================

// ===== SBS =====
const SBS_DATA = [
  {
    vol: 96,
    year: 2021,
    questions: [
      {
        q: "ما هو الطعام المفضل لروجر؟",
        a: "تفاح التوباز — نفس التفاحة التي كان لوفي يأكلها وهو صغير.",
        char: "روجر"
      },
      {
        q: "ما هو عمر شانكس الحقيقي؟",
        a: "شانكس عمره 39 سنة في بداية القصة.",
        char: "شانكس"
      }
    ]
  },
  {
    vol: 90,
    year: 2018,
    questions: [
      {
        q: "هل روجر كان يمتلك فاكهة شيطان؟",
        a: "لا — روجر لا يمتلك أي فاكهة شيطان. قوته مبنية على الهاكي والموهبة الطبيعية.",
        char: "روجر"
      }
    ]
  },
  {
    vol: 100,
    year: 2021,
    questions: [
      {
        q: "من هو الشخص الذي احترمه روجر أكثر؟",
        a: "وايتبيرد — روجر رأى فيه النظير الحقيقي الوحيد.",
        char: "روجر"
      },
      {
        q: "ما هو أصل اسم D؟",
        a: "Oda: سيُكشف في القصة — لكنه يمثل إرادة لا تنكسر عبر الأجيال.",
        char: "عام"
      }
    ]
  }
];

// ===== قصص الأغلفة =====
const COVER_STORIES = [
  {
    id: "enel",
    title: "مغامرات إيني على القمر",
    titleEn: "Enel's Great Space Operations",
    emoji: "⚡",
    bgColor: "linear-gradient(135deg,#1A1A00,#5C5C00)",
    chapters: "428 – 474",
    description: "بعد هزيمته في سكاي بييا، يسافر إيني إلى القمر ويكتشف حضارة قديمة من شعب Spacey.",
    status: "مكتملة",
    tags: ["إيني", "القمر", "Automata"]
  },
  {
    id: "coby",
    title: "قصة كوبي وهيلميبو",
    titleEn: "Coby-Meppo's Chronicle",
    emoji: "⚓",
    bgColor: "linear-gradient(135deg,#0D1A2E,#1A3A5C)",
    chapters: "57 – 96",
    description: "رحلة كوبي وهيلميبو في تدريب البحرية تحت إشراف Vice Admiral Garp.",
    status: "مكتملة",
    tags: ["كوبي", "هيلميبو", "غارب", "البحرية"]
  },
  {
    id: "straw-hat-separation",
    title: "مغامرات قبعات القش المنفصلة",
    titleEn: "Straw Hats' Separation Serial",
    emoji: "🏴‍☠️",
    bgColor: "linear-gradient(135deg,#2D0A0A,#6B1A1A)",
    chapters: "543 – 560",
    description: "ماذا حدث لكل فرد من قبعات القش بعد انفصالهم في أرشيبيلاغو ساباودي.",
    status: "مكتملة",
    tags: ["قبعات القش", "الانفصال", "Kuma"]
  },
  {
    id: "gedatsu",
    title: "مغامرة غيداتسو تحت الأرض",
    titleEn: "Gedatsu's Accidental Blue-Sea Life",
    emoji: "🌊",
    bgColor: "linear-gradient(135deg,#0A1A0D,#1A4A22)",
    chapters: "335 – 376",
    description: "مغامرات كوميدية لغيداتسو بعد سقوطه من سكاي بييا إلى البحر.",
    status: "مكتملة",
    tags: ["غيداتسو", "كوميدي"]
  }
];

// ===== فصول المانغا =====
const CHAPTERS_DATA = [
  // آرك إيغهيد
  { number: 1130, title: "...", arc: "egghead", date: "2025-05-01", summary: "أحداث جارية في آرك إيغهيد" },
  { number: 1129, title: "...", arc: "egghead", date: "2025-04-20", summary: "أحداث جارية في آرك إيغهيد" },
  { number: 1128, title: "...", arc: "egghead", date: "2025-04-13", summary: "أحداث جارية في آرك إيغهيد" },
  // آرك وانو
  { number: 1057, title: "النهاية", arc: "wano", date: "2022-09-11", summary: "نهاية آرك وانو الكبير" },
  { number: 1056, title: "قرارات", arc: "wano", date: "2022-08-28", summary: "قرارات أعضاء الطاقم بعد وانو" },
  { number: 1055, title: "شانكس", arc: "wano", date: "2022-08-21", summary: "ظهور مفاجئ لشانكس" },
  // آرك مارينفورد
  { number: 580, title: "نهاية الحرب", arc: "marineford", date: "2009-10-19", summary: "نهاية حرب القمة" },
  { number: 579, title: "قوة الشانكس", arc: "marineford", date: "2009-10-12", summary: "تدخل شانكس لإيقاف الحرب" },
  { number: 574, title: "موت إيس", arc: "marineford", date: "2009-09-07", summary: "الحدث الأكثر تأثيراً في القصة" }
];

// ===== الأركات (للتصفية) =====
const ARCS = [
  { id: "egghead", name: "إيغهيد", color: "#D4A843" },
  { id: "wano", name: "وانو", color: "#E74C3C" },
  { id: "marineford", name: "مارينفورد", color: "#1ABC9C" },
  { id: "dressrosa", name: "دريسروزا", color: "#E67E22" },
  { id: "wholecake", name: "Whole Cake Island", color: "#9B59B6" },
  { id: "skypiea", name: "سكاي بييا", color: "#F1C40F" },
  { id: "alabasta", name: "ألاباستا", color: "#3498DB" }
];
