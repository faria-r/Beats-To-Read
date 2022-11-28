import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Ads = () => {
  const { data: advertise = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-twelve-server-psi.vercel.app/advertise"
      );
      const data = res.json();
      console.log(data);
      return data;
    },
  });

  if (advertise.length > 0) {
    return (
      <>
        <h3 className="text-5xl my-8 italic font-semibold text-green-500">
          On Sale! <br /> <span>Get 20% Discount Today</span>
        </h3>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {advertise.map((ads) => (
            <SwiperSlide ads={ads._id}>
              {" "}
              <img src={ads.image} alt="" />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
};

export default Ads;
