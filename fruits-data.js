// ============================================
// قاعدة بيانات فواكه الشيطان
// لإضافة فاكهة جديدة: أضف كائن جديد في المصفوفة
// ============================================

const DEVIL_FRUITS = [

  // ===== لوجيا =====
  {
    id: "hito-hito-nika",
    name: "هيتو هيتو — نيكا",
    nameEn: "Hito Hito no Mi, Model: Nika",
    nameJp: "ヒトヒトの実 幻獣種モデル「ニカ」",
    type: "mythical",
    typeLabel: "زون خرافية",
    emoji: "🌟",
    ability: "تمنح صاحبها جسماً مطاطياً وقوة إله الشمس نيكا — أكثر فاكهة مرغوب بها في التاريخ.",
    currentOwner: "مونكي دي لوفي",
    prevOwner: "جوي بوي (قديماً)",
    arc: "طوال القصة",
    awakened: true,
    rare: true,
    notes: "كانت الحكومة العالمية تخفيها تحت اسم غوم غوم لقرون."
  },
  {
    id: "goro-goro",
    name: "غورو غورو",
    nameEn: "Goro Goro no Mi",
    nameJp: "ゴロゴロの実",
    type: "logia",
    typeLabel: "لوجيا",
    emoji: "⚡",
    ability: "التحول إلى الكهرباء وإنتاجها — قوة تصل إلى 100 مليون فولت.",
    currentOwner: "إيني مانيما",
    prevOwner: null,
    arc: "سكاي بييا",
    awakened: false,
    rare: true,
    notes: "تُعد من أقوى فواكه اللوجيا وكانت تُعدّ لا تُقهر."
  },
  {
    id: "mera-mera",
    name: "ميرا ميرا",
    nameEn: "Mera Mera no Mi",
    nameJp: "メラメラの実",
    type: "logia",
    typeLabel: "لوجيا",
    emoji: "🔥",
    ability: "التحول إلى النار والتحكم بها — فاكهة بورتغاس دي إيس الشهيرة.",
    currentOwner: "سابو",
    prevOwner: "بورتغاس دي إيس",
    arc: "دريسروزا",
    awakened: false,
    rare: false,
    notes: "ورثها سابو بعد موت إيس في مارينفورد."
  },
  {
    id: "hie-hie",
    name: "هيي هيي",
    nameEn: "Hie Hie no Mi",
    nameJp: "ヒエヒエの実",
    type: "logia",
    typeLabel: "لوجيا",
    emoji: "❄️",
    ability: "التحول إلى الجليد والتحكم به — يمكن تجميد البحر بالكامل.",
    currentOwner: "أدميرال أوكيجي (كوزان)",
    prevOwner: null,
    arc: "مارينفورد",
    awakened: false,
    rare: false,
    notes: "أحد أقوى فواكه الأدميرالات."
  },
  {
    id: "magu-magu",
    name: "ماغو ماغو",
    nameEn: "Magu Magu no Mi",
    nameJp: "マグマグの実",
    type: "logia",
    typeLabel: "لوجيا",
    emoji: "🌋",
    ability: "التحول إلى الحمم البركانية — أقوى من النار وتتغلب عليها.",
    currentOwner: "أدميرال أكاينو (سكازوكي)",
    prevOwner: null,
    arc: "مارينفورد",
    awakened: false,
    rare: false,
    notes: "هزم بها إيس في مارينفورد."
  },
  {
    id: "pika-pika",
    name: "بيكا بيكا",
    nameEn: "Pika Pika no Mi",
    nameJp: "ピカピカの実",
    type: "logia",
    typeLabel: "لوجيا",
    emoji: "✨",
    ability: "التحول إلى الضوء والتحرك بسرعته — لا يمكن تفادي هجماته عادةً.",
    currentOwner: "أدميرال كيزارو (بورساليبو)",
    prevOwner: null,
    arc: "ساباودي",
    awakened: false,
    rare: false,
    notes: "أسرع فاكهة لوجيا معروفة."
  },
  {
    id: "suna-suna",
    name: "سونا سونا",
    nameEn: "Suna Suna no Mi",
    nameJp: "スナスナの実",
    type: "logia",
    typeLabel: "لوجيا",
    emoji: "🏜️",
    ability: "التحول إلى الرمال والتحكم بها — تجفيف أي شيء تلمسه.",
    currentOwner: "كروكودايل (سابق)",
    prevOwner: null,
    arc: "ألاباستا",
    awakened: false,
    rare: false,
    notes: "أول فاكهة لوجيا يواجهها لوفي وأول خسارتين له."
  },

  // ===== باراميسيا =====
  {
    id: "ope-ope",
    name: "أوبي أوبي",
    nameEn: "Ope Ope no Mi",
    nameJp: "オペオペの実",
    type: "paramecia",
    typeLabel: "باراميسيا",
    emoji: "🕳️",
    ability: "إنشاء غرفة عمليات كروية تتحكم بكل ما بداخلها — قادرة على منح الخلود.",
    currentOwner: "ترافالغار لو",
    prevOwner: "دكتور روزينانت",
    arc: "دريسروزا",
    awakened: false,
    rare: true,
    notes: "تُعدّ أثمن فاكهة في العالم — قيمتها تفوق مليار بيلي."
  },
  {
    id: "gura-gura",
    name: "غورا غورا",
    nameEn: "Gura Gura no Mi",
    nameJp: "グラグラの実",
    type: "paramecia",
    typeLabel: "باراميسيا",
    emoji: "🌊",
    ability: "إحداث اهتزازات وزلازل — قادرة على تدمير العالم بحسب وايتبيرد.",
    currentOwner: "بلاك بيرد (مارشال دي تيتش)",
    prevOwner: "إدوارد نيوغيت (وايتبيرد)",
    arc: "مارينفورد",
    awakened: false,
    rare: true,
    notes: "سرقها بلاك بيرد من جسد وايتبيرد بطريقة غامضة."
  },
  {
    id: "mochi-mochi",
    name: "موتشي موتشي",
    nameEn: "Mochi Mochi no Mi",
    nameJp: "モチモチの実",
    type: "special-paramecia",
    typeLabel: "باراميسيا خاصة",
    emoji: "🍡",
    ability: "التحول إلى المتشي (عجينة اليابان) — يجمع بين باراميسيا ولوجيا.",
    currentOwner: "شارلوت كاتاكوري",
    prevOwner: null,
    arc: "Whole Cake Island",
    awakened: true,
    rare: true,
    notes: "فاكهة صنّفها Oda كـ Special Paramecia بخصائص تشبه اللوجيا."
  },
  {
    id: "bari-bari",
    name: "باري باري",
    nameEn: "Bari Bari no Mi",
    nameJp: "バリバリの実",
    type: "paramecia",
    typeLabel: "باراميسيا",
    emoji: "🛡️",
    ability: "إنشاء حواجز دفاعية لا تُكسر — لا يمكن لأي قوة اختراقها.",
    currentOwner: "بارتولوميو",
    prevOwner: null,
    arc: "دريسروزا",
    awakened: false,
    rare: false,
    notes: null
  },
  {
    id: "doku-doku",
    name: "دوكو دوكو",
    nameEn: "Doku Doku no Mi",
    nameJp: "ドクドクの実",
    type: "paramecia",
    typeLabel: "باراميسيا",
    emoji: "☠️",
    ability: "إنتاج والتحكم في السموم المميتة — مناعة تامة من كل سم.",
    currentOwner: "مجيلان",
    prevOwner: null,
    arc: "إمبيل داون",
    awakened: false,
    rare: false,
    notes: null
  },
  {
    id: "ito-ito",
    name: "إيتو إيتو",
    nameEn: "Ito Ito no Mi",
    nameJp: "イトイトの実",
    type: "paramecia",
    typeLabel: "باراميسيا",
    emoji: "🕸️",
    ability: "إنتاج خيوط لا مرئية — التحكم بالبشر كالدمى وإنشاء أسلحة خيطية.",
    currentOwner: "دونكيخوتي دوفلامينغو",
    prevOwner: null,
    arc: "دريسروزا",
    awakened: true,
    rare: false,
    notes: "عند الصحو يمكن تحويل كل شيء في محيطه إلى خيوط."
  },

  // ===== زون =====
  {
    id: "ryu-ryu-bronto",
    name: "ريو ريو — برونتوصور",
    nameEn: "Ryu Ryu no Mi, Model: Brachiosaurus",
    nameJp: "リュウリュウの実 モデル「ブラキオサウルス」",
    type: "zoan",
    typeLabel: "زون",
    emoji: "🦕",
    ability: "التحول إلى البرونتوصور — أكبر الديناصورات وأقواها جسدياً.",
    currentOwner: "كوينيمون",
    prevOwner: null,
    arc: "وانو",
    awakened: false,
    rare: false,
    notes: null
  },
  {
    id: "inu-inu-wolf",
    name: "إينو إينو — ذئب",
    nameEn: "Inu Inu no Mi, Model: Wolf",
    nameJp: "イヌイヌの実 モデル「オオカミ」",
    type: "zoan",
    typeLabel: "زون",
    emoji: "🐺",
    ability: "التحول إلى ذئب ضخم.",
    currentOwner: "جاباي",
    prevOwner: null,
    arc: "إينيس لوبي",
    awakened: false,
    rare: false,
    notes: null
  },

  // ===== زون خرافية =====
  {
    id: "tori-tori-phoenix",
    name: "توري توري — عنقاء",
    nameEn: "Tori Tori no Mi, Model: Phoenix",
    nameJp: "トリトリの実 モデル「フェニックス」",
    type: "mythical",
    typeLabel: "زون خرافية",
    emoji: "🦅",
    ability: "التحول إلى عنقاء — شعلة الإحياء التي تشفي الجراح.",
    currentOwner: "مارشال دي تيتش (مسروقة؟)",
    prevOwner: "إدوارد نيوغيت جونيور (ماركو)",
    arc: "مارينفورد",
    awakened: false,
    rare: true,
    notes: "قدرة الشفاء جعلت ماركو قادراً على الصمود أمام الأدميرالات."
  },
  {
    id: "uo-uo-seiryu",
    name: "أوو أوو — تنين",
    nameEn: "Uo Uo no Mi, Model: Seiryu",
    nameJp: "ウオウオの実 モデル「青龍」",
    type: "mythical",
    typeLabel: "زون خرافية",
    emoji: "🐉",
    ability: "التحول إلى التنين الأزرق الأسطوري — أقوى مخلوق في عالم ون بيس.",
    currentOwner: "مجهول (بعد وانو)",
    prevOwner: "كايدو",
    arc: "وانو",
    awakened: false,
    rare: true,
    notes: "كايدو وصف نفسه بأنه أقوى مخلوق حي في العالم بهذه الفاكهة."
  }
];

// أنواع الفواكه للتصفية
const FRUIT_TYPES = [
  { id: "logia", name: "لوجيا", color: "#F1C40F" },
  { id: "paramecia", name: "باراميسيا", color: "#3498DB" },
  { id: "special-paramecia", name: "باراميسيا خاصة", color: "#5DADE2" },
  { id: "zoan", name: "زون", color: "#2ECC71" },
  { id: "mythical", name: "زون خرافية", color: "#9B59B6" }
];

,{
  id: "test-test",
  name: "تجربة",
  nameEn: "test no me",
  nameJp: "يابانية",
  type: "zoan", // logia / paramecia / zoan / mythical
  typeLabel: "زون",
  emoji: "🍎",
  ability: "القدرة على الاكل",
  currentOwner: "الصاحب الحالي",
  prevOwner: null, // أو "اسم السابق"
  arc: "اسم الآرك",
  awakened: false, // true لو مُصحَّية
  rare: false,     // true لو نادرة
  notes: null      // أو "ملاحظة مهمة"
}
