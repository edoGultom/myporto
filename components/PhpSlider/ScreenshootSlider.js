import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ScreenshootSlider(props) {
  const { data } = props;
  const [activeThumb, setActiveThumb] = useState("");

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        modules={[Navigation, Thumbs, Autoplay]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="product-images-slider"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.type}
              alt="product images"
              className=" object-cover rounded-md "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs "
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper ">
              <Image src={item.type} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
ScreenshootSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
