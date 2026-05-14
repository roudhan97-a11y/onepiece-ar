// ============================================
// قاعدة بيانات أركات ون بيس
// لإضافة آرك جديد: أضف كائن جديد في الساغا المناسبة
// ============================================

const SAGAS = [
  {
    id: "east-blue",
    name: "ساغا إيست بلو",
    nameEn: "East Blue Saga",
    color: "#3498DB",
    arcs: [
      {
        id: "romance-dawn",
        name: "رومانس داون",
        nameEn: "Romance Dawn Arc",
        chapters: "1 – 7",
        episodes: "1 – 3",
        status: "مكتمل",
        year: "1997",
        keyEvents: [
          "لوفي يأكل فاكهة غوم غوم",
          "لقاء لوفي بشانكس",
          "لوفي يبدأ رحلته"
        ],
        newChars: [
          { name: "مونكي دي لوفي", role: "بطل القصة وكابتن قبعات القش", img: null },
          { name: "شانكس", role: "يونكو — ألهم لوفي بأن يصبح قرصاناً", img: null }
        ],
        importantChars: []
      },
      {
        id: "orange-town",
        name: "أورانج تاون",
        nameEn: "Orange Town Arc",
        chapters: "8 – 21",
        episodes: "4 – 8",
        status: "مكتمل",
        year: "1997",
        keyEvents: [
          "لوفي يلتقي نامي",
          "مواجهة باغي القرصان",
          "نامي تنضم مؤقتاً للطاقم"
        ],
        newChars: [
          { name: "نامي", role: "ملاحة قبعات القش — لصة الخرائط", img: null },
          { name: "باغي", role: "قرصان فاكهة باكي باكي — أول خصم حقيقي للوفي", img: null }
        ],
        importantChars: [
          { name: "زورو", role: "انضم سابقاً — يساعد في المعركة", img: null }
        ]
      },
      {
        id: "syrup-village",
        name: "قرية سيروب",
        nameEn: "Syrup Village Arc",
        chapters: "22 – 41",
        episodes: "9 – 18",
        status: "مكتمل",
        year: "1998",
        keyEvents: [
          "لوفي يلتقي أوسوب",
          "الكشف عن مكائد كابتن كورو",
          "الحصول على سفينة Going Merry"
        ],
        newChars: [
          { name: "أوسوب", role: "قناص قبعات القش — ابن القرصان يسوب", img: null },
          { name: "كابتن كورو", role: "خصم الآرك — مخطط للاستيلاء على القرية", img: null }
        ],
        importantChars: []
      },
      {
        id: "baratie",
        name: "مطعم الباراتيه",
        nameEn: "Baratie Arc",
        chapters: "42 – 68",
        episodes: "19 – 30",
        status: "مكتمل",
        year: "1998",
        keyEvents: [
          "لوفي يلتقي سانجي",
          "ظهور ميهوك — أقوى سيوفيين في العالم",
          "زورو يخسر أمام ميهوك ويعاهد لوفي"
        ],
        newChars: [
          { name: "سانجي", role: "طباخ قبعات القش — أحد الثلاثة الكبار", img: null },
          { name: "دراكول ميهوك", role: "أعظم سيوفيين في العالم — شيتشيبوكاي", img: null },
          { name: "دون كريك", role: "قرصان قوي من إيست بلو", img: null }
        ],
        importantChars: []
      },
      {
        id: "arlong-park",
        name: "حديقة أرلونج",
        nameEn: "Arlong Park Arc",
        chapters: "69 – 95",
        episodes: "31 – 45",
        status: "مكتمل",
        year: "1998",
        keyEvents: [
          "كشف ماضي نامي المؤلم",
          "لوفي يهزم أرلونج",
          "نامي تنضم رسمياً للطاقم"
        ],
        newChars: [
          { name: "أرلونج", role: "قرصان السمكة — استعبد قرية نامي لسنوات", img: null },
          { name: "نوجيكو", role: "أخت نامي — ضحت بكل شيء من أجلها", img: null }
        ],
        importantChars: [
          { name: "نامي", role: "تُكشف قصتها الحقيقية وتنضم رسمياً", img: null }
        ]
      }
    ]
  },
  {
    id: "alabasta",
    name: "ساغا ألاباستا",
    nameEn: "Alabasta Saga",
    color: "#F39C12",
    arcs: [
      {
        id: "whisky-peak",
        name: "قمة الويسكي",
        nameEn: "Whisky Peak Arc",
        chapters: "106 – 114",
        episodes: "64 – 67",
        status: "مكتمل",
        year: "1999",
        keyEvents: [
          "لقاء قبعات القش بـ Baroque Works",
          "زورو يواجه مئة عميل وحده",
          "ظهور Mr. 0 (كروكودايل)"
        ],
        newChars: [
          { name: "ميس. ميدزماس ويك", role: "عميلة Baroque Works", img: null }
        ],
        importantChars: [
          { name: "كروكودايل", role: "أول ظهور له كزعيم Baroque Works", img: null }
        ]
      },
      {
        id: "alabasta",
        name: "ألاباستا",
        nameEn: "Alabasta Arc",
        chapters: "155 – 217",
        episodes: "92 – 130",
        status: "مكتمل",
        year: "2000",
        keyEvents: [
          "لوفي يهزم كروكودايل للمرة الثالثة",
          "إنقاذ مملكة ألاباستا",
          "روبن تنضم للطاقم"
        ],
        newChars: [
          { name: "نيفيرتاري فيفي", role: "أميرة ألاباستا — رافقت الطاقم لإنقاذ مملكتها", img: null },
          { name: "كروكودايل", role: "شيتشيبوكاي — أقوى خصم واجهه لوفي حتى الآن", img: null }
        ],
        importantChars: [
          { name: "نيكو روبن", role: "تنضم للطاقم في نهاية الآرك", img: null }
        ]
      }
    ]
  },
  {
    id: "sky-island",
    name: "ساغا جزيرة السماء",
    nameEn: "Sky Island Saga",
    color: "#F1C40F",
    arcs: [
      {
        id: "skypiea",
        name: "سكاي بييا",
        nameEn: "Skypiea Arc",
        chapters: "237 – 302",
        episodes: "153 – 195",
        status: "مكتمل",
        year: "2001",
        keyEvents: [
          "لقاء قبعات القش بجزيرة السماء",
          "إيني يريد تدمير الجزيرة",
          "لوفي يهزم إيني — ربّ السماء الزائف"
        ],
        newChars: [
          { name: "إيني", role: "ربّ السماء الزائف — فاكهة غورو غورو (البرق)", img: null },
          { name: "غان فول", role: "حاكم سكاي بييا الشرعي", img: null }
        ],
        importantChars: []
      }
    ]
  },
  {
    id: "water-seven",
    name: "ساغا ووتر سيفن",
    nameEn: "Water Seven Saga",
    color: "#1ABC9C",
    arcs: [
      {
        id: "water-seven",
        name: "ووتر سيفن",
        nameEn: "Water Seven Arc",
        chapters: "322 – 374",
        episodes: "229 – 263",
        status: "مكتمل",
        year: "2004",
        keyEvents: [
          "خيانة روبن الظاهرة للطاقم",
          "Going Merry تُعلن نهايتها",
          "ظهور CP9 لأول مرة"
        ],
        newChars: [
          { name: "فرانكي", role: "نجار عبقري — لاحقاً ينضم للطاقم", img: null },
          { name: "لوتشي", role: "زعيم CP9 — أقوى خصم واجهه لوفي حتى الآن", img: null }
        ],
        importantChars: [
          { name: "نيكو روبن", role: "تُكشف قصتها الحقيقية وسبب انضمامها", img: null }
        ]
      },
      {
        id: "enies-lobby",
        name: "إينيس لوبي",
        nameEn: "Enies Lobby Arc",
        chapters: "375 – 430",
        episodes: "264 – 312",
        status: "مكتمل",
        year: "2005",
        keyEvents: [
          "لوفي يعلن الحرب على الحكومة العالمية",
          "إنقاذ نيكو روبن",
          "لوفي يهزم لوتشي بـ Gear Second",
          "وداع Going Merry"
        ],
        newChars: [],
        importantChars: [
          { name: "نيكو روبن", role: "تختار البقاء مع الطاقم وتعيش", img: null },
          { name: "لوتشي", role: "أقوى معركة لوفي حتى ذلك الوقت", img: null }
        ]
      }
    ]
  },
  {
    id: "thriller-bark",
    name: "ساغا ثريلر بارك",
    nameEn: "Thriller Bark Saga",
    color: "#8E44AD",
    arcs: [
      {
        id: "thriller-bark",
        name: "ثريلر بارك",
        nameEn: "Thriller Bark Arc",
        chapters: "442 – 489",
        episodes: "337 – 381",
        status: "مكتمل",
        year: "2006",
        keyEvents: [
          "لقاء بروك — يانضم لاحقاً",
          "جيكيبيك يسرق ظلال الطاقم",
          "زورو يتحمل كل ألم لوفي"
        ],
        newChars: [
          { name: "بروك", role: "موسيقي الهيكل العظمي — ينضم للطاقم", img: null },
          { name: "جيكيبيك", role: "شيتشيبوكاي — يسيطر على الظلال", img: null }
        ],
        importantChars: []
      }
    ]
  },
  {
    id: "summit-war",
    name: "ساغا حرب القمة",
    nameEn: "Summit War Saga",
    color: "#E74C3C",
    arcs: [
      {
        id: "sabaody",
        name: "أرشيبيلاغو ساباودي",
        nameEn: "Sabaody Archipelago Arc",
        chapters: "490 – 513",
        episodes: "385 – 405",
        status: "مكتمل",
        year: "2008",
        keyEvents: [
          "لقاء السوبر نوفا الاثني عشر",
          "هزيمة قبعات القش أمام كوما",
          "انفصال الطاقم — نقطة تحول كبرى"
        ],
        newChars: [
          { name: "ترافالغار لو", role: "سوبر نوفا — كابتن طاقم القلب", img: null },
          { name: "إيوس", role: "أدميرال البحرية — فاكهة بيكا بيكا (الضوء)", img: null },
          { name: "كيزارو", role: "أدميرال البحرية — فاكهة هيكا هيكا (الضوء)", img: null }
        ],
        importantChars: []
      },
      {
        id: "impel-down",
        name: "إمبيل داون",
        nameEn: "Impel Down Arc",
        chapters: "525 – 549",
        episodes: "422 – 452",
        status: "مكتمل",
        year: "2009",
        keyEvents: [
          "لوفي يقتحم أكبر سجن في العالم",
          "تحرير السجناء بقيادة باغي",
          "لقاء إمبورو إيوانكوف"
        ],
        newChars: [
          { name: "مجيلان", role: "نائب مدير السجن — فاكهة الدوكو دوكو (السم)", img: null },
          { name: "إمبورو إيوانكوف", role: "نائب زعيم الثوار — حليف لوفي", img: null }
        ],
        importantChars: [
          { name: "باغي", role: "يتحول لزعيم غير رسمي للسجناء المتمردين", img: null }
        ]
      },
      {
        id: "marineford",
        name: "مارينفورد",
        nameEn: "Marineford Arc",
        chapters: "550 – 580",
        episodes: "457 – 489",
        status: "مكتمل",
        year: "2009",
        keyEvents: [
          "حرب القمة — أكبر حرب في تاريخ ون بيس",
          "وايتبيرد يهاجم مارينفورد",
          "موت بورتغاس دي إيس",
          "موت وايتبيرد — نهاية عصر"
        ],
        newChars: [
          { name: "سينغوكو", role: "أسطول البحرية — قائد الحرب", img: null },
          { name: "أكاينو", role: "أدميرال — فاكهة ماغو ماغو (الحمم)", img: null }
        ],
        importantChars: [
          { name: "بورتغاس دي إيس", role: "يُعدم — الحدث الأكثر تأثيراً في القصة", img: null },
          { name: "وايتبيرد", role: "يموت في المعركة بعد إنقاذ طاقمه", img: null },
          { name: "شانكس", role: "يوقف الحرب بمجرد ظهوره", img: null }
        ]
      }
    ]
  },
  {
    id: "fishman-island",
    name: "ساغا جزيرة الأسماك",
    nameEn: "Fish-Man Island Saga",
    color: "#2980B9",
    arcs: [
      {
        id: "fishman-island",
        name: "جزيرة الأسماك",
        nameEn: Fish-Man Island Arc",
        chapters: "603 – 653",
        episodes: "523 – 574",
        status: "مكتمل",
        year: "2011",
        keyEvents: [
          "أول آرك في البحر الجديد",
          "لوفي يواجه هودي جونز",
          "بيغ مام تُذكر كيونكو"
        ],
        newChars: [
          { name: "هودي جونز", role: "خصم الآرك — يكره البشر", img: null },
          { name: "شيرلي", role: "عرّافة تتنبأ بتدمير جزيرة الأسماك", img: null }
        ],
        importantChars: []
      }
    ]
  },
  {
    id: "dressrosa",
    name: "ساغا دريسروزا",
    nameEn: "Dressrosa Saga",
    color: "#E67E22",
    arcs: [
      {
        id: "dressrosa",
        name: "دريسروزا",
        nameEn: "Dressrosa Arc",
        chapters: "700 – 801",
        episodes: "629 – 746",
        status: "مكتمل",
        year: "2013",
        keyEvents: [
          "كشف مكائد دوفلامينغو",
          "لوفي يهزم دوفلامينغو بـ Gear Fourth",
          "تأسيس تحالف لوفي-لو-سابو"
        ],
        newChars: [
          { name: "دونكيخوتي دوفلامينغو", role: "شيتشيبوكاي — يسيطر على دريسروزا سراً", img: null },
          { name: "سابو", role: "أخو لوفي الأوسط — يرث إرادة إيس", img: null },
          { name: "كايدو", role: "ذكر لأول مرة كأقوى مخلوق في العالم", img: null }
        ],
        importantChars: [
          { name: "ترافالغار لو", role: "يتحالف مع لوفي لهزيمة دوفلامينغو", img: null }
        ]
      }
    ]
  },
  {
    id: "yonko",
    name: "ساغا اليونكو",
    nameEn: "Yonko Saga",
    color: "#C0392B",
    arcs: [
      {
        id: "whole-cake-island",
        name: "Whole Cake Island",
        nameEn: "Whole Cake Island Arc",
        chapters: "825 – 902",
        episodes: "783 – 877",
        status: "مكتمل",
        year: "2016",
        keyEvents: [
          "إنقاذ سانجي من زواج قسري",
          "لوفي يواجه بيغ مام ونجاة معجزة",
          "انضمام جيرما وفيشر تايغر لاحقاً"
        ],
        newChars: [
          { name: "بيغ مام (شارلوت لينلين)", role: "يونكو — أقوى امرأة في العالم", img: null },
          { name: "شارلوت كاتاكوري", role: "نائب بيغ مام الأول — باراميسيا كاملة", img: null }
        ],
        importantChars: [
          { name: "سانجي", role: "يُكشف أصله الحقيقي كأمير جيرما", img: null }
        ]
      },
      {
        id: "wano",
        name: "وانو",
        nameEn: "Wano Country Arc",
        chapters: "909 – 1057",
        episodes: "890 – 1085",
        status: "مكتمل",
        year: "2018",
        keyEvents: [
          "ثورة على كايدو وأوروتشي",
          "لوفي يصحو على قوة نيكا — Gear Fifth",
          "لوفي يُتوَّج يونكو",
          "موت كايدو وبيغ مام"
        ],
        newChars: [
          { name: "كايدو", role: "يونكو — أقوى مخلوق في العالم، تنين أسطوري", img: null },
          { name: "يامامو", role: "ابنة كايدو — تحمل إرادة أوز", img: null },
          { name: "كينيمون", role: "سامورائي وانو — قائد الثورة", img: null }
        ],
        importantChars: [
          { name: "مونكي دي لوفي", role: "يظهر Gear Fifth — تحول نيكا", img: null },
          { name: "زورو", role: "يتقن Conqueror's Haki ويهزم كينغ", img: null }
        ]
      }
    ]
  },
  {
    id: "final",
    name: "الساغا النهائية",
    nameEn: "Final Saga",
    color: "#D4A843",
    arcs: [
      {
        id: "egghead",
        name: "إيغهيد",
        nameEn: "Egghead Arc",
        chapters: "1058 – 1122",
        episodes: "1086 – مستمر",
        status: "مكتمل",
        year: "2022",
        keyEvents: [
          "لقاء فيغاربنك — عبقري الدنيا",
          "كشف أسرار الـ Void Century",
          "ظهور إيم والحكومة العالمية كاملة",
          "خسارة فيغاربنك"
        ],
        newChars: [
          { name: "فيغاربنك", role: "عبقري الدنيا — صانع الـ Seraphim", img: null },
          { name: "York", role: "نسخة فيغاربنك الخائنة", img: null },
          { name: "الأدميرال كوزان", role: "يتحرك بشكل مستقل عن البحرية", img: null }
        ],
        importantChars: [
          { name: "نيكو روبن", role: "تكتشف أسرار Poneglyph الكبرى", img: null },
          { name: "إيم", role: "يظهر بشكل كامل لأول مرة", img: null }
        ]
      },
      {
        id: "elbaph",
        name: "آرك الباف",
        nameEn: "Elbaph Arc",
        chapters: "1123 – مستمر",
        episodes: "مستمر",
        status: "جارٍ",
        year: "2024",
        keyEvents: [
          "قبعات القش يصلون لجزيرة العمالقة",
          "لقاء عمالقة الباف",
          "أحداث جارية — آخر فصل: 1182"
        ],
        newChars: [
          { name: "عمالقة الباف", role: "سكان أقدم جزيرة في العالم", img: null }
        ],
        importantChars: [
          { name: "شانكس", role: "ارتباط قوي بجزيرة الباف", img: null }
        ]
      }
    ]
  }
];
