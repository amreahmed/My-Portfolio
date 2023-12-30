import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { BsAward } from "react-icons/bs";
import { LiaUsersSolid } from "react-icons/lia";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();
  return (
    <section id="about">
      <h5>{t("about_h5")}</h5>
      <h2>{t("about_h2")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="It's Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>{t("about_card")}</h5>
              <small>{t("about_card_p")}</small>
            </article>

            <article className="about__card">
              <LiaUsersSolid className="about__icon" />
              <h5>{t("about_card1")}</h5>
              <small>{t("about_card_p1")}</small>
            </article>

            <article className="about__card">
              <TbDeviceDesktopCode className="about__icon" />
              <h5>{t("about_card2")}</h5>
              <small>{t("about_card_p2")}</small>
            </article>
          </div>
          <p>
           {`"${t("about_p")}"`}
          </p>
          <a href="#contact" className="btn btn-primary">
            {t("about_btn")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
