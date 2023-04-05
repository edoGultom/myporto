import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import BootstrapIcon from "../Svgs/bootstrap";
import NewIcon from "../Svgs/new";
import YiiIcon from "../Svgs/yii";
import Tech from "../Tech";

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
          <div className=" bg-gray-300 md:w-[50%] flex flex-col px-6  rounded-md ">
            <div
              className={[
                "flex flex-row  py-4 ",
                item.screenshoots.isNew ? "justify-between " : "justify-end",
              ].join(" ")}
            >
              {item.screenshoots.isNew && <NewIcon />}
              <button
                onClick={() => openLinkInNewTab(`${item.link}`)}
                className=" inline-flex px-2rounded-lg bg-back rounded-lg  hover:animate-bounce"
              >
                <ArrowUpRightIcon className="text-white w-3 m-2 " />
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
              <img
                src={item?.screenshoots?.src}
                alt="/images/blank.png"
                className="object-cover object-top"
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
