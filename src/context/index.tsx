"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string | any>("fr");
  () => localStorage.getItem("asfar-theme") || "light";

  const changeLanguage = (lang: any) => {
    setLanguage(lang);
    document.body.className = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <AppContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
