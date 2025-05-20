"use client";

import { useTranslation } from "react-i18next";
import Title from "../shared/Title";
import {
  FaHotel,
  FaPassport,
  FaPlaneDeparture,
  FaTicket,
} from "react-icons/fa6";
import { destinations } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 0,
    icon: <FaPlaneDeparture />,
  },
  { id: 1, icon: <FaTicket /> },
  { id: 2, icon: <FaHotel /> },
  {
    id: 3,
    icon: <FaPassport />,
  },
];

const Destinations = () => {
  const { t, i18n } = useTranslation();
  const [itemsToShow, setItemsToShow] = useState(3);
  return (
    <section id="voyages" className="container my-20 ">
      <Title title={t("destination1")} desc={t("destination2")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 gap-6 mt-10">
        {destinations.map((destination, index) =>
          index < itemsToShow ? (
            <div className="rounded-xl shadow3 overflow-hidden" key={index}>
              <div className="p-3">
                <div className="relative rounded-xl overflow-hidden w-full h-[250px]">
                  <Image
                    src={destination.img}
                    alt="asfar tiba"
                    fill
                    className="w-full h-full objet-fill object-cover bg-center hover:scale-125 hover:rotate-3 duration-500"
                  />
                </div>
              </div>

              <div
                className={`flex items-center justify-between ${
                  i18n.language == "fr" ? "ml-3" : "me-3"
                } mt-3 mb-4`}
              >
                <h1 className="text-2xl font-bold text-primary">
                  {destination.country[i18n.language]}
                </h1>
                <span
                  className={`text-lg text-primary font-semibold bg-bg-primary py-2 px-4 ${
                    i18n.language == "fr" ? "rounded-l-full" : "rounded-e-full"
                  } shadow2`}
                >
                  {destination.tag[i18n.language]}
                </span>
              </div>
              <div className="p-3">
                <h1 className="text-xl font-bold text-text">
                  {destination.title[i18n.language]}
                </h1>

                <h1 className="text-2xl font-bold text-text mt-3">
                  {destination.price[i18n.language]}
                </h1>

                <div className="flex items-center gap-3 my-5">
                  {items.map((item) => (
                    <div
                      className="h-10 w-10 rounded-xl bg-[#C1FFFA] text-primary flex items-center justify-center"
                      key={item.id}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      {itemsToShow === 3 ? (
        <div className="flex justify-center w-full mt-10">
          <button
            className="py-3 px-6 bg-primary text-white text-xl font-semibold cursor-pointer rounded-xl"
            onClick={() => setItemsToShow(99)}
          >
            {i18n.language == "fr" ? "Afficher plus" : "إظهار المزيد"}
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Destinations;
