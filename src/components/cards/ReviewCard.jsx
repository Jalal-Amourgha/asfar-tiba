import { people1 } from "@/assets";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ review, language }) => {
  return (
    <div className="bg-primary text-white py-10 px-5 rounded-2xl h-[250px] mx-2 my-10">
      <div className="flex items-center justify-center -mt-20 w-full ">
        <Image
          src={people1}
          alt="asfar tiba"
          className="max-w-[90px] object-fill bg-center bg-cover rounded-full border-4 border-white overflow-hidden"
        />
      </div>
      <p
        className={`mt-8 font-medium text-xl italic ${
          language == "ar" ? "text-end" : ""
        }`}
      >
        {review.review[language]}
      </p>
    </div>
  );
};

export default ReviewCard;
