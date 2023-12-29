import React from "react";
import "./testimonials.css";
import IMG from "../../assets/photo_2023-12-29_03-17-56.jpg";
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: IMG,
    name: "Amr Ezzat",
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora esse iusto deleniti aperiam non, quibusdam, iste eos amet ipsam nihil voluptatum perferendis quos ratione voluptatem expedita aliquid, repudiandae debitis?"
  },
  {
    avatar: IMG,
    name: "Amr Ezzat",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora esse iusto deleniti aperiam non, quibusdam, iste eos amet ipsam nihil voluptatum perferendis quos ratione voluptatem expedita aliquid, repudiandae debitis?",
  },
  {
    avatar: IMG,
    name: "Amr Ezzat",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempora esse iusto deleniti aperiam non, quibusdam, iste eos amet ipsam nihil voluptatum perferendis quos ratione voluptatem expedita aliquid, repudiandae debitis?",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews">
      <h5>Our Clients</h5>
      <h2>Reviews</h2>

      <Swiper
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       className="container reviews__container">
        {
          data.map(({avatar, name, review}) => {
            return (
              <SwiperSlide className="reviews">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
           {review}
          </small>
        </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
