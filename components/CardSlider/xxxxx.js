import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../../data";
import { Navigation, Pagination } from "swiper";

export default function CardSlider() {
  const { pages } = projects;

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className=" min-h-[920.67px] bg-red-100"
    >
      {pages.map((page, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className=" flex flex-col md:flex-wrap md:flex-row gap-3 md:gap-3 lg:gap-9 ">
              {page.projectList.map((project, index) => {
                const { image, iconNew, title, subtitle, technologyIcon } =
                  project;
                return (
                  <div className=" w-[343px] h-[341.33px] mx-auto md:w-[331px] md:h-[355px] lg:w-[392px] px-3 py-3 flex flex-row border-2 border-dashed  rounded-[24px] md:px-4 md:py-4 md:mx-0 lg:pr-4 lg:pl-4 lg:pt-4 border-[#E5E5E5] hover:border-text ">
                    <div className="bg-cover bg-center bg-[url('/images/content/project-1.png')] w-full h-full rounded-2xl">
                      <div className="float-left p-4">{iconNew}</div>
                      <div className="flex justify-end px-2 py-2 space-x-[10px]">
                        {technologyIcon.map((tIcon, idxIcon) => {
                          return (
                            <div
                              className="flex rounded-lg bg-[#F3EBFE]"
                              key={idxIcon}
                            >
                              {tIcon}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
