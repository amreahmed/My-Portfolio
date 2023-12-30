import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/my.png"
import HeaderSocials from "./HeaderSocials.jsx";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header id="home">
      <div className="container header__container">
        <h5>{t("title_h5")}</h5>
        <h1>{t("title_h1")} <span className="name__span">{t("title_h1_span")}</span></h1>
        <h5 className="text-light">{t('subtitle_h5')}</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src= {ME} alt="me" />
        </div>

        <a href="#footer" className="scroll__down">Scroll Down</a>
        
      </div>
    </header>
  );
};

export default Header;
