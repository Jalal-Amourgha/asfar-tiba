import { logo } from "../../assets";
import { footerLinks, navLinks } from "../../constants";
import { useAppContext } from "../../context";
import { LanguageProps } from "../../types";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { translations } from "../../constants/translation";

const Footer = () => {
  const { language }: { language: LanguageProps } = useAppContext();
  const socials = [
    <FaFacebookF />,
    <FaInstagram />,
    <FaWhatsapp />,
    <FaXTwitter />,
  ];

  const year = new Date();

  return (
    <footer className="bg-primary py-20 mt-100">
      <div className="container grid gap-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} className="max-w-14" alt="logo" />
            <h1 className="text-2xl font-semibold text-white">
              {language === "fr" ? "Asfar Tiba" : "أسفار طيبة"}
            </h1>
          </div>
          <p className="text-white/80">
            {language === "fr"
              ? "Votre meilleure agence pour voyager."
              : "أفضل وكالة للسفر"}
          </p>
        </div>
        {footerLinks.map((item: any, index) => (
          <div key={index}>
            <h1 className="text-xl font-semibold text-white">
              {item.title[language]}
            </h1>
            <ul className="list-none flex flex-col gap-1 mt-3 text-white">
              {item[language].map((e: any, id: number) => (
                <li key={id}>{e}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h1 className="text-xl font-semibold text-white">
            {language === "fr" ? "Liens Rapides" : "روابط سريعة"}
          </h1>
          <ul className="list-none flex flex-col gap-1 mt-3 text-white">
            {navLinks.map((e: any, id: number) => (
              <li key={id}>
                <a className="cursor-pointer" href={e.href}>
                  {e.label[language]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">
            {translations[language].socials}
          </h1>
          <div className="flex gap-2 mt-3">
            {socials.map((icon, index) => (
              <div
                className="h-10 w-10 bg-slate-600/50 rounded-full flex items-center justify-center cursor-pointer text-xl text-white"
                key={index}
              >
                {icon}
              </div>
            ))}
          </div>
          <div className="flex flex-col text-white/90 gap-2 text-lg mt-3">
            <p>0661291631</p>
            <p>07210440171</p>
            <p>Rue Baalabak, Tanger</p>
            <p>Rue Boustane Nador</p>
            <p>À côté de Kasr El Amin HAY MHANECH, Tétouan</p>
            <p>Bd Med V Jamaa Erradi N°1, Ben Guerir</p>
            <p>ètage RDC, lots alfadl, 8, Casablanca </p>
          </div>
        </div>
      </div>
      <hr className="max-w-[80%] bg-white mx-auto mt-20" />
      {language === "fr" ? (
        <p className="text-white/80 mt-3 text-center">
          Copyright &copy; {year.getFullYear()}. Tous les droits réservés.
        </p>
      ) : (
        <p className="text-white/80 mt-3 text-center">
          حقوق النشر &copy; {year.getFullYear()} . جميع الحقوق محفوظة.
        </p>
      )}
    </footer>
  );
};

export default Footer;
