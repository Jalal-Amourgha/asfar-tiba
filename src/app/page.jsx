"use client";
import { Element } from "react-scroll";
import {
  About,
  Book,
  Contact,
  Footer,
  Gallery,
  Hero,
  Packages,
  Questions,
  Reviews,
  Services,
  Sponsors,
  Navbar,
  Destinations,
  OmraOffers,
} from "@/components";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;
    const isRTL = ["ar"].includes(lang);

    document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.classList.toggle("rtl", isRTL);
    document.body.classList.toggle("ltr", !isRTL);
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <Element name="#">
        <Hero />
      </Element>
      <Sponsors />
      <About />
      <Book />
      <Element to="voyages">
        <Destinations />
      </Element>
      <Element to="services">
        <Services />
      </Element>

      <Element name="packages">
        <Packages />
      </Element>
      <OmraOffers />
      <Questions />
      <Gallery />
      <Reviews />
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}
