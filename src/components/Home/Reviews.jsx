"use client";
import React from "react";
import Title from "../shared/Title";
import { reviews } from "@/constants";
import Slider from "react-slick";
import ReviewCard from "../cards/ReviewCard";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t, i18n } = useTranslation();
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
    <section id="#reviews" className="py-24 bg-bg-primary">
      <Title title={t("review1")} desc={t("review2")} />
      <div className="container slider-container py-10 relative">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard review={review} language={i18n.language} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
