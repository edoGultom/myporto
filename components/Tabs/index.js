import {
  ChatBubbleLeftIcon,
  HomeModernIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { tabs } from "../../data";
// import { techTabs } from "../../data";
import AndroidIcon from "../Svgs/android";
import ReactIcon from "../Svgs/react";
import YiiIcon from "../Svgs/yii";

const Tabs = (props) => {
  const { idTab } = props;
  console.log(idTab, "idTabss");

  return (
    <>
      <ul className="flex mb-0 list-none flex-wrap flex-row " role="tablist">
        {tabs.map((item, index) => (
          <li
            className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            key={index}
          >
            <Link href={"/projects/" + item.href} legacyBehavior>
              <a
                className={
                  "text-xs font-bold uppercase px-5 block leading-normal " +
                  (idTab === item.id
                    ? "text-brand border-b-2 border-brand "
                    : "text-text")
                }
              >
                <div className="flex items-ceter space-x-2 justify-center">
                  {item.icon}
                  <span> {item.name}</span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tabs;
