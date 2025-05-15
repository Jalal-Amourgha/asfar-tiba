import { useState } from "react";
import { questions } from "../../constants";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { LanguageProps } from "../../types";
import { useAppContext } from "../../context";
import SectionTitle from "../cards/SectionTitle";
import { translations } from "../../constants/translation";

const Questions = () => {
  const [questionOpened, setQuestionOpened] = useState([0]);
  const { language }: { language: LanguageProps } = useAppContext();

  const handleDisplayAnswer = (id: number) => {
    if (questionOpened.includes(id)) {
      return setQuestionOpened(
        questionOpened.filter((question) => question !== id)
      );
    } else {
      return setQuestionOpened([...questionOpened, id]);
    }
  };
  return (
    <div className="max-w-[900px] mx-auto px-2 mt-100 flex flex-col gap-5">
      <SectionTitle title={translations[language].questionsTitle} />
      {questions.map((question) => (
        <div
          className={`p-2 md:px-4 md:py-6 border-1 border-primary rounded-lg  ${
            questionOpened.includes(question.id)
              ? "bg-primary text-white"
              : "text-primary"
          } duration-500 cursor-pointer`}
          onClick={() => handleDisplayAnswer(question.id)}
          key={question.id}
        >
          <div className="flex justify-between items-center ">
            <h1 className="text-xl font-semibold">
              {question[language].question}
            </h1>
            <div
              className={`text-2xl ${
                questionOpened.includes(question.id)
                  ? "text-white"
                  : "text-primary"
              } `}
            >
              {questionOpened.includes(question.id) ? (
                <TiArrowSortedUp />
              ) : (
                <TiArrowSortedDown />
              )}
            </div>
          </div>
          <p
            className={`text-lg font-medium duration-500 ${
              questionOpened.includes(question.id) ? "block mt-5" : "hidden"
            }`}
          >
            {question[language].answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
