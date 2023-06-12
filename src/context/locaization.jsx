import React, { createContext, useEffect, useState } from "react";

const Context = createContext("uz");

const Provider = ({ children }) => {
    const storedLanguage = window.localStorage.getItem("language");
    const [lang, setLang] = useState(storedLanguage || "uz");
  
    useEffect(() => {
      if (lang) {
        window.localStorage.setItem("language", lang);
      } else {
        window.localStorage.removeItem("language");
      }
    }, [lang]);
  
    return (
      <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
    );
  };

export { Context, Provider };
