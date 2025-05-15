import { translations } from "../../constants/translation";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import SectionTitle from "../cards/SectionTitle";

const Contact = () => {
  const { language }: { language: LanguageProps } = useAppContext();
  return (
    <section id="contact" className="container pt-100 contact-box">
      <SectionTitle title={translations[language].contactTitle} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div>
          <h1 className="text-2xl font-semibold mb-3">
            {language === "fr" ? "Entrer en contact" : "تواصل معنا"}
          </h1>
          <p className="md:max-w-[75%]">
            {translations[language]?.contactDescription}
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl">
                <SlLocationPin />
              </div>
              <div className="flex flex-col">
                <p>À côté de Kasr El Amin HAY MHANECH, Tétouan</p>
                <p>Rue Baalabak, Tanger </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl">
                <FiPhone />
              </div>
              <div className="flex flex-col">
                <p>0661291631</p>
                <p>0721040171</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl">
                <IoMailOutline />
              </div>
              <div className="flex flex-col">
                <p>asfartiba@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span>{language === "fr" ? "Now" : "إسم"}</span>
            <input
              type="text"
              placeholder={language === "fr" ? "Entrez votre nom" : "أدخل اسمك"}
            />
          </div>
          <div className="flex flex-col">
            <span>{language === "fr" ? "Email" : "بريد إلكتروني"}</span>
            <input
              type="text"
              placeholder={
                language === "fr"
                  ? "Entrez votre email"
                  : "أدخل بريدك الإلكتروني"
              }
            />
          </div>
          <div className="flex flex-col">
            <span>
              {language === "fr" ? "Numéro de Téléphone" : "رقم التليفون"}
            </span>
            <input
              type="text"
              placeholder={
                language === "fr"
                  ? "Entrez votre numéro de téléphone"
                  : "أدخل رقم هاتفك"
              }
            />
          </div>
          <div className="flex flex-col">
            <span>{language === "fr" ? "Message" : "رسالة"}</span>
            <textarea
              rows={6}
              placeholder={
                language === "fr" ? "Entrez votre message" : "أدخل رسالتك"
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white text-lg font-semibold rounded-full cursor-pointer mt-3 w-fit py-2 px-4"
          >
            {language === "fr" ? "Envoyer" : "أرسل"}
          </button>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto px-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3238.322934345188!2d-5.799840088913626!3d35.74286662245302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d35.7429354!2d-5.7971661999999995!4m5!1s0xd0b810073535f8b%3A0xcc93710ddf91071e!2sTangier%2090060!3m2!1d35.742937399999995!2d-5.7971781!5e0!3m2!1sen!2sma!4v1734625568298!5m2!1sen!2sma"
          width="600"
          height="450"
          className="w-full rounded-xl shadow-md shadow-black"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
