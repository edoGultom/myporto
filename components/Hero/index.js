import React from "react";

import {
  ArrowRightCircleIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import Social from "../Social";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BookIcon, TashIcon } from "../Icons";

export default function Hero() {
  return (
    <>
      <div className=" lg:flex  lg:flex-row lg:justify-between">
        <h3 className="flex flex-col font-light text-[34px] md:text-[72px] lg:text-[72px] leading-[120%] md:leading-[102%] lg:leading-[102%]  ">
          <span className="flex items-center space-x-2 text-[25px] text-text">
            Hello everybody!
            <span className="animate-waving-hand">
              <HandRaisedIcon className="w-5 h-5 md:w-8 md:h-8 ml-2" />
            </span>
          </span>
          <span className="flex items-center">
            It&apos;s me
            <TashIcon className="md:w-14 md:h-14" />
          </span>
          <span className="flex items-center ">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("Edo Gultom")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Dwi Gultom")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Bang Gultom")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h3>
        <div className="flex items-center justify-between">
          <div className="mt-8 md:w-[374px] space-y-4">
            <h1 className="leading-[160%] text-left space-y-3">
              <div className="flex flex-row">
                <span>
                  An ordinary human with some abilities, loves to code in many
                  programing languages, multi platforms and working on teamwork
                  or alone.
                </span>
              </div>
            </h1>
            <div className="group w-24">
              <Link href="/projects" legacyBehavior>
                <button className="text-xs md:text-lg flex items-center bg-brand rounded-full py-2 px-6 text-white justify-between">
                  Project
                  <ArrowRightCircleIcon className="w-8 h-8 group-hover:translate-x-4 transition" />
                </button>
              </Link>
              <Social className=" md:hidden flex items-center space-x-4" />
            </div>
          </div>
          <div className="hidden lg:hidden md:block  flex-col items-center">
            <Social className="space-x-6 " />
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="w-full flex justify-between h-full items-center">
        <Image
          src={`${process.env.PUBLIC_URL}/images/profile_final.png`}
          width="0"
          height="0"
          className="w-[300px] m-auto md:w-[420px]"
          alt={`${process.env.PUBLIC_URL}/images/blank.png`}
        />
      </div>
      {/* end profile */}
    </>
  );
}
