import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { omraOffers } from "@/constants";
import OfferCard from "../cards/OfferCard";
import Title from "../shared/Title";
import { useTranslation } from "react-i18next";

const OmraOffers = () => {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoPlay: true,
    centerPadding: "20px",
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
    <section className="container" id="hajj&omra">
      <Title title={t("forfait1")} desc={t("forfait2")} />

      <div className="slider-container py-10 relative">
        <Slider {...settings}>
          {omraOffers.map((offer) => (
            <OfferCard offer={offer} key={offer.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OmraOffers;
