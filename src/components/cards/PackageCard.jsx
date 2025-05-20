import { BsPatchCheck } from "react-icons/bs";

const includes = [
  {
    fr: "Du 12 juillet au 26 juillet",
    ar: "من 12 يوليوز إلى 26 يوليوز",
  },
  {
    fr: "Billet d'avion aller-retour",
    ar: "تذكرة الطيران ذهاباً وإياباً",
  },
  {
    fr: "Visa",
    ar: "التأشيرة",
  },
  {
    fr: "Transfert depuis et vers l'aéroport",
    ar: "النقل من وإلى المطار",
  },
  {
    fr: "Hébergement dans les hôtels mentionnés ci-dessus",
    ar: "الإقامة في الفنادق المذكورة أعلاه",
  },
  {
    fr: "Encadrement religieux",
    ar: "التأطير الديني",
  },
  {
    fr: "Visites à Médine et à La Mecque",
    ar: "المزارات في المدينة ومكة",
  },
];

const PackageCard = ({ item, language }) => {
  return (
    <div
      className={`h-full py-10 px-3 m-5 rounded-3xl bg-bg-primary text-text mt-10 shadow2 ${
        language == "ar" ? "text-end" : ""
      }`}
    >
      <h1 className="text-3xl font-semibold">{item.title[language]}</h1>
      <h1 className="text-4xl font-bold mt-5 mb-7">{item.price[language]}</h1>
      {/* <div className="w-full"> */}
      <a
        href="#contact"
        className="w-full block text-center bg-primary  text-white text-xl font-medium rounded-full py-2"
      >
        Buy Now
      </a>
      {/* </div> */}
      <div className="flex flex-col gap-4 text-text mt-5">
        {includes.map((e, i) => (
          <div
            className={`flex flex-row items-center ${
              language == "ar" ? "justify-end" : ""
            } gap-4`}
            key={i}
          >
            {language == "fr" ? <BsPatchCheck size="24" /> : ""}
            <p className="w-fit">{e[language]}</p>
            {language == "ar" ? <BsPatchCheck size="24" /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
