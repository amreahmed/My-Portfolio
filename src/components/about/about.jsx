import React from "react";
import "./about.css";
import ME from "../../assets/photo_2023-12-29_03-17-56.jpg";
import { BsAward } from "react-icons/bs";
import { LiaUsersSolid } from "react-icons/lia";
import { TbDeviceDesktopCode } from "react-icons/tb";


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
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
              <h5>Experince</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <LiaUsersSolid className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <TbDeviceDesktopCode className="about__icon" />
              <h5>Projects</h5>
              <small> 50+ Completed Projects</small>
            </article>
          </div>
          <p>
            "Hi there, I am Amr, a 21-year-old engineering student from Cairo,
            Egypt. I began learning to code six years ago when I enrolled in my
            first HTML class at school and discovered that I truly enjoyed
            coding. I gained a lot of knowledge about front-end and back-end
            development."
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
