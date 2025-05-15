import { translations } from "../../constants/translation";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
const Hero = () => {
  const { language } = useAppContext();
  return (
    <section
      id="#"
      className="container h-[80vh] w-full bg-hero-bg bg-cover bg-no-repeat bg-top object-cover relative z-0 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black/30 flex justify-center items-center mt-6 px-2"
    >
      <div className="relative z-[5] text-center">
        <h1 className="text-5xl text-white font-bold mb-6">
          {translations[language as LanguageProps]?.title}
        </h1>
        <p className="text-white">
          {translations[language as LanguageProps].description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
