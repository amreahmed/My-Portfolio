import React from "react";
import "./survices.css";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const Survices = () => {
  const { t } = useTranslation();
  return (
    <section id="services">
      <h5>{t("services_h5")}</h5>
      <h2>{t("services_h2")}</h2>
      <div className="container services__container">
        {/* ui/ux */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p> Figma designes.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p> Landing pages.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Mobile Apps UI</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Modern Designs</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Responsive designs</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Dashboards UI</p>
          </li>
          </ul>
        </article>

        {/* WEB DEVEOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Responsive Websites</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Wordpress</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>React</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Django</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Personal Portfolios</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Landing pages</p>

          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Node JS Express</p>
            
          </li>
          </ul>
        </article>
        {/* discord bots devlopments */}
        <article className="service">
          <div className="service__head">
            <h3>Discord Bots development</h3>
          </div>
          <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Economy, Shop, Custom Items.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>XP System, Levels, Rewards.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Games: Hangman, Minesweeper</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Moderation, Server Safeguard</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Self-Roles, Welcome Roles</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>API Integrations</p>
          </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Survices;
