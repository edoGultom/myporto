import React from "react";
import { EffectCards, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MobileSlider({ data }) {
  console.log(data, "datas mobile");
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {data?.map((item, index) => {
        const { company, responsibilities, screenshots, logoNew } = item;
        return (
          <SwiperSlide key={index}>
            <div className="  text-white flex flex-col space-y-2 md:flex-col lg:flex-row lg:space-x-2 lg:space-y-0 mb-10 p-4 rounded-md justify-between">
              <div className=" flex flex-col lg:w-60%] bg-[#1b2c49] rounded-lg">
                <div className="flex items-center gap-x-2">
                  {/* avatar */}
                  <img src="/images/avatar.png" alt="/images/blank.png" />
                  {/* tutup avatar */}
                  <div className="flex flex-col">
                    <div className=" text-sm md:text-xl font-semibold capitalize">
                      {company}
                    </div>
                    <div className=" font-light text-xs md:text-sm ">
                      PEMERINTAH PROVINSI SUMATERA UTARA
                    </div>
                  </div>
                </div>

                <div className=" border-t-2 border-t-white h-full flex justify-start text-xs md:text-lg max-w-full px-5 py-5">
                  {responsibilities}
                </div>
              </div>
              <div className="lg:w-[40%] bg-[#1b2c49] p-4 rounded-lg">
                <div className=" bg-white  p-4">
                  <div className="sliderCard">
                    <Swiper
                      effect={"cards"}
                      grabCursor={true}
                      modules={[EffectCards]}
                      // className="sliderCard"
                    >
                      <SwiperSlide>Slide 1</SwiperSlide>
                      <SwiperSlide>Slide 2</SwiperSlide>
                      <SwiperSlide>Slide 3</SwiperSlide>
                      <SwiperSlide>Slide 4</SwiperSlide>
                      <SwiperSlide>Slide 5</SwiperSlide>
                      <SwiperSlide>Slide 6</SwiperSlide>
                      <SwiperSlide>Slide 7</SwiperSlide>
                      <SwiperSlide>Slide 8</SwiperSlide>
                      <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
