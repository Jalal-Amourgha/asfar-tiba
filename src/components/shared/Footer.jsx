"use client";
import { logo } from "@/assets";
import { footerLinks } from "@/constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const socials = [<FaFacebookF />, <FaInstagram />, <FaWhatsapp />];

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-primary text-white py-24 mt-24">
      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-5">
        <div className="col-span-2">
          <div className="bg-white rounded-2xl max-w-full lg:max-w-[80%] mb-4">
            <Image src={logo} alt="asfar tiba" className="max-w-[200px]" />
          </div>
          <p>Comfortable and Quiet Worship, Our Service No. 1 in Indonesia</p>
        </div>
        {footerLinks.map((link, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">
              {link.title[i18n.language]}
            </h3>
            <ul className="flex flex-col gap-2">
              {link[i18n.language]?.map((l, e) => (
                <li
                  className="text-lg text-white/80 font-light hover:underline underline-offset-2 cursor-pointer"
                  key={e}
                >
                  {link.links ? <a href={link.href[e]}>{l}</a> : l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="text-white w-full h-[2px] my-10 container" />
      <div className="container flex justify-between items-center">
        <p>{t("copy")}</p>
        <div className="flex flex-row gap-2">
          {socials.map((icon, index) => (
            <div
              className="h-10 w-10 bg-white text-primary text-2xl rounded-lg flex items-center justify-center cursor-pointer"
              key={index}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
