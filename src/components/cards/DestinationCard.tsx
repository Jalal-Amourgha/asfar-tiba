import { FaStar, FaLocationDot } from "react-icons/fa6";
import { LanguageProps } from "../../types";
import { useAppContext } from "../../context";

const DestinationCard = ({
  destination,
  index,
}: {
  destination: any;
  index: number;
}) => {
  const { language } = useAppContext();

  return (
    <div className="b p-2 rounded-2xl shadow bg-white me-2" key={index}>
      <div className="relative rounded-2xl  overflow-hidden">
        <img
          src={destination.img}
          className="max-w-full duration-500 hover:scale-150 hover:rotate-[10deg] cursor-pointer"
          alt={destination.place[language as LanguageProps]}
        />
        <div className="absolute top-1 right-1 px-1 bg-white rounded-full flex items-center">
          <FaStar className="text-[#FDCC0D]" />
          <span className="text-gray-4 font-semibold">{destination.rate}</span>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          language === "fr" ? "items-start" : "items-end"
        }`}
      >
        <h1 className="text-2xl text-primary font-semibold line-clamp-1 mt-3 mb-1">
          {destination.place[language as LanguageProps]}
        </h1>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-[#FD787B]" />

          <h4 className="text-black/75">
            {destination.country[language as LanguageProps]}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
