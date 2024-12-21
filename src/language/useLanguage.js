import { useContext } from "react";
import { LanguageContext, Languages, LOCALSTORE_LANGUAGE } from "./language";

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const setNewLanguage = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
      localStorage.setItem(LOCALSTORE_LANGUAGE, lang);
    }
  };
  const changeLanguage = (plData, enData) => {
    return language === Languages.PL ? plData : enData;
  };
  return { language, setNewLanguage, changeLanguage };
};
