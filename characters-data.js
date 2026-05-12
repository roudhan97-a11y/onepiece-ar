// ============================================
// قاعدة بيانات شخصيات ون بيس
// لإضافة شخصية جديدة: أضف كائن جديد في المصفوفة
// ============================================

const CHARACTERS = [
  {
    id: "roger",
    name: "غول دي روجر",
    nameEn: "Gol D. Roger",
    nameJp: "ゴール・D・ロジャー",
    nickname: "ملك القراصنة",
    emoji: "☠️",
    bgColor: "linear-gradient(135deg,#3D0000,#8B1A1A)",
    group: ["pirate-king"],
    status: "dead",
    bounty: "5,564,800,000",
    role: "ملك القراصنة",
    fruit: null,
    haki: ["ملك", "تسليح", "ملاحظة"],
    firstChapter: 1,
    page: "roger.html",
    complete: true
  },
  {
    id: "luffy",
    name: "مونكي دي لوفي",
    nameEn: "Monkey D. Luffy",
    nameJp: "モンキー・D・ルフィ",
    nickname: "قبعة القش",
    emoji: "🏴‍☠️",
    bgColor: "linear-gradient(135deg,#4A0E0E,#8B1A1A)",
    group: ["strawhat", "yonko"],
    status: "alive",
    bounty: "5,564,800,000",
    role: "كابتن قبعات القش • يونكو",
    fruit: "هيتو هيتو - نيكا",
    haki: ["ملك", "تسليح", "ملاحظة"],
    firstChapter: 1,
    page: null,
    complete: false
  },
  {
    id: "zoro",
    name: "رورونوا زورو",
    nameEn: "Roronoa Zoro",
    nameJp: "ロロノア・ゾロ",
    nickname: "الصياد",
    emoji: "⚔️",
    bgColor: "linear-gradient(135deg,#0D2B4A,#1A5276)",
    group: ["strawhat"],
    status: "alive",
    bounty: "1,111,000,000",
    role: "المقاتل الأول — قبعات القش",
    fruit: null,
    haki: ["ملك", "تسليح", "ملاحظة"],
    firstChapter: 3,
    page: null,
    complete: false
  },
  {
    id: "shanks",
    name: "شانكس",
    nameEn: "Shanks",
    nameJp: "シャンクス",
    nickname: "أحمر الشعر",
    emoji: "🍶",
    bgColor: "linear-gradient(135deg,#4A1818,#8B2222)",
    group: ["yonko"],
    status: "alive",
    bounty: "4,048,900,000",
    role: "يونكو — أحمر الشعر",
    fruit: null,
    haki: ["ملك", "تسليح", "ملاحظة"],
    firstChapter: 1,
    page: null,
    complete: false
  },
  {
    id: "whitebeard",
    name: "إدوارد نيوغيت",
    nameEn: "Edward Newgate",
    nameJp: "エドワード・ニューゲート",
    nickname: "وايتبيرد",
    emoji: "🌊",
    bgColor: "linear-gradient(135deg,#0D2B4A,#1A6B8A)",
    group: ["yonko"],
    status: "dead",
    bounty: "5,046,000,000",
    role: "يونكو سابق — أقوى رجل في العالم",
    fruit: "غورا غورا",
    haki: ["ملك", "تسليح", "ملاحظة"],
    firstChapter: 234,
    page: null,
    complete: false
  },
  {
    id: "garp",
    name: "مونكي دي غارب",
    nameEn: "Monkey D. Garp",
    nameJp: "モンキー・D・ガープ",
    nickname: "بطل البحرية",
    emoji: "⚓",
    bgColor: "linear-gradient(135deg,#1C3A5E,#2471A3)",
    group: ["marine"],
    status: "alive",
    bounty: null,
    role: "Vice Admiral — بطل البحرية",
    fruit: null,
    haki: ["ملك", "تسليح", "ملاحظة"],
    firstChapter: 92,
    page: null,
    complete: false
  },
  {
    id: "law",
    name: "ترافالغار لو",
    nameEn: "Trafalgar Law",
    nameJp: "トラファルガー・ロー",
    nickname: "الجراح",
    emoji: "💀",
    bgColor: "linear-gradient(135deg,#1A0A2E,#3D1564)",
    group: ["supernova"],
    status: "alive",
    bounty: "3,000,000,000",
    role: "كابتن طاقم القلب",
    fruit: "أوبي أوبي",
    haki: ["تسليح", "ملاحظة"],
    firstChapter: 498,
    page: null,
    complete: false
  },
  {
    id: "nami",
    name: "نامي",
    nameEn: "Nami",
    nameJp: "ナミ",
    nickname: "اللصة",
    emoji: "🗺️",
    bgColor: "linear-gradient(135deg,#2D2000,#5C4000)",
    group: ["strawhat"],
    status: "alive",
    bounty: "366,000,000",
    role: "ملاحة قبعات القش",
    fruit: null,
    haki: [],
    firstChapter: 8,
    page: null,
    complete: false
  }
];

// ============================================
// كيفية إضافة شخصية جديدة:
// انسخ الكتلة أعلاه وعدّل البيانات
// page: "اسم-الملف.html" إذا أنشأت صفحة لها
// complete: true إذا الصفحة مكتملة
// ============================================
