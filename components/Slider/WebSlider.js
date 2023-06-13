import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Tech from "../Tech";
import { NewIcon } from "../Icons";
import Image from "next/image";

export default function WebSlider({ data }) {
  const openLinkInNewTab = (url) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) newTab.opener = null;
  };
  return (
    <>
      {data.map((item, index) => (
        <div
          className="flex flex-col md:flex-row space-x-4 w-full justify-center p-2 mt-5"
          key={index}
        >
          <div className="backdrop-blur-md bg-text/50 shadow-lg md:w-[50%] flex flex-col px-6  rounded-md ">
            <div
              className={[
                "flex flex-row  py-4 ",
                item.screenshoots.isNew ? "justify-between " : "justify-end",
              ].join(" ")}
            >
              {item.screenshoots.isNew && <NewIcon />}
              <button
                onClick={() => openLinkInNewTab(`${item.link}`)}
                className=" inline-flex px-1 py-1 bg-back rounded-lg group"
              >
                <ArrowUpRightIcon className="text-white w-4 m-2 group-hover:translate-x-1 group-hover:-translate-y-1  transition" />
              </button>
              {/* </div> */}
            </div>
            <div className="flex flex-row items-start space-x-2 mb-2">
              {item.screenshoots.techCode.map((tech, index) => (
                <div className="flex rounded-lg bg-emerald-50 p-2" key={index}>
                  <Tech data={tech} className="absolute  w-8 m-2" />
                </div>
              ))}
            </div>
            <div className=" relative flex h-[200px]">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                src={item?.screenshoots?.src}
                alt={`${process.env.PUBLIC_URL}/images/blank.png`}
                className="w-full object-cover object-top rounded-e-none rounded-t-md"
              />
            </div>
          </div>

          <div className="md:w-[50%] flex flex-col space-y-2">
            <p className="text-lg text-brand">
              Web <span className="text-white">Development</span>
            </p>
            <p className="sm:text-md md:text-[42px] mt-2 ">{item.app}</p>
            <p className="mt-4 text-dark">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
