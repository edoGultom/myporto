import React from "react";
import { EffectCards, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import Tech from "../Tech";
import Image from "next/image";

export default function MobileSlider({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          className="flex flex-col md:flex-row space-x-4 w-full justify-center p-2 mt-10"
          key={index}
        >
          <div className="md:w-[50%] flex flex-col px-6  rounded-md ">
            <div className="sliderCard">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                // className="sliderCard"
              >
                {item.screenshoots.src.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      width="0"
                      height="0"
                      sizes="100vw"
                      alt="/images/blank.png"
                      className="object-top "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="md:w-[50%] flex flex-col space-y-2">
            <p className="text-lg text-brand">
              Mobile <span className="text-white">Development</span>
            </p>
            <p className="sm:text-md md:text-[42px] mt-2  ">{item.app}</p>
            <div className="flex flex-row items-start space-x-2 mb-2">
              {item.screenshoots.techCode.map((tech, index) => (
                <div className="flex rounded-lg bg-emerald-50 p-2" key={index}>
                  <Tech data={tech} className="absolute  w-8 m-2" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-dark">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
