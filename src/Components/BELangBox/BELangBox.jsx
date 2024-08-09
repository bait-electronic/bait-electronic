import React, { useState } from "react";
import "./BELangBox.scss";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../Store/Lang/Lang.action";

function BELangBox() {
  const dispatch = useDispatch();
  const [selectedLang, setSelectedLang] = useState(() => {
    const storedLang = localStorage.getItem("langLocalStorage");
    return storedLang ? JSON.parse(storedLang)[0].lang : "fa";
  });

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    dispatch(changeLanguage(lang));
  };

  return (
    <div className="be-lang-box">
      <div className="be-lang-box__title">
        <span>لطفا زبان خود را انتخاب کنید</span>
      </div>
      <div className="be-lang-box__subtitle">
        <span
          onClick={() => handleLanguageChange("en")}
          className={selectedLang === "en" ? "active" : ""}
        >
          en
        </span>
        <span
          onClick={() => handleLanguageChange("fa")}
          className={selectedLang === "fa" ? "active" : ""}
        >
          fa
        </span>
        <span
          onClick={() => handleLanguageChange("ru")}
          className={selectedLang === "ru" ? "active" : ""}
        >
          ru
        </span>
      </div>
    </div>
  );
}

export default BELangBox;
