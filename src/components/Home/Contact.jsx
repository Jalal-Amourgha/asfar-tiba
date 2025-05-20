"use client";
import Title from "../shared/Title";
import { IoIosSend } from "react-icons/io";
import { cities } from "@/constants";
import { useState } from "react";
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Tetouan");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number || !email || !city || !message) {
      let alert = t("alert1");
      return alert(alert);
    }

    const date = new Date();
    const isoString = date.toISOString().replace("Z", "+00:00");

    try {
      await addDoc(collection(db, "messages"), {
        name: name,
        number: number,
        city: city,
        email: email,
        message: message,
        createdAt: isoString,
        read: false,
      });
      let alert = t("alert2");
      alert(alert);
    } catch (err) {
      console.error("Error sending message: ", err);
    } finally {
      setName("");
      setNumber("");
      setCity("Tetouan");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="max-w-[800px] mt-24 px-2 mx-auto">
      <Title title={t("contact1")} desc={t("contact2")} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
        <div className="flex flex-col">
          <label>{t("contact3")}</label>
          <input
            type="text"
            placeholder={t("contact8")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>{t("contact4")}</label>
          <input
            type="email"
            placeholder={t("contact9")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>{t("contact5")}</label>
          <input
            type="text"
            placeholder={t("contact10")}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>{t("contact6")}</label>
          <select
            name="cities"
            id="cities"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map((city, index) => (
              <option key={index}>{city.fr}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>{t("contact7")}</label>
          <textarea
            placeholder={t("contact11")}
            className="resize-x-none"
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="flex flex-row items-center p-2 bg-primary text-white text-xl font-medium rounded-xl w-fit gap-2 cursor-pointer">
          <IoIosSend size="20" />{" "}
          <p>{i18n.language == "fr" ? "Envoye" : "أرسل"}</p>
        </button>
      </form>
    </section>
  );
};

export default Contact;
