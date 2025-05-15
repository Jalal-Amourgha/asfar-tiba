import { destinations, insideDestinations } from "../../constants";
import { translations } from "../../constants/translation";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DestinationCard from "../cards/DestinationCard";
import { inside1 } from "../../assets";
import SectionTitle from "../cards/SectionTitle";

export const RecommendedDestinations = () => {
  const { language }: { language: LanguageProps } = useAppContext();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="pt-100 container" id="voyages">
      <SectionTitle title={translations[language].destinationTitle} />

      <Slider {...settings}>
        {destinations.map((destination, index: number) => (
          <DestinationCard
            destination={destination}
            index={index}
            key={index}
          />
        ))}
      </Slider>
    </section>
  );
};

export const InsideDestinations = () => {
  const { language }: { language: LanguageProps } = useAppContext();
  return (
    <section className="mt-100 container">
      <SectionTitle title={translations[language].destinationTitle2} />

      <div className="grid grid-cols-3 md:grid-cols-4 grid-flow-row md:grid-flow-row gap-2 md:gap-5 h-[600px] mt-10">
        <div
          className={`row-span-1 col-span-3 md:row-span-2 md:col-span-1 relative h-full w-full rounded-lg overflow-hidden`}
        >
          <div className="relative h-full w-full">
            <img
              src={inside1}
              className="absolute top-0 left-0 w-full h-full object-cover duration-500 hover:scale-150 cursor-pointer"
              alt="merzouga"
            />
          </div>
          <div className="absolute bottom-1 left-1 py-1 px-4 rounded-lg bg-white text-gray-4 font-bold">
            {language === "fr" ? "Merzouga" : "مرزوكة"}
          </div>
        </div>
        {insideDestinations.map((item, index) => (
          <div
            className={`${item.classes} relative h-full w-full rounded-lg overflow-hidden`}
            key={index}
          >
            <div className="relative h-full w-full">
              <img
                src={item.img}
                className="absolute top-0 left-0 w-full h-full object-cover duration-500 hover:scale-150 cursor-pointer"
                alt={item.city["fr"]}
              />
            </div>
            <div className="absolute bottom-1 left-1 py-1 px-4 rounded-lg bg-white text-primary font-bold">
              {item.city[language]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
