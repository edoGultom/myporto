import React, { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import BootstrapIcon from "../Svgs/bootstrap";
import NewIcon from "../Svgs/new";
import Tech from "../Tech";
import Image from "next/image";

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
          const { src } = item;
          return (
            <SwiperSlide key={index}>
              <div className="float-left">
                <Image
                  src={src}
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="/images/blank.png"
                  className=" object-contain "
                />

                <div className="flex flex-row absolute bottom-0 right-0 m-2 space-x-2 md:bottom-4 md:flex-row md:space-y-0 md:space-x-2 ">
                  {item?.techCode.map((tech, idx) => (
                    <div
                      className="flex rounded-lg bg-gray-200 p-2"
                      key={index}
                    >
                      <Tech data={tech} className="absolute  w-8 m-2" />
                    </div>
                  ))}
                </div>
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
              <Image
                width="0"
                height="0"
                sizes="100vw"
                src={item.src}
                alt="/images/blank.png "
              />
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
