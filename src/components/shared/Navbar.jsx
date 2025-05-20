"use client";
import { logo } from "@/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import { RiMenuFill, RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Navbar = ({ scrollToSection }) => {
  const [showNav, setShowNav] = useState(false);

  const { i18n } = useTranslation();

  return (
    <header className="sticky w-full py-4 left-0 top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link to="#" duration={500}>
          <Image
            src={logo}
            alt="asfar tiba"
            className="max-w-[120px] cursor-pointer"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-5 text-lg">
          {navLinks.map((item, index) => (
            <li
              onClick={() => scrollToSection(item.href)}
              key={index}
              className="text-xl font-medium hover:text-primary cursor-pointer"
            >
              <Link to={item.href} duration={500}>
                {item.label[i18n.language]}
              </Link>
            </li>
          ))}
        </ul>
        <select
          name="languages"
          id="languages"
          className="hidden md:block p-2 text-lg text-primary font-semibold uppercase rounded-md border-2 border-primary cursor-pointer"
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          <option value="fr" className="text-sm font-semibold">
            français
          </option>
          <option value="ar" className="text-sm font-semibold">
            العربية
          </option>
        </select>
        <div className="block md:hidden text-2xl">
          <div className="flex items-center gap-4">
            <select
              name="languages"
              id="languages"
              className="p-2 text-lg font-semibold uppercase rounded-md hover:text-primary text-primary border-2 border-primary cursor-pointer"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="fr" className="text-sm font-semibold">
                FR
              </option>
              <option value="ar" className="text-sm font-semibold">
                AR
              </option>
            </select>
            <div
              className="cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? (
                <RiMenuFill className="text-secondary" />
              ) : (
                <RiMenu3Fill className="hover:text-primary" />
              )}
            </div>
          </div>
        </div>
        <ul
          className={`md:hidden absolute top-[80px] left-0 z-50 w-full ${
            showNav ? "h-[95vh] " : "h-[0vh]"
          } duration-700 bg-white flex flex-col items-center justify-center gap-5 text-xl text-primary overflow-hidden`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                duration={500}
                onClick={() => setShowNav(!showNav)}
                className="cursor-pointer text-[25px]"
              >
                <span>{link.label["fr"]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
