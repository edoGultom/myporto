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
            <div className="float-left">
              <img
                src={item.src}
                alt="/images/blank.png"
                className=" object-cover "
              />
              {item.logoNew}
            </div>
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
              <img src={item.src} alt="/images/blank.png " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
// ScreenshootSlider.propTypes = {
//   data: PropTypes.array.isRequired,
// };
