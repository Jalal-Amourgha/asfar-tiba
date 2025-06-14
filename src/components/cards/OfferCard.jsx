import Image from "next/image";

const OfferCard = ({ offer }) => {
  return (
    <div className="p-2 lg:p-5 duration-500">
      <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative">
        <div className="offer-overflow"></div>
        <Image
          src={offer.img}
          className={`max-w-full relative rounded-xl duration-700`}
          alt=""
        />
      </div>
    </div>
  );
};

export default OfferCard;
