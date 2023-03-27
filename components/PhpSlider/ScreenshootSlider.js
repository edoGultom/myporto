import React, { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import BootstrapIcon from "../Svgs/bootstrap";
import NewIcon from "../Svgs/new";

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
        {data.map((item, index) => {
          const { techLabel, isNew, src } = item;
          console.log(techLabel, "tech");
          return (
            <SwiperSlide key={index}>
              <div className="float-left">
                <img
                  src={src}
                  alt="/images/blank.png"
                  className=" object-cover "
                />
                {isNew && (
                  <NewIcon
                    className="absolute top-0  left-0 w-8 m-2"
                    fill="#fc942a"
                  />
                )}

                {/* <div className="flex flex-col absolute bottom-4 left-0 m-2 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  {techLabel.map((tech, index) => {
                    console.log(tech);
                    return (
                      <div className="flex rounded-lg bg-[#F3EBFE]" key={index}>
                        {tech}
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </SwiperSlide>
          );
        })}
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
