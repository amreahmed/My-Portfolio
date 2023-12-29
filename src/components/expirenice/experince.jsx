import React from "react";
import "./experince.css";
import { MdVerified } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

const Experince = () => {
  return (
    <section id="expirenice">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="color__light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3 className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="color__light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon"/>
              <div>
              <h4>javascript</h4>
              <small className="color__light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="color__light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon"/>
             <div>
             <h4>tailwind</h4>
              <small className="color__light">Basic</small>
             </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon"/>
              <div>
              <h4>React JS</h4>
              <small className="color__light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon"/>
              <div>
              <h4>Node JS</h4>
              <small className="color__light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className="color__light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPhp className="experience__details-icon"/>
              <div>
              <h4>PHP</h4>
              <small className="color__light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandMysql className="experience__details-icon"/>
              <div>
              <h4>MySQL</h4>
              <small className="color__light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon"/>
              <div>
              <h4>Python</h4>
              <small className="color__light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCsharp className="experience__details-icon"/>
              <div>
              <h4>C#</h4>
              <small className="color__light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experince;
