"use client";
import { useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { questions } from "@/constants";
import Title from "../shared/Title";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const [questionOpened, setQuestionOpened] = useState([0]);
  const { t, i18n } = useTranslation();

  const handleDisplayAnswer = (id) => {
    if (questionOpened.includes(id)) {
      return setQuestionOpened(
        questionOpened.filter((question) => question !== id)
      );
    } else {
      return setQuestionOpened([...questionOpened, id]);
    }
  };
  return (
    <div className="max-w-[900px] mx-auto px-2 mt-16 flex flex-col gap-5">
      <Title title={t("questionsTitle")} />
      {questions.map((question) => (
        <div
          className={`p-2 md:px-4 md:py-6 border-1 border-primary rounded-lg ${
            questionOpened.includes(question.id)
              ? "bg-primary text-white"
              : "text-primary"
          } cursor-pointer`}
          onClick={() => handleDisplayAnswer(question.id)}
          key={question.id}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              {question[i18n.language]?.question}
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
            className={`text-lg font-medium transition-all duration-700 overflow-hidden mt-5 ${
              questionOpened.includes(question.id)
                ? "max-h-96 opacity-1000"
                : "max-h-0 opacity-0"
            }`}
          >
            {question[i18n.language]?.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
