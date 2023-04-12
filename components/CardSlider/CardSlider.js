import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CardSlider(props) {
  const [activeThumb, setActiveThumb] = useState("");

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="bg-yellow-400 p-10"
      >
        <div className="bg-red-200">
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              {/* <Image
                src={item}
                alt="product images"
                className=" object-cover "
              /> */}
              <div
                style={{ backgroundImage: `url(${item.type})` }}
                className="bg-purple-400 h-[220px] lg:w-[50%] lg:h-[380px] md:h-[320px]  bg-cover bg-center "
              >
                sdsds
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs "
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <Image src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
}
CardSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
