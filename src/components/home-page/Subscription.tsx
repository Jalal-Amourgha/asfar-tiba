import { LanguageProps } from "../../types";
import { useAppContext } from "../../context";

const Subscription = () => {
  const { language }: { language: LanguageProps } = useAppContext();
  return (
    <div className="bg-primary/95 py-80 mt-100">
      <div className="container flex flex-col justify-center">
        <h1 className="text-3xl font-semibold text-white text-center mb-10">
          {language === "fr"
            ? " Abonnez-vous pour recevoir nos dernières offres."
            : "إشترك للحصول على أحدث عروضنا"}
        </h1>
        <div className="relative max-w-[500px] w-full overflow-hidden mx-auto">
          <input
            type="text"
            className="w-full p-3 rounded-full text-lg outline-none"
            placeholder={`${
              language === "fr" ? "Entrez votre email" : "أدخل بريدك الإلكتروني"
            }`}
          />
          <button
            className={`absolute ${
              language === "fr" ? "right-0" : "left-0"
            } top-0 py-3 px-5 text-lg font-bold bg-yellow-600 text-white rounded-full`}
          >
            {language === "fr" ? "S'abonner" : "إشترك"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
