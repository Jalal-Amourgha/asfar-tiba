import { translations } from "../../constants/translation";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
import { Omra_Offers } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferCard from "../cards/OfferCard";
import SectionTitle from "../cards/SectionTitle";

const OmraOffer = () => {
  const { language }: { language: LanguageProps } = useAppContext();

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
    <section className="container py-100" id="hajj&omra">
      <SectionTitle title={translations[language].omraOffer} />

      <div className="slider-container py-10 relative">
        <Slider {...settings}>
          {Omra_Offers.map((offer) => (
            <OfferCard offer={offer} key={offer.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OmraOffer;
