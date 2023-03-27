import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ScreenshootSlider from "./ScreenshootSlider";

export default function WebSlider({ data }) {
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
              <div className=" flex flex-col lg:w-[50%] bg-[#1b2c49] rounded-lg">
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
              <div className="lg:w-[50%] bg-[#1b2c49] p-4 rounded-lg">
                <div className=" bg-white  p-4">
                  <ScreenshootSlider data={screenshots} logoNew={logoNew} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
