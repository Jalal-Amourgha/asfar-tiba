import {
  destination1,
  destination2,
  destination3,
  destination4,
  destination5,
  destination6,
  destination7,
  destination8,
  destination9,
  destination10,
  destination11,
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  sponsor7,
  sponsor8,
  sponsor9,
  sponsor11,
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  inside2,
  inside3,
  inside5,
  inside4,
  offer1,
  offer2,
  offer3,
  offer4,
  offer5,
  offer6,
  achievement1,
  achievement2,
  achievement3,
  achievement4,
} from "../assets";

export const navLinks = [
  {
    id: 0,

    label: { fr: "Qui sommes nous ?", ar: "من نحن" },
    href: "about",
  },
  { id: 1, label: { fr: "Voyages", ar: "الرحلات" }, href: "voyages" },
  {
    id: 2,
    label: { fr: "Services", ar: "خدمات" },
    href: "services",
  },

  {
    id: 3,
    label: { fr: "Hajj & Omra", ar: "الحج والعمرة" },
    href: "hajj&omra",
  },
  {
    id: 4,
    label: { fr: "Contact", ar: "اتصل بنا" },
    href: "contact",
  },
];

export const services = [];

export const destinations = [
  {
    img: destination1,
    place: { fr: "Marrakech", ar: "مراكش" },
    country: { fr: "Maroc", ar: "المغرب" },
    rate: "4.6",
    type: "popular",
  },
  {
    img: destination2,
    place: { fr: "Istanbul", ar: "إسطنبول" },
    country: { fr: "Turquie", ar: "تركيا" },
    rate: "4.9",
    type: "popular",
  },
  {
    img: destination3,
    place: { fr: "Paris", ar: "باريس" },
    country: { fr: "France", ar: "فرنسا" },
    rate: "4.8",
    type: "popular",
  },
  {
    img: destination4,
    place: { fr: "Barcelona", ar: "برشلونة" },
    country: { fr: "Espagne", ar: "إسبانيا" },
    rate: "4.9",
    type: "popular",
  },
  {
    img: destination5,
    place: { fr: "Roma", ar: "روما" },
    country: { fr: "Italie", ar: "إيطاليا" },
    rate: "5.0",
    type: "adventure",
  },
  {
    img: destination6,
    place: { fr: "Dubai", ar: "دبي" },
    country: { fr: "Émirats", ar: "الإمارات" },
    rate: "4.8",
    type: "adventure",
  },
  {
    img: destination7,
    place: { fr: "London", ar: "لندن" },
    country: { fr: "Angleterre", ar: "إنجلترا" },
    rate: "4.7",
    type: "adventure",
  },
  {
    img: destination8,
    place: { fr: "New York", ar: "نيويورك" },
    country: { fr: "États-Unis", ar: "الولايات المتحدة" },
    rate: "4.6",
    type: "adventure",
  },
  {
    img: destination9,
    place: { fr: "Santorini", ar: "سانتوريني" },
    country: { fr: "Greece", ar: "اليونان" },
    rate: "5.0",
    type: "calm",
  },
  {
    img: destination10,
    place: { fr: "Bali", ar: "بالي" },
    country: { fr: "Indonésie", ar: "إندونيسيا" },
    rate: "4.8",
    type: "calm",
  },
  {
    img: destination11,
    place: { fr: "Tahi", ar: "تاهي" },
    country: { fr: "Indonésie", ar: "إندونيسيا" },
    rate: "4.8",
    type: "calm",
  },
];

export const insideDestinations = [
  {
    img: inside2,
    city: { fr: "Marrakech", ar: "مراكش" },
    classes: "col-span-2",
  },
  { img: inside3, city: { fr: "Oujda", ar: "وجدة" }, classes: "col-span-1" },
  { img: inside5, city: { fr: "Fes", ar: "فاس" }, classes: "col-span-1" },
  {
    img: inside4,
    city: { fr: "Chefchaouen", ar: "شفشاون" },
    classes: "col-span-2",
  },
];

export const sponsors = [
  { id: 0, img: sponsor1 },
  { id: 1, img: sponsor2 },
  { id: 2, img: sponsor3 },
  { id: 3, img: sponsor4 },
  { id: 4, img: sponsor5 },
  { id: 5, img: sponsor6 },
  { id: 6, img: sponsor7 },
  { id: 7, img: sponsor8 },
  { id: 8, img: sponsor9 },
  // { id: 10, img: sponsor10 },
  { id: 11, img: sponsor11 },
];

export const Omra_Offers = [
  { id: 0, img: offer1 },
  { id: 1, img: offer2 },
  { id: 2, img: offer3 },
  { id: 3, img: offer4 },
  { id: 4, img: offer5 },
  { id: 5, img: offer6 },
];

export const questions = [
  {
    id: 1,
    ar: {
      question: "ما هي الخدمات التي تقدمها وكالة السفر لدينا؟",
      answer:
        "وكالتنا تقدم مجموعة واسعة من الخدمات، بما في ذلك تنظيم رحلات العمرة، حجز التذاكر، توفير الإقامة في فنادق قريبة من الحرم، تنظيم المواصلات، بالإضافة إلى تقديم باقات تناسب جميع الميزانيات.",
    },
    fr: {
      question: "Quels services propose notre agence de voyages ?",
      answer:
        "Notre agence propose une large gamme de services, notamment l'organisation des séjours pour la Omra, la réservation des billets, l'hébergement dans des hôtels proches des lieux saints, la gestion des transferts, ainsi que des offres adaptées à tous les budgets.",
    },
  },
  {
    id: 2,
    ar: {
      question:
        "هل يمكن لوكالتنا المساعدة في طلبات التأشيرة والتأمين على السفر؟",
      answer:
        "نعم، نحن نقدم المساعدة في تقديم طلبات التأشيرة وضمان الحصول على التأمينات الضرورية للسفر، مما يضمن لك رحلة آمنة ومريحة. ",
    },
    fr: {
      question:
        "Notre agence peut-elle vous aider avec vos demandes de visa et d'assurance voyage ?",
      answer:
        "Oui, nous assistons nos clients dans les démarches de demande de visa et proposons des assurances voyage essentielles pour garantir un séjour sécurisé et confortable.",
    },
  },
  {
    id: 3,
    ar: {
      question: "كيف يمكنني حجز رحلة مع وكالتكم؟",
      answer:
        "يمكنك حجز رحلتك عن طريق التواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني، أو زيارة مكتبنا. كما يمكنك الاطلاع على العروض الخاصة بنا من خلال موقعنا الإلكتروني أو منصات التواصل الاجتماعي.",
    },
    fr: {
      question: "Comment puis-je réserver un voyage avec votre agence ?",
      answer:
        "Vous pouvez réserver votre voyage en nous contactant directement par téléphone ou par e-mail, ou en visitant notre bureau. Vous pouvez également consulter nos offres sur notre site web ou nos réseaux sociaux.",
    },
  },
  {
    id: 4,
    ar: {
      question: "ماذا يتضمن عرض العمرة الخاصة بك؟",
      answer:
        "تشمل باقات العمرة لدينا الإقامة في فنادق مريحة، النقل من وإلى المطار، خدمات التنقل داخل مكة والمدينة، بالإضافة إلى الدعم على مدار الساعة.",
    },
    fr: {
      question: "Qu'est-ce qui est inclus dans vos forfaits Omra ?",
      answer:
        "Nos forfaits Omra incluent l'hébergement dans des hôtels confortables, le transport depuis et vers l'aéroport, les transferts à l'intérieur de La Mecque et Médine, ainsi qu'une assistance 24h/24.",
    },
  },
];

export const reviews = [
  {
    id: 0,
    icon: person1,
    review: {
      ar: "خدمة رائعة وسرعة في الاستجابة. عروض العمرة من أسفار طيبة كانت مذهلة من حيث السعر والجودة. أوصي بها بشدة",
      fr: "Service impeccable et personnel très professionnel. Les offres Omra d'Asfar Tiba sont vraiment avantageuses. Je recommande vivement!",
    },
    name: "Nafie",
    rate: "5",
  },
  {
    id: 1,
    icon: person3,
    review: {
      ar: "تجربتي مع أسفار طيبة كانت ممتازة. فريق عمل متعاون ومنظم بشكل احترافي. رحلة العمرة كانت مريحة جدًا",
      fr: "Expérience inoubliable avec Asfar Tiba. Organisation parfaite et hôtels proches des lieux saints. Merci pour tout!",
    },
    name: "Mustapha",
    rate: "4.8",
  },
  {
    id: 2,
    icon: person2,
    review: {
      ar: "أفضل وكالة عمرة تعاملت معها. فريق عمل ودود ومتفاني، والفنادق كانت قريبة ومريحة للغاية.   ",
      fr: "C'était un plaisir de voyager avec Asfar Tiba. Organisation impeccable et excellent rapport qualité-prix.",
    },
    name: "Fatima",
    rate: "4.9",
  },
  {
    id: 3,
    icon: person4,
    review: {
      ar: "شركة ممتازة! حجوزات العمرة كانت سهلة، والفنادق كانت قريبة من الحرم. شكرًا أسفار طيبة",
      fr: "Excellente agence! Tout était bien organisé, du départ jusqu'au retour. Merci à toute l'équipe d'Asfar Tiba.",
    },
    name: "Hajar",
    rate: "4.7",
  },
  {
    id: 4,
    icon: person5,
    review: {
      ar: "أسفار طيبة هي الخيار الأفضل للعمرة. مرونة في التعامل، وخدمة ممتازة من البداية إلى النهاية",
      fr: "Asfar Tiba est la meilleure agence pour réserver une Omra. Un service de qualité et des offres adaptées à tous les budgets.",
    },
    name: "Mohammed",
    rate: "4.8",
  },
  {
    id: 5,
    icon: person6,
    review: {
      ar: "كانت تجربة رائعة مع أسفار طيبة. رحلة منظمة بشكل ممتاز وخدمات تفوق التوقعات. شكرًا جزيلًا لكم!",
      fr: "Une agence exceptionnelle! Le voyage était bien organisé et les hôtels étaient très confortables. Merci Asfar Tiba.",
    },
    name: "Said",
    rate: "4.9",
  },
];

export const achievements = [
  {
    icon: achievement1,
    ar: {
      title: "عدد الزملاء الذين تم تقديم الخدمة لهم",
      label: "قمنا بتنظيم خطط سفر ناجحة لأكثر من 5000 عميل راضٍ منذ تأسيسنا.",
    },
    fr: {
      title: "Nombre de clients servis",
      label:
        "Nous avons organisé avec succès des voyages pour plus de 5000 clients satisfaits depuis notre création.",
    },
  },
  {
    icon: achievement2,
    ar: {
      title: "الموافقات الناجحة على التأشيرة",
      label:
        "ساعدنا في تأمين 5000 موافقة على التأشيرة لعملائنا، وضمان تجارب سفر خالية من المتاعب.",
    },
    fr: {
      title: "Approbations de visa réussies",
      label:
        "Nous avons aidé à obtenir 5000 approbations de visa pour nos clients, garantissant ainsi des expériences de voyage sans tracas.",
    },
  },
  {
    icon: achievement3,

    ar: {
      title: "رضا العملاء",
      label:
        "حققنا معدل رضا العملاء بنسبة 95٪ + من خلال الخدمة الممتازة وباقات السفر المصممة خصيصًا.",
    },
    fr: {
      title: "Satisfaction client",
      label:
        "Nous avons atteint un taux de satisfaction client de 95 %+ grâce à un excellent service et à des forfaits de voyage sur mesure.",
    },
  },
  {
    icon: achievement4,

    ar: {
      title: "الشراكات",
      label:
        "لدينا شراكات مع أفضل الفنادق وشركات النقل لتوفير تجارب سفر سلسة  ",
    },
    fr: {
      title: "Partenariats",
      label:
        "Nous avons des partenariats avec les hôtels et les sociétés de transport les mieux notés pour offrir des expériences de voyage fluides.",
    },
  },
];

export const footerLinks = [
  {
    title: { fr: "Destinations", ar: "الوجهات" },
    fr: [
      "Maroc",
      "Turquie",
      "France",
      "Espagne",
      "Italie",
      "Émirats",
      "Angleterre",
      "États-Unis",
      "Greece",
      "Indonésie",
    ],
    ar: [
      "المغرب",
      "تركيا",
      "فرنسا",
      "إسبانيا",
      "إيطاليا",
      "الإمارات",
      "إنجلترا",
      "الولايات المتحدة",
      "اليونان",
      "إندونيسيا",
    ],
    links: false,
  },
  {
    title: { fr: "Bureaux", ar: "مكاتب" },
    fr: [
      "Tetouan",
      "Tanger",
      "Ben Guerir",
      "Mohammedia",
      "Al Laayoune",
      "Casablanca",
    ],
    ar: ["تطوان", "طنجة", "بن جرير", "المحدية", "العيون", "الدار البيضاء"],
    links: false,
  },
];
