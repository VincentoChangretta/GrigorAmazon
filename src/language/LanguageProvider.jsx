import React, { useState } from 'react';
import { LanguageContext, Languages, LOCALSTORE_LANGUAGE } from './language';


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem(LOCALSTORE_LANGUAGE) || Languages.PL)
  console.log(language)
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
