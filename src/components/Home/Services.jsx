"use client";
import { MdHealthAndSafety } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { FaPassport } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { TbHours24 } from "react-icons/tb";
import { FaCarRear } from "react-icons/fa6";
import Title from "../shared/Title";
import { useTranslation } from "react-i18next";

const servicesItems = [
  {
    id: 0,
    icon: <MdHealthAndSafety />,
    title: { fr: "Assurance voyage", ar: "تأمين السفر" },
    description: {
      fr: "Des plans d'assurance voyage complets pour votre tranquillité d'esprit.",
      ar: "خطط تأمين سفر شاملة لراحة بالك.",
    },
  },
  {
    id: 1,
    icon: <FaTicket />,
    title: { fr: "Réservation de vol", ar: "حجز الطيران" },
    description: {
      fr: "Réservations de vols faciles et sans tracas à des prix compétitifs.",
      ar: "حجوزات طيران سهلة وخالية من المتاعب وبأسعار تنافسية.",
    },
  },
  {
    id: 2,
    icon: <FaPassport />,
    title: { fr: "Assistance pour les visas", ar: "مساعدة التأشيرة" },
    description: {
      fr: "Assistance experte pour les demandes de visa et les exigences administratives.",
      ar: "مساعدة احترافية في تقديم طلبات التأشيرة واستيفاء المتطلبات اللازمة.",
    },
  },
  {
    id: 3,
    icon: <FaHotel />,
    title: { fr: "Réservations d'hôtel", ar: "حجوزات الفنادق" },
    description: {
      fr: "Réservations d'hôtels confortables et abordables dans le monde entier.",
      ar: "حجوزات فندقية مريحة وبأسعار مناسبة في جميع أنحاء العالم.",
    },
  },
  {
    id: 4,
    icon: <FaCarRear />,
    title: { fr: "Transport", ar: "التنقل" },
    description: {
      fr: "Solutions de transport sûres et confortables pendant tout votre séjour.",
      ar: "خدمات تنقل آمنة ومريحة طوال فترة إقامتك.",
    },
  },
  {
    id: 5,
    icon: <TbHours24 />,
    title: { fr: "Assistance 24h/24", ar: "دعم 24 ساعة" },
    description: {
      fr: "Service client disponible 24h/24 pour répondre à toutes vos demandes de voyage.",
      ar: "خدمة عملاء متوفرة على مدار الساعة للإجابة عن جميع استفساراتك المتعلقة بالسفر.",
    },
  },
];

const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="services" className="py-24 mt-24 bg-bg-primary">
      <Title title={t("service1")} desc={<p>{t("service2")}</p>} />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">
        {servicesItems.map((service, index) => (
          <div
            className="text-center bg-white shadow2 p-10 mx-2 rounded-2xl maw-h-[300px]"
            key={index}
          >
            <div className="h-20 w-20 mx-auto bg-[#C1FFFA]   flex justify-center items-center rounded-lg text-4xl text-primary cursor-pointer">
              {service.icon}
            </div>
            <h1 className="text-xl text-primary font-semibold mb-3">
              {service.title[i18n.language]}
            </h1>
            <p className="text-gray-4 font-norma">
              {service.description[i18n.language]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
