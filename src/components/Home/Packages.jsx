"use client";
import React from "react";
import Title from "../shared/Title";
import { packagesItems } from "@/constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageCard from "../cards/PackageCard";
import { useTranslation } from "react-i18next";

const Packages = () => {
  const { i18n } = useTranslation();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoPlay: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 700,
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="#packages" className="container mt-26">
      <Title
        title="Choose your Package"
        desc="Embark on a Spirtual Journey: Your Trusted Hajj Partner, Comprehensive Hajj Packages Tailored to Your Needs. Premium accoummondation, individual transportation"
      />

      <div className="slider-container py-10 relative">
        <Slider {...settings}>
          {packagesItems.map((item, index) => (
            <PackageCard item={item} language={i18n.language} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Packages;
