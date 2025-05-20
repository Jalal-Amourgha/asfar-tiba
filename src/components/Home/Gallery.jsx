"use client";

import { galleryItems, galleryItemsPhone } from "@/constants";
import Image from "next/image";
import React from "react";
import Title from "../shared/Title";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <section id="#gallery" className="container my-24 z-10">
      <Title title={t("gallery1")} desc={t("gallery2")} />

      <div className="hidden md:grid grid-cols-6 gap-3 h-[1000px] mt-10">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden h-full relative ${item.classes}`}
          >
            <Image
              src={item.img}
              className="w-full h-full objet-fill object-cover bg-center hover:scale-150 hover:rotate-6 duration-500"
              fill
              alt="asfar tiba"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 h-[600px] md:hidden mt-10">
        {galleryItemsPhone.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden relative ${item.classes}`}
          >
            <Image
              src={item.img}
              className="w-full h-full objet-fill object-cover hover:scale-150 hover:rotate-6 duration-500 bg-center"
              fill
              alt="asfar tiba"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
