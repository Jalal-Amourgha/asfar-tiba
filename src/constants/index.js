import {
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  sponsor7,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  offer1,
  offer2,
} from "@/assets";

export const navLinks = [
  { id: 1, label: { fr: "Voyages", ar: "الرحلات" }, href: "voyages" },
  {
    id: 2,
    label: { fr: "Services", ar: "خدمات" },
    href: "services",
  },

  {
    id: 3,
    label: { fr: "Hajj & Omra", ar: "الحج والعمرة" },
    href: "packages",
  },
  {
    id: 4,
    label: { fr: "Contact", ar: "اتصل بنا" },
    href: "contact",
  },
];

export const sponsorsIcons = [
  { id: 0, icon: sponsor1 },
  { id: 1, icon: sponsor2 },
  { id: 2, icon: sponsor3 },
  { id: 3, icon: sponsor4 },
  { id: 4, icon: sponsor5 },
  { id: 5, icon: sponsor6 },
  { id: 6, icon: sponsor7 },
];

export const booksItems = [
  {
    id: 0,
    icon: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737380/book2_tjyxvv.jpg",
    img: false,
    content: {
      title: "book3",
      label: "book4",
    },
    classes: "bottom-4 left-4",
  },
  {
    id: 1,
    icon: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737380/book2_tjyxvv.jpg",
    img: true,
    content: { title: "", label: "" },
    classes: "",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737381/book3_gamgax.jpg",
    img: false,
    content: {
      title: "book5",
      label: "book6",
    },
    classes: "bottom-4 right-4",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737389/book1_ewaddj.jpg",
    img: true,
    content: { title: "", label: "" },
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737381/book3_gamgax.jpg",
    img: false,
    content: {
      title: "book7",
      label: "book8",
    },
    classes: "bottom-4 translate-x-[-50%] left-[50%]",
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737381/book3_gamgax.jpg",
    img: true,
    content: { title: "", label: "" },
    classes: "",
  },
];

export const packagesItems = [
  {
    id: 0,
    title: {
      fr: "Double",
      ar: "الثنائية",
    },
    price: {
      fr: "15000 Dhs",
      ar: "درهم 15000",
    },
  },
  {
    id: 1,
    title: {
      fr: "Triple",
      ar: "الثلاثية",
    },
    price: {
      fr: "14000 Dhs",
      ar: "درهم 14000",
    },
  },
  {
    id: 2,
    title: {
      fr: "Quadruple",
      ar: "الرباعية",
    },
    price: {
      fr: "13000 Dhs",
      ar: "درهم 13000",
    },
  },
  {
    id: 3,
    title: {
      fr: "Quintuple",
      ar: "الخماسية",
    },
    price: {
      fr: "12000 Dhs",
      ar: "درهم 12000",
    },
  },
];

export const galleryItems = [
  {
    id: 0,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737476/gallery1_vjbgbp.jpg",
    classes: "col-span-1",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737458/gallery5_kzshrp.jpg",
    classes: "col-span-2",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737380/book2_tjyxvv.jpg",
    classes: "col-span-1",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737454/gallery2_afvv78.jpg",
    classes: "col-span-2",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737470/gallery9_kkmg2m.jpg",
    classes: "col-span-1 row-span-3",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747747090/wallpaperflare.com_wallpaper_4_ds8kuf.jpg",
    classes: "col-span-4 row-span-3",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737463/gallery7_udc8sm.webp",
    classes: "col-span-1 row-span-3",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737467/gallery11_xhztse.jpg",
    classes: "col-span-2",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737381/book3_gamgax.jpg",
    classes: "col-span-2",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737472/gallery10_ealety.jpg",
    classes: "col-span-2",
  },
];

export const galleryItemsPhone = [
  {
    id: 0,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737454/gallery2_afvv78.jpg",
    classes: "col-span-1",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737476/gallery1_vjbgbp.jpg",
    classes: "col-span-2",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737456/gallery4_dxqp5y.jpg",
    classes: "row-span-2 col-span-3",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737463/gallery7_udc8sm.webp",
    classes: "col-span-2",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737472/gallery10_ealety.jpg",
    classes: "col-span-1",
  },
];

export const destinations = [
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737431/destination2_buwg55.jpg",
    place: { fr: "Istanbul", ar: "إسطنبول" },
    country: { fr: "Turquie", ar: "تركيا" },
    title: {
      ar: "عرض خاص من أسفار طيبة 8 أيام",
      fr: "Asfar tiba offre spéciale 8 jours",
    },
    price: { ar: "9000 درهم", fr: "9000 Dhs" },
    tag: { ar: "الأكثر مبيعًا", fr: "Meilleure vente" },
    available: true,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737433/destination3_niueng.jpg",
    place: { fr: "Paris", ar: "باريس" },
    country: { fr: "France", ar: "فرنسا" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737435/destination4_xp23zf.jpg",
    place: { fr: "Barcelona", ar: "برشلونة" },
    country: { fr: "Espagne", ar: "إسبانيا" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737437/destination5_acd1xf.jpg",
    place: { fr: "Roma", ar: "روما" },
    country: { fr: "Italie", ar: "إيطاليا" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737439/destination6_ujer6n.jpg",
    place: { fr: "Dubai", ar: "دبي" },
    country: { fr: "Émirats", ar: "الإمارات" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747737430/destination7_xi4bum.jpg",
    place: { fr: "London", ar: "لندن" },
    country: { fr: "Angleterre", ar: "إنجلترا" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747746425/wallpaperflare.com_wallpaper_3_zvhfwf.jpg",
    place: { fr: "Malaysia", ar: "ماليزيا" },
    country: { fr: "Malaysia", ar: "ماليزيا" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747746423/wallpaperflare.com_wallpaper_2_f3frjz.jpg",
    place: { fr: "Thailande", ar: "تايلاند" },
    country: { fr: "Thailande", ar: "تايلاند" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
  {
    img: "https://res.cloudinary.com/drsghr0p5/image/upload/v1747741964/destination9_fc6jlj.jpg",
    place: { fr: "Santorini", ar: "سانتوريني" },
    country: { fr: "Greece", ar: "اليونان" },
    title: {
      ar: "عرض خاص من أسفار طيبة ",
      fr: "Asfar tiba offre spéciale",
    },
    price: { ar: "----", fr: "----" },
    tag: { ar: "قريباً", fr: "à venir" },
    available: false,
  },
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

export const omraOffers = [
  { id: 0, img: offer1 },
  { id: 1, img: offer2 },
];

export const reviews = [
  {
    id: 0,
    icon: icon1,
    review: {
      ar: "خدمة رائعة وسرعة في الاستجابة. عروض العمرة من أسفار طيبة كانت مذهلة من حيث السعر والجودة. أوصي بها بشدة",
      fr: "Service impeccable et personnel très professionnel. Les offres Omra d'Asfar Tiba sont vraiment avantageuses. Je recommande vivement!",
    },
    name: "Nafie",
    rate: "5",
  },
  {
    id: 1,
    icon: icon2,
    review: {
      ar: "تجربتي مع أسفار طيبة كانت ممتازة. فريق عمل متعاون ومنظم بشكل احترافي. رحلة العمرة كانت مريحة جدًا",
      fr: "Expérience inoubliable avec Asfar Tiba. Organisation parfaite et hôtels proches des lieux saints. Merci pour tout!",
    },
    name: "Mustapha",
    rate: "4.8",
  },
  {
    id: 2,
    icon: icon3,
    review: {
      ar: "أفضل وكالة عمرة تعاملت معها. فريق عمل ودود ومتفاني، والفنادق كانت قريبة ومريحة للغاية.   ",
      fr: "C'était un plaisir de voyager avec Asfar Tiba. Organisation impeccable et excellent rapport qualité-prix.",
    },
    name: "Fatima",
    rate: "4.9",
  },
  {
    id: 3,
    icon: icon4,
    review: {
      ar: "شركة ممتازة! حجوزات العمرة كانت سهلة، والفنادق كانت قريبة من الحرم. شكرًا أسفار طيبة",
      fr: "Excellente agence! Tout était bien organisé, du départ jusqu'au retour. Merci à toute l'équipe d'Asfar Tiba.",
    },
    name: "Hajar",
    rate: "4.7",
  },
  {
    id: 4,
    icon: icon5,
    review: {
      ar: "أسفار طيبة هي الخيار الأفضل للعمرة. مرونة في التعامل، وخدمة ممتازة من البداية إلى النهاية",
      fr: "Asfar Tiba est la meilleure agence pour réserver une Omra. Un service de qualité et des offres adaptées à tous les budgets.",
    },
    name: "Mohammed",
    rate: "4.8",
  },
  {
    id: 5,
    icon: icon6,
    review: {
      ar: "كانت تجربة رائعة مع أسفار طيبة. رحلة منظمة بشكل ممتاز وخدمات تفوق التوقعات. شكرًا جزيلًا لكم!",
      fr: "Une agence exceptionnelle! Le voyage était bien organisé et les hôtels étaient très confortables. Merci Asfar Tiba.",
    },
    name: "Said",
    rate: "4.9",
  },
];

export const cities = [
  { ar: "تطوان", fr: "Tetouan" },
  { ar: "طنجة", fr: "Tanger" },
  { ar: "بن جرير", fr: "Ben Guerir" },
  { ar: "المحدية", fr: "Mohammedia" },
  { ar: "الدار البيضاء", fr: "Casablanca" },
  { ar: "العيون", fr: "Al Laayoune" },
  { ar: "تمارة", fr: "Temara" },
];

export const footerLinks = [
  {
    title: { fr: "Destinations", ar: "الوجهات" },
    fr: [
      "Saudi arabia",
      "Turquie",
      "France",
      "Espagne",
      "Italie",
      "Émirats",
      "Angleterre",
      "États-Unis",

      "Indonésie",
    ],
    ar: [
      "السعودية",
      "تركيا",
      "فرنسا",
      "إسبانيا",
      "إيطاليا",
      "الإمارات",
      "إنجلترا",
      "الولايات المتحدة",

      "إندونيسيا",
    ],
    href: [],
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
    href: [],
    links: false,
  },
  {
    title: { fr: "Liens", ar: "روابط" },
    href: ["#", "#voyages", "#services", "#packages", "#contact"],
    fr: ["Page d'accueil", "Voyages", "Services", "Hajj & Omra", "Contact"],
    ar: ["الصفحة الرئيسية", "الرحلات", "الخدمات", "الحج والعمرة", "إتصل بنا"],
    links: true,
  },
  {
    title: { fr: "Contact", ar: "إتصل بنا" },
    fr: [
      "Bd Med V Jamaa Erradi N°1, Ben Guerir",
      "À côté de Kasr El Amin HAY MHANECH, Tétouan d'accueil",
      "Rue Baalabak, Tanger",
      "ètage RDC, lots alfadl, 8, Casablanca",
      "Hajj & Rue Boustane Nador",
      "0661291631",
      "07210440171",
    ],
    ar: [
      "Bd Med V Jamaa Erradi N°1, Ben Guerir",
      "À côté de Kasr El Amin HAY MHANECH, Tétouan d'accueil",
      "Rue Baalabak, Tanger",
      "ètage RDC, lots alfadl, 8, Casablanca",
      "Hajj & Rue Boustane Nador",
      "0661291631",
      "07210440171",
    ],
    href: [],
    links: false,
  },
];
