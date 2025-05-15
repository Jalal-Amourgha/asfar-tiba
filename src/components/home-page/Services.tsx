import { Ri24HoursLine } from "react-icons/ri";
import { FaHotel, FaPassport, FaTicket } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { MdCurrencyExchange } from "react-icons/md";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
import { translations } from "../../constants/translation";
import SectionTitle from "../cards/SectionTitle";

const services = [
  {
    icon: <FaTicket />,
    name: { fr: "Réservation de vol", ar: "حجز الطيران" },
    description: {
      fr: "Réservations de vols faciles et sans tracas à des prix compétitifs.",
      ar: "حجز رحلات طيران سهلة وخالية من المتاعب وبأسعار تنافسية.",
    },
  },
  {
    icon: <AiOutlineSafety />,
    name: { fr: "Assurance voyage", ar: "تأمين السفر" },
    description: {
      fr: "Des plans d'assurance voyage complets pour votre tranquillité d'esprit.",
      ar: "خطط تأمين سفر شاملة لراحة بالك.",
    },
  },
  {
    icon: <FaPassport />,
    name: {
      fr: "Assistance pour les visas",
      ar: "مساعدة التأشيرة",
    },
    description: {
      fr: "Assistance d'experts pour les demandes et exigences de visa.",
      ar: "مساعدة الخبراء في طلبات التأشيرة ومتطلباتها.",
    },
  },
  {
    icon: <MdCurrencyExchange />,
    name: { fr: "Change de devises", ar: "صرف العملات" },
    description: {
      fr: "Services de change de devises fiables et efficaces.",
      ar: "خدمات صرف العملات موثوقة وفعالة.",
    },
  },
  {
    icon: <FaHotel />,
    name: { fr: "Réservations d'hôtel", ar: "حجوزات الفنادق" },
    description: {
      fr: "Réservations d'hôtels confortables et abordables dans le monde entier.",
      ar: "حجوزات فندقية مريحة وبأسعار معقولة في جميع أنحاء العالم.",
    },
  },
  {
    icon: <Ri24HoursLine />,
    name: { fr: "Assistance 24h/24", ar: "دعم 24 ساعة" },
    description: {
      fr: "Assistance client 24h/24 pour toutes vos demandes de voyage.",
      ar: "دعم العملاء على مدار الساعة للرد على جميع استفسارات السفر الخاصة بك.",
    },
  },
];

const Services = () => {
  const { language }: { language: LanguageProps } = useAppContext();

  return (
    <section id="services" className="py-100 container">
      <SectionTitle title={translations[language].servicesTitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {services.map((service, index) => (
          <div className="text-center" key={index}>
            <div className="h-20 w-20 mx-auto bg-[#d6e6f8] flex justify-center items-center rounded-lg text-4xl text-primary cursor-pointer">
              {service.icon}
            </div>
            <h1 className="text-xl text-primary font-semibold mt-5 mb-3">
              {service.name[language]}
            </h1>
            <p className="text-gray-4 font-norma">
              {service.description[language]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
