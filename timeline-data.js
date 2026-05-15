// ============================================
// قاعدة بيانات الخط الزمني لون بيس
// مبني على Library of Ohara Timeline v5.0
// لإضافة حدث: أضف كائن في المصفوفة المناسبة
// ============================================

const TIMELINE_ERAS = [

  // ===== ما قبل التاريخ =====
  {
    id: "prehistory",
    name: "ما قبل التاريخ",
    nameEn: "Prehistory",
    color: "#8B6914",
    icon: "🦕",
    timeRange: "أكثر من 100,000,000 سنة مضت",
    events: [
      {
        id: "dinosaurs",
        year: "أكثر من 100,000,000 سنة مضت",
        yearShort: "+100M سنة",
        title: "عصر الديناصورات",
        desc: "تبدأ الديناصورات في السيطرة على العالم، وتعيش أنواع قديمة كثيرة. يستمر هذا العصر لأكثر من مئة مليون سنة.",
        source: "الفصل 1028، 115",
        type: "world",
        importance: "normal"
      }
    ]
  },

  // ===== التاريخ القديم =====
  {
    id: "ancient",
    name: "التاريخ القديم",
    nameEn: "Ancient History",
    color: "#B8860B",
    icon: "🏛️",
    timeRange: "5000 – 900 سنة مضت",
    events: [
      {
        id: "tree-ohara",
        year: "حوالي 5000 سنة مضت",
        yearShort: "~5000 سنة",
        title: "شجرة المعرفة تنبت في أوهارا",
        desc: "تنبت الشجرة التي ستُعرف لاحقاً بـ'شجرة المعرفة' في جزيرة أوهارا، وستُستخدم مكتبةً لآلاف السنين.",
        source: "الفصل 392",
        type: "world",
        importance: "normal"
      },
      {
        id: "alubarna",
        year: "حوالي 4000 سنة مضت",
        yearShort: "~4000 سنة",
        title: "بناء قصر ألوبارنا في ألاباستا",
        desc: "يُبنى قصر ألوبارنا في الجزيرة الرملية، ليصبح موقعاً تاريخياً يحمل أربعة آلاف سنة من التاريخ.",
        source: "الفصل 188",
        type: "world",
        importance: "normal"
      },
      {
        id: "moon-civilization",
        year: "أكثر من 1120 سنة مضت",
        yearShort: "+1120 سنة",
        title: "حضارة القمر وتأسيس بيركا",
        desc: "يستوطن البشر المجنّحون — المعروفون بـ'الملائكة' — القمرَ ويؤسسون مدينة بيركا. تزدهر حضارتهم ويخلقون سلالة من الروبوتات تُعرف بـ Automata.",
        source: "الفصل 470",
        type: "world",
        importance: "important"
      },
      {
        id: "moon-departure",
        year: "أكثر من 1120 سنة مضت",
        yearShort: "+1120 سنة",
        title: "شعب القمر ينزل إلى الأرض",
        desc: "بسبب نقص الموارد، يغادر شعب القمر إلى الكوكب، تاركين الـ Automata في سبات. تنقسم القبائل الثلاث لتؤسس شاندورا وسكاي بييا وبيركا.",
        source: "الفصل 472",
        type: "world",
        importance: "important"
      },
      {
        id: "shandora",
        year: "1120 سنة مضت (السنة 402 بالتقويم البحري)",
        yearShort: "~1120 سنة",
        title: "ازدهار مدينة شاندورا في جايا",
        desc: "تزدهر مدينة شاندورا، التي أسسها أحفاد شعب القمر، في جزيرة جايا.",
        source: "الفصل 261",
        type: "world",
        importance: "normal"
      },
      {
        id: "zunesha-born",
        year: "أكثر من 1000 سنة مضت",
        yearShort: "+1000 سنة",
        title: "ولادة الفيل زونيشا",
        desc: "يولد الفيل العملاق زونيشا الذي يحمل جزيرة زو على ظهره.",
        source: "Vivre Cards",
        type: "character",
        importance: "normal"
      },
      {
        id: "dressrosa-founded",
        year: "أكثر من 900 سنة مضت",
        yearShort: "+900 سنة",
        title: "تأسيس مملكة دريسروزا",
        desc: "تُؤسَّس مملكة دريسروزا وتبدأ سلالة دونكيخوتي في حكمها. يُبنى القصر الملكي أيضاً في هذه الحقبة.",
        source: "الفصل 726",
        type: "world",
        importance: "normal"
      },
      {
        id: "fishman-island-founded",
        year: "أكثر من 800 سنة مضت",
        yearShort: "+800 سنة",
        title: "تأسيس جزيرة الأسماك",
        desc: "يجتمع أبناء الأسماك والإنسان البحري عند جذور شجرة الشمس Eve في قاع البحر، فارين من اضطهاد البشر، ليؤسسوا جزيرة الأسماك.",
        source: "الفصل 612",
        type: "world",
        importance: "important"
      },
      {
        id: "wano-founded",
        year: "أكثر من 800 سنة مضت",
        yearShort: "+800 سنة",
        title: "تأسيس مملكة وانو",
        desc: "تُؤسَّس مملكة وانو على شواطئ بركان جبل فوجي تحت حكم أسرة كوزوكي.",
        source: "الفصل 1055، 964",
        type: "world",
        importance: "normal"
      }
    ]
  },

  // ===== القرن الفراغي =====
  {
    id: "void-century",
    name: "القرن الفراغي",
    nameEn: "Void Century",
    color: "#6A0572",
    icon: "🌑",
    timeRange: "900 – 800 سنة مضت",
    events: [
      {
        id: "void-century-begins",
        year: "حوالي 900 سنة مضت",
        yearShort: "~900 سنة",
        title: "بداية القرن الفراغي",
        desc: "يبدأ القرن الذي سيُعرف بـ'القرن الفراغي'. تنتهي 'حقبة العبيد' لكن المعاناة تستمر في أرجاء العالم.",
        source: "الفصل 649، 726",
        type: "world",
        importance: "critical"
      },
      {
        id: "immense-kingdom",
        year: "حوالي 900 سنة مضت",
        yearShort: "~900 سنة",
        title: "ازدهار المملكة العظيمة",
        desc: "تزدهر مملكة متقدمة تقنياً يسكنها أبناء عائلة D، وترتبط بجزيرة الأسماك وشاندورا ووانو وووتر سيفن وغيرها.",
        source: "الفصل 1065، 1085",
        type: "world",
        importance: "critical"
      },
      {
        id: "iron-giant",
        year: "حوالي 900 سنة مضت",
        yearShort: "~900 سنة",
        title: "صنع العملاق الحديدي",
        desc: "تصنع المملكة العظيمة روبوتاً ضخماً أطلق عليه العلماء لاحقاً اسم 'العملاق الحديدي'.",
        source: "الفصل 1066",
        type: "world",
        importance: "important"
      },
      {
        id: "nika-fruit",
        year: "القرن الفراغي",
        yearShort: "900-800 سنة",
        title: "ظهور فاكهة نيكا — إله الشمس",
        desc: "يتحول حلم العبيد بمحرر أسطوري اسمه 'نيكا' إلى فاكهة شيطانية أسطورية. يأكلها شخص يُعرف بـ'Joy Boy' ليصبح أول محرر.",
        source: "الفصل 1044، 649",
        type: "fruit",
        importance: "critical"
      },
      {
        id: "joyboy-promise",
        year: "القرن الفراغي",
        yearShort: "900-800 سنة",
        title: "وعد Joy Boy لجزيرة الأسماك",
        desc: "يقطع Joy Boy وعداً لشعب جزيرة الأسماك يتعلق بالسفينة العملاقة Noah والأميرة البحرية Poseidon.",
        source: "الفصل 649",
        type: "character",
        importance: "critical"
      },
      {
        id: "poseidon-born",
        year: "القرن الفراغي",
        yearShort: "900-800 سنة",
        title: "ولادة Poseidon — السلاح القديم",
        desc: "تولد أميرة حورية في جزيرة الأسماك تُسمى Poseidon، تمتلك القدرة على التحدث مع ملوك البحر.",
        source: "الفصل 649",
        type: "character",
        importance: "important"
      },
      {
        id: "pluton-built",
        year: "القرن الفراغي",
        yearShort: "900-800 سنة",
        title: "بناء سفينة Pluton — السلاح القديم",
        desc: "تُبنى سفينة حرب هائلة في ووتر سيفن تُسمى Pluton. يحتفظ مصمموها بمخططاتها سراً خوفاً من وقوعها في يد أعداء.",
        source: "الفصل 344، 1055",
        type: "world",
        importance: "important"
      },
      {
        id: "void-century-war",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "حرب القرن الفراغي",
        desc: "تنشب معركة كبرى بين أبناء المملكة العظيمة وتحالف من 20 ملكاً يقوده الملك Nerona Imu. تشمل التحالف نيفيرتاري ليلي ملكة ألاباستا التي تخفي انتماءها لعائلة D.",
        source: "الفصل 1066، 1085",
        type: "war",
        importance: "critical"
      },
      {
        id: "poneglyphs-created",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "نقش الـ Poneglyph — الحجارة الخالدة",
        desc: "حين أدركت المملكة العظيمة اقتراب هزيمتها، نقش أبناء أسرة كوزوكي تاريخها على حجارة لا تُكسر — 9 حجارة Rio Poneglyph من أصل 30.",
        source: "الفصل 395، 818",
        type: "world",
        importance: "critical"
      },
      {
        id: "joyboy-dies",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "موت Joy Boy — بداية الهروب",
        desc: "يموت Joy Boy وتُولد من جديد فاكهة هيتو هيتو نيكا، فتبدأ رحلة هروبها من أعدائها لـ 800 سنة بحثاً عن صاحب جديد.",
        source: "الفصل 1044",
        type: "character",
        importance: "critical"
      },
      {
        id: "poneglyphs-scattered",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "تشتيت الـ Poneglyph بمساعدة ليلي",
        desc: "بمساعدة نيفيرتاري ليلي، تُشتَّت الحجارة في أرجاء العالم. تختفي ليلي غامضاً، ويتولى أخوها عرش ألاباستا.",
        source: "الفصل 1085",
        type: "world",
        importance: "critical"
      },
      {
        id: "world-government-founded",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "تأسيس الحكومة العالمية والعرش الفارغ",
        desc: "يتأسس تحالف الملوك العشرين ليشكلوا الحكومة العالمية. يتفقون على أن لا أحد يجلس على العرش — لكن Imu يجلس عليه سراً.",
        source: "الفصل 1086",
        type: "world",
        importance: "critical"
      },
      {
        id: "wano-borders-closed",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "إغلاق حدود وانو",
        desc: "تأمر أسرة كوزوكي بإغلاق حدود وانو — ربما لحمايتها من الحكومة العالمية.",
        source: "الفصل 964",
        type: "world",
        importance: "important"
      }
    ]
  },

  // ===== ما بعد القرن الفراغي =====
  {
    id: "post-void",
    name: "ما بعد القرن الفراغي",
    nameEn: "Post-Void Century",
    color: "#1A5276",
    icon: "⚓",
    timeRange: "800 – 100 سنة مضت",
    events: [
      {
        id: "sky-island-rises",
        year: "حوالي 800 سنة مضت",
        yearShort: "~800 سنة",
        title: "رفع جزيرة شاندورا إلى السماء",
        desc: "يُرفع جزء من جزيرة جايا — بما فيها مدينة شاندورا — إلى السماء بفعل تيارات هوائية ضخمة ليصبح جزيرة سماء.",
        source: "الفصل 287",
        type: "world",
        importance: "important"
      },
      {
        id: "noland-visits",
        year: "حوالي 400 سنة مضت",
        yearShort: "~400 سنة",
        title: "مونتبلانك نولاند يزور شاندورا",
        desc: "يزور المستكشف نولاند جزيرة جايا ويلتقي بقبيلة شاندوريان المحاربة. يُنقذ القرية من وباء ويصادق زعيمها كالغارا.",
        source: "الفصل 228، 287",
        type: "character",
        importance: "important"
      },
      {
        id: "noland-executed",
        year: "حوالي 400 سنة مضت",
        yearShort: "~400 سنة",
        title: "إعدام نولاند — 'نولاند الكذاب'",
        desc: "حين يعود نولاند للإبلاغ عن مدينة الذهب، يجد المكان فارغاً بعد رفع الجزء الآخر من الجزيرة إلى السماء. يُعدَم بتهمة الكذب.",
        source: "الفصل 228",
        type: "character",
        importance: "important"
      }
    ]
  },

  // ===== عصر روجر =====
  {
    id: "roger-era",
    name: "عصر روجر",
    nameEn: "Roger's Era",
    color: "#8B1A1A",
    icon: "☠️",
    timeRange: "53 – 24 سنة مضت",
    events: [
      {
        id: "rocks-pirates",
        year: "38 سنة مضت",
        yearShort: "38 سنة",
        title: "معركة God Valley — تحالف روجر وغارب",
        desc: "تتشكل مجموعة قراصنة Rocks بقيادة Rocks D. Xebec — أقوى تحالف قراصنة في العالم. في معركة God Valley، يتحالف روجر وغارب لهزيمتهم.",
        source: "الفصل 957",
        type: "war",
        importance: "critical"
      },
      {
        id: "ace-conceived",
        year: "حوالي 27 سنة مضت",
        yearShort: "~27 سنة",
        title: "حمل روج بابن روجر — إيس",
        desc: "روج — صديقة روجر — تحمل بطفله. تهرب من الحكومة العالمية وتحمل 20 شهراً بدلاً من 9 لإخفاء إرث روجر.",
        source: "الفصل 550، 585",
        type: "character",
        importance: "important"
      },
      {
        id: "roger-reaches-laugh-tale",
        year: "حوالي 25 سنة مضت",
        yearShort: "~25 سنة",
        title: "روجر يصل إلى Laugh Tale",
        desc: "يصبح روجر وطاقمه أول من يصلون إلى الجزيرة النهائية ويكتشفون الـ One Piece. يُسمون الجزيرة 'Laugh Tale' من شدة ضحكهم.",
        source: "الفصل 966",
        type: "character",
        importance: "critical"
      },
      {
        id: "roger-surrenders",
        year: "حوالي 24 سنة مضت",
        yearShort: "~24 سنة",
        title: "روجر يسلم نفسه للبحرية",
        desc: "مريضاً بمرض لا علاج له، يقرر روجر تسليم نفسه طوعاً للبحرية. يُحل طاقم روجر قبل ذلك.",
        source: "الفصل 1",
        type: "character",
        importance: "critical"
      },
      {
        id: "roger-executed",
        year: "24 سنة مضت",
        yearShort: "24 سنة",
        title: "إعدام روجر في لوغ تاون — بداية عصر القرصنة",
        desc: "يُعدَم غول دي روجر في لوغ تاون ضاحكاً. كلماته الأخيرة عن الـ One Piece تُشعل عصر القرصنة الكبير.",
        source: "الفصل 1",
        type: "character",
        chars: ["غول دي روجر"],
        importance: "critical"
      },
      {
        id: "ace-born",
        year: "24 سنة مضت",
        yearShort: "24 سنة",
        title: "ولادة بورتغاس دي إيس",
        desc: "بعد 20 شهراً من الحمل، تلد روج ابن روجر — إيس. تموت روج بعد الولادة مباشرة. يتكفل غارب بتربية إيس.",
        source: "الفصل 550",
        type: "character",
        chars: ["بورتغاس دي إيس", "غول دي روجر"],
        importance: "important"
      }
    ]
  },

  // ===== ما قبل القصة =====
  {
    id: "pre-story",
    name: "ما قبل بداية القصة",
    nameEn: "Pre-Story",
    color: "#145A32",
    icon: "🌊",
    timeRange: "22 – 1 سنة قبل القصة",
    events: [
      {
        id: "luffy-born",
        year: "19 سنة قبل القصة",
        yearShort: "19 سنة",
        title: "ولادة مونكي دي لوفي",
        desc: "يولد مونكي دي لوفي في قرية فوشا بإيست بلو. يربيه جده مونكي دي غارب.",
        source: "الفصل 1",
        type: "character",
        chars: ["مونكي دي لوفي"],
        importance: "critical"
      },
      {
        id: "shanks-visits",
        year: "12 سنة قبل القصة",
        yearShort: "12 سنة",
        title: "شانكس يزور قرية فوشا — لوفي يأكل الفاكهة",
        desc: "يزور شانكس قرية فوشا. يأكل لوفي (7 سنوات) عن طريق الخطأ فاكهة غوم غوم. ينقذ شانكس لوفي من الغرق مضحياً بذراعه.",
        source: "الفصل 1",
        type: "character",
        chars: ["مونكي دي لوفي", "شانكس"],
        importance: "critical"
      },
      {
        id: "zoro-trains",
        year: "11 سنة قبل القصة",
        yearShort: "~11 سنة",
        title: "زورو يبدأ تدريبه على السيف",
        desc: "يبدأ زورو تدريبه في دوجو كوشيرو ويتعهد بهزيمة ميهوك ليصبح أعظم سيوفيين في العالم.",
        source: "الفصل 5",
        type: "character",
        chars: ["رورونوا زورو"],
        importance: "normal"
      },
      {
        id: "nami-village",
        year: "حوالي 8 سنوات قبل القصة",
        yearShort: "~8 سنة",
        title: "أرلونج يستعبد قرية نامي",
        desc: "يسيطر أرلونج وطاقمه على قرية بيلميير ويجبر نامي — البالغة 10 سنوات — على العمل له لشراء حرية قريتها.",
        source: "الفصل 77",
        type: "character",
        chars: ["نامي", "أرلونج"],
        importance: "important"
      },
      {
        id: "sanji-baratie",
        year: "9 سنوات قبل القصة",
        yearShort: "~9 سنة",
        title: "سانجي يعمل في مطعم الباراتيه",
        desc: "بعد حادثة في البحر، يلتقي سانجي بالطباخ زيف ويبدأ العمل في مطعم الباراتيه العائم.",
        source: "الفصل 57",
        type: "character",
        chars: ["سانجي"],
        importance: "normal"
      }
    ]
  },

  // ===== زمن القصة =====
  {
    id: "story-time",
    name: "زمن القصة",
    nameEn: "Story Time",
    color: "#D4A843",
    icon: "🏴‍☠️",
    timeRange: "زمن القصة الحالي",
    events: [
      {
        id: "story-begins",
        year: "بداية القصة",
        yearShort: "فصل 1",
        title: "لوفي يغادر قرية فوشا — بداية المغامرة",
        desc: "يغادر مونكي دي لوفي (17 سنة) قرية فوشا حاملاً قبعة شانكس، مُعلناً بداية رحلته ليصبح ملك القراصنة.",
        source: "الفصل 1",
        type: "character",
        chars: ["مونكي دي لوفي"],
        importance: "critical"
      },
      {
        id: "zoro-joins",
        year: "بداية القصة",
        yearShort: "فصل 3",
        title: "زورو ينضم لطاقم قبعات القش",
        desc: "ينضم زورو لطاقم لوفي بعد إنقاذه من إعدام البحرية.",
        source: "الفصل 3",
        type: "character",
        chars: ["رورونوا زورو"],
        importance: "important"
      },
      {
        id: "nami-joins",
        year: "بداية القصة",
        yearShort: "فصل 94",
        title: "نامي تنضم رسمياً بعد هزيمة أرلونج",
        desc: "بعد أن يهزم لوفي أرلونج وينقذ قريتها، تنضم نامي رسمياً لطاقم قبعات القش.",
        source: "الفصل 94",
        type: "character",
        chars: ["نامي", "مونكي دي لوفي"],
        importance: "important"
      },
      {
        id: "grand-line-entered",
        year: "بداية القصة",
        yearShort: "فصل 100",
        title: "قبعات القش يدخلون الغراند لاين",
        desc: "يعبر طاقم قبعات القش Reverse Mountain ليدخلوا الغراند لاين رسمياً.",
        source: "الفصل 100",
        type: "world",
        importance: "important"
      },
      {
        id: "robin-joins",
        year: "زمن القصة",
        yearShort: "فصل 218",
        title: "نيكو روبن تنضم للطاقم",
        desc: "بعد هزيمة كروكودايل في ألاباستا، تنضم نيكو روبن لطاقم قبعات القش.",
        source: "الفصل 218",
        type: "character",
        chars: ["نيكو روبن"],
        importance: "important"
      },
      {
        id: "gear-second",
        year: "زمن القصة",
        yearShort: "فصل 387",
        title: "لوفي يستخدم Gear Second لأول مرة",
        desc: "في معركة إينيس لوبي، يكشف لوفي عن Gear Second لهزيمة لوتشي.",
        source: "الفصل 387",
        type: "character",
        chars: ["مونكي دي لوفي"],
        importance: "important"
      },
      {
        id: "marineford-war",
        year: "زمن القصة",
        yearShort: "فصل 550",
        title: "حرب القمة — مارينفورد",
        desc: "تندلع حرب القمة في مارينفورد. يُعدَم بورتغاس دي إيس، ويموت وايتبيرد. يُوقف شانكس الحرب بمجرد ظهوره.",
        source: "الفصل 550-580",
        type: "war",
        chars: ["مونكي دي لوفي", "بورتغاس دي إيس", "إدوارد نيوغيت", "شانكس"],
        importance: "critical"
      },
      {
        id: "timeskip",
        year: "زمن القصة",
        yearShort: "فصل 597",
        title: "فترة التدريب — سنتان",
        desc: "بعد هزيمة قبعات القش في ساباودي وموت إيس، يُقرر لوفي التدريب سنتين. ينتشر الطاقم في أرجاء العالم.",
        source: "الفصل 597",
        type: "world",
        importance: "critical"
      },
      {
        id: "gear-fourth",
        year: "بعد التدريب",
        yearShort: "فصل 784",
        title: "لوفي يستخدم Gear Fourth لأول مرة",
        desc: "في معركة دريسروزا، يكشف لوفي عن Gear Fourth لهزيمة دوفلامينغو.",
        source: "الفصل 784",
        type: "character",
        chars: ["مونكي دي لوفي"],
        importance: "important"
      },
      {
        id: "gear-fifth",
        year: "بعد التدريب",
        yearShort: "فصل 1044",
        title: "Gear Fifth — صحوة فاكهة نيكا",
        desc: "في وانو، يصحو لوفي على قوة إله الشمس نيكا ويحقق Gear Fifth لأول مرة — أقوى تحول في تاريخ ون بيس.",
        source: "الفصل 1044",
        type: "character",
        chars: ["مونكي دي لوفي"],
        importance: "critical"
      },
      {
        id: "luffy-yonko",
        year: "بعد التدريب",
        yearShort: "فصل 1053",
        title: "لوفي يُتوَّج يونكو",
        desc: "بعد هزيمة كايدو في وانو، يُعلَن مونكي دي لوفي رسمياً أحد اليونكو الأربعة الكبار.",
        source: "الفصل 1053",
        type: "character",
        chars: ["مونكي دي لوفي"],
        importance: "critical"
      },
      {
        id: "egghead-arc",
        year: "الحاضر",
        yearShort: "فصل 1058-1122",
        title: "آرك إيغهيد — كشف أسرار القرن الفراغي",
        desc: "يصل لوفي وطاقمه لجزيرة فيغاربنك. تُكشف أسرار القرن الفراغي، ويظهر إيم بشكل كامل.",
        source: "الفصل 1058-1122",
        type: "world",
        chars: ["مونكي دي لوفي", "فيغاربنك", "إيم"],
        importance: "critical"
      },
      {
        id: "elbaph-now",
        year: "الحاضر — جارٍ",
        yearShort: "فصل 1123+",
        title: "آرك الباف — أقدم جزيرة في العالم",
        desc: "يصل طاقم قبعات القش لجزيرة الباف — موطن العمالقة وأقدم جزيرة في العالم. أحداث جارية — آخر فصل: 1182.",
        source: "الفصل 1123-مستمر",
        type: "world",
        chars: ["مونكي دي لوفي"],
        importance: "critical"
      }
    ]
  }
];

// أنواع الأحداث
const EVENT_TYPES = [
  { id: "all", label: "الكل", color: "#D4A843", emoji: "📋" },
  { id: "world", label: "أحداث العالم", color: "#3498DB", emoji: "🌍" },
  { id: "character", label: "أحداث الشخصيات", color: "#E67E22", emoji: "👤" },
  { id: "war", label: "الحروب والمعارك", color: "#E74C3C", emoji: "⚔️" },
  { id: "fruit", label: "فواكه الشيطان", color: "#9B59B6", emoji: "🍎" }
];
