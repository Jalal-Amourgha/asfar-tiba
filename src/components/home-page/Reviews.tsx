import { FaStar, FaStarHalf } from "react-icons/fa6";
import { reviews } from "../../constants";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
import { translations } from "../../constants/translation";
import SectionTitle from "../cards/SectionTitle";

const Reviews = () => {
  const { language }: { language: LanguageProps } = useAppContext();

  const handleRaiting = (n: any) => {
    let arr = [];
    let stars = n;

    // returning number into interger Number
    if (!Number.isInteger(n)) {
      if (n === Math.fround(n)) {
        stars = n;
      } else if (+(n + "").split(".")[1] > 5) {
        stars = +(n + "").split(".")[0] + 0.5;
      } else {
        stars = (n + "").split(".")[0];
      }
    }

    // creating the stars array
    for (let i = 1; i <= 5; i++) {
      if (stars >= 1) {
        arr.push(<FaStar className={`text-[#ECE852]`} />);
      } else if (stars === 0.5) {
        arr.push(<FaStarHalf className={`text-[#ECE852]`} />);
        stars = stars - 0.5;
      } else if (stars <= 0) {
        arr.push(<FaStar className="text-gray-500" />);
      }

      stars = stars - 1;
    }

    if (language === "fr") {
      return arr.map((icon, index) => <div key={index}>{icon}</div>);
    }

    return arr.reverse().map((icon, index) => <div key={index}>{icon}</div>);
  };

  return (
    <section className="container mt-100">
      <SectionTitle title={translations[language].reviewTitle} />

      <div className="flex flex-wrap flex-row justify-center gap-4">
        {reviews.map((review) => (
          <div
            className="flex justify-between flex-col p-3 rounded-lg shadow-md max-w-[350px]"
            key={review.id}
          >
            <p className="text-lg mb-3">{review.review[language]}</p>
            <div className="flex justify-end w-full">
              <div className="flex items-center gap-2">
                <div>
                  <h1 className="text-end font-semibold text-lg text-primary">
                    {review.name}
                  </h1>
                  <div className="flex flex-row items-center text-text gap-1">
                    {handleRaiting(review.rate)} ({review.rate})
                  </div>
                </div>
                <img
                  src={review.icon}
                  className="max-w-14 rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
