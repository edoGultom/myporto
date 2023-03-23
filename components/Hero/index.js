import React from "react";

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Social from "../Social";
import BookIcon from "../Svgs/book";
import HandsIcon from "../svgs/hands";
import TashIcon from "../Svgs/tash";

export default function Hero() {
  return (
    <>
      <div className="w-full lg:flex lg:justify-between">
        <h3 className="flex flex-col font-light text-[34px] md:text-[72px] lg:text-[72px] leading-[120%] md:leading-[102%] lg:leading-[102%]  ">
          <span className="flex items-center space-x-2 text-[25px] text-text">
            Hello everybody!
            <HandsIcon className="w-5 h-5 md:w-8 md:h-8 ml-2" />
          </span>
          <span className="flex items-center">
            It's me <TashIcon className="md:w-14 md:h-14" />
          </span>
          <span className="flex items-center">
            Edo Gultom
            <BookIcon className="md:w-14 md:h-14" />
          </span>
        </h3>
        <div className="flex items-center justify-between">
          <div className="mt-8 md:w-[374px] space-y-4">
            <h1 className="leading-[160%] text-left space-y-3">
              <div className="flex">
                An ordinary human with some abilities, loves to code in many
                programing languages, multi platforms and working on teamwork or
                alone.
              </div>
              {/* <div className="flex">
                I like to code and keep it simple, try something new and learn
                more.
              </div>
              <p>
                I'm currently the{" "}
                <span className="text-brand">Software Developer</span> at
                Codinglab.id, a software house to helps goverment employees
                manage data and reduce the use of paper in any administration.
              </p> */}
            </h1>
            <div className="flex flex-row items-center space-x-4 mt-8">
              <button className="flex items-center bg-brand rounded-full py-2 px-6 text-white">
                Look Project <ArrowRightCircleIcon className="w-8 h-8" />
              </button>
              <Social className="block md:hidden flex items-center space-x-4" />
            </div>
          </div>
          <div className="hidden lg:hidden md:block flex flex-col items-center">
            <Social className="space-x-6 " />
          </div>
        </div>
      </div>

      {/* profile */}
      <div className="w-full lg:flex lg:justify-between">
        <div className="m-auto">
          <img
            src="/images/content/profile_three.png"
            className="w-50 mt-4 lg:max-w-md lg:-mt-32 m-auto lg:w-[420px]"
            alt="edo-gultom"
          />
        </div>
        {/* 
        
       */}
      </div>
      {/* end profile */}
    </>
  );
}
