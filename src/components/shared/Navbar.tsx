import { useState } from "react";
import { navLinks } from "../../constants";
import { useAppContext } from "../../context";
import { logo } from "../../assets";
import { LanguageProps } from "../../types";

import { RiMenuFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const {
    changeLanguage,
    language,
  }: { language: LanguageProps; changeLanguage: any } = useAppContext();

  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-background z-50">
      <nav className="container relative flex justify-between items-center py-2 border-b-1 border-color">
        <a href="#" className="w-28 cursor-pointer">
          <img src={logo} className="max-w-16" alt="asfar tiba" />
        </a>
        <ul className="hidden md:flex items-center justify-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id} className="text-xl font-semibold text-primary">
              <a href={`#${link.href}`}>
                <span> {link.label[language]}</span>
              </a>
            </li>
          ))}
        </ul>

        <select
          name="languages"
          id="languages"
          className="hidden md:block p-2 text-lg text-primary font-semibold uppercase rounded-md cursor-pointer"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="fr" className="text-sm font-semibold">
            français
          </option>
          <option value="ar" className="text-sm font-semibold">
            العربية
          </option>
        </select>

        {/* M O B I L E - N A V */}

        <div className="block md:hidden text-2xl hover:text-primary cursor-pointer">
          <div className="flex items-center gap-2">
            <select
              name="languages"
              id="languages"
              className="p-2 text-lg font-semibold uppercase rounded-md cursor-pointer"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="fr" className="text-sm font-semibold">
                FR
              </option>
              <option value="ar" className="text-sm font-semibold">
                AR
              </option>
            </select>
            <div onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <RiMenuFill className="text-primary" />
              ) : (
                <RiMenu3Fill />
              )}
            </div>
          </div>
        </div>

        <ul
          className={`md:hidden absolute top-[80px] left-0 z-50 w-full ${
            showNav ? "h-[95vh] " : "h-[0vh]"
          } duration-700 bg-background flex flex-col items-center justify-center gap-5 text-xl text-primary overflow-hidden`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.href}`}
                data-replace={`${link.label}`}
                onClick={() => setShowNav(!showNav)}
                className="link text-[25px]"
              >
                <span>{link.label[language]}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
