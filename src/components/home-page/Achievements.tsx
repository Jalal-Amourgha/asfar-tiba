import SectionTitle from "../cards/SectionTitle";
import { LanguageProps } from "../../types";
import { useAppContext } from "../../context";
import { translations } from "../../constants/translation";
import { achievements } from "../../constants";
const Achievements = () => {
  const { language }: { language: LanguageProps } = useAppContext();

  return (
    <section className="container mt-100">
      <SectionTitle title={translations[language].achievementTitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((achievement, index) => (
          <div className="flex flex-col  text-center p-5" key={index}>
            <div className="h-20 w-20 mx-auto bg-[#d6e6f8] flex justify-center items-center rounded-full text-4xl text-primary">
              <img src={achievement.icon} className="max-w-[70%]" alt="icon" />
            </div>
            <h1 className="text-xl text-primary font-semibold mt-5 mb-3">
              {achievement[language].title}
            </h1>

            <p className="text-gray-4 font-norma">
              {achievement[language].label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
