import React from "react";
import "./testimonials.css";
import ASHTON from "../../assets/ashton.jpg"
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/fc33761b5a1910bcd9c35f608584e188-1695157184726/8333f19c-7b7a-48d7-b0ec-536f6f7429b2.png",
    name: "elie",
    review:"Very talented developer, he delivered the bot with very high standards and fast. highly trust worthy and nice person 10/10"
  },
  {
    avatar: ASHTON,
    name: "Ashton Brisson",
    review:
      "I would recommend great bot maker and great dev no issues made bot within 2 days when I was in a time crunch I would choose Amr even said he will monitor bot and add to it when needed!!!",
  },
  {
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/903f5bd8a2cde66d26c5421aef08aa0d-1702839268928/32cb23e3-e6e9-42db-af4b-fd583da4e895.JPG",
    name: "Nicole C",
    review:
      "Hey, I don't even know where to start with what he did, he built the website in 2 days it had 4 different complex systems, he has a real talent I've purchased 4 different websites before none of then were as responsive as his all designs are instant he know what he is doing, I would 100% recommend him for anyone looking for a simple or advanced website.",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section id="reviews">
      <h5>{t("reviews_h5")}</h5>
      <h2>{t("reviews_h2")}</h2>

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
