"use client";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="#"
      className="container h-[85vh] w-full bg-img bg-cover bg-no-repeat bg-top object-cover relative z-0 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black/40 flex justify-center items-center px-2"
    >
      <div className="flex flex-col text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-5">{t("title")}</h1>
        <p className="text-xl">{t("description")}</p>
      </div>
    </div>
  );
};

export default Hero;
