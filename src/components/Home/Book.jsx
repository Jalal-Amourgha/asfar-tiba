"use client";
import { FaKaaba } from "react-icons/fa";
import Title from "../shared/Title";
import { booksItems } from "@/constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation();
  return (
    <section className="container mt-24">
      <Title title={t("book1")} />
      <p className="max-w-full md:max-w-1/2  mx-auto text-lg text-center  text-text">
        {t("book2")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10  ">
        {booksItems.map((item) => (
          <div
            className="md:h-[360px] relative shadow2 rounded-2xl overflow-hidden"
            key={item.id}
          >
            {item.img ? (
              <Image
                src={item.icon}
                fill
                className="hidden md:block w-full h-full bg-cover bg-center object-cover"
                alt="img"
              />
            ) : (
              <div className="bg-bg-primary  h-[360px] md:h-full p-4 md:p-10 relative overflow-hidden">
                <h1 className="text-3xl font-semibold text-text text-start w-full mb-10">
                  {t(item.content.title)}
                </h1>
                <p className="text-md text-text font-medium italic">
                  {t(item.content.label)}
                </p>
                <FaKaaba
                  className={`text-primary/20 absolute top-1/2 left-1/2 -translate-1/2`}
                  size="200"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Book;
