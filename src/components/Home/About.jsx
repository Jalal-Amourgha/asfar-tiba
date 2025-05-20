"use client";
import { useTranslation } from "react-i18next";
import { aboutImg } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { FaPassport } from "react-icons/fa";

const items = [
  {
    id: 0,
    icon: <FaPlaneDeparture />,
    label: "about2",
  },
  { id: 1, icon: <FaTicket />, label: "about3" },
  { id: 2, icon: <FaHotel />, label: "about4" },
  {
    id: 3,
    icon: <FaPassport />,
    label: "about5",
  },
];

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="mt-24 py-24 bg-bg-primary text-text">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-30">
        <div
          className={`${
            i18n.language == "fr" ? "order-1" : "order-2"
          } hidden md:block`}
        >
          <div className="max-w-full lg:max-w-[400px] bg-[#2AD3C4] rounded-2xl">
            <Image
              src={aboutImg}
              alt="about"
              className="max-w-[300px] mx-auto py-10"
            />
          </div>
        </div>
        <div className={`${i18n.language == "fr" ? "order-2" : "order-1"}`}>
          <h1 className="text-4xl font-bold mb-5 leading-[120%]">
            {t("about1")}
          </h1>
          <p className="">{t("about6")}</p>
          <div className="grid gap-3 mt-5 mb-10">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-[#C1FFFA] text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <p>{t(item.label)}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary">
            {t("contactTitle")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
