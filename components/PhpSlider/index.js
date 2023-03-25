import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import ScreenshootSlider from "./ScreenshootSlider";

export default function PhpSlider(props) {
  const { data } = props;
  return (
    <Swiper
      className="testimonialSlider"
      // navigation={true}
      pagination={{
        clickable: true,
      }}
      // autoplay={true}
      modules={[Pagination]}
    >
      {data.map((item, index) => {
        const { avatar, company, apps, message } = item;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-2 lg:space-y-0 mb-10">
              <div className=" flex flex-col lg:w-[50%] p-4">
                <div className="flex items-center gap-x-2">
                  {/* avatar */}
                  <Image src={avatar.type} alt="" />
                  {/* tutup avatar */}
                  <div className="flex flex-col">
                    <div className=" text-sm md:text-xl font-semibold">
                      {company}
                    </div>
                    <div className="text-text font-light text-xs md:text-sm">
                      {apps}
                    </div>
                  </div>
                </div>
                <div className=" border-t-2 p-2 h-full flex justify-start text-xs md:text-lg max-w-full">
                  {message}
                </div>
              </div>
              <div className=" lg:w-[50%]">
                <ScreenshootSlider data={item.screenshots} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
