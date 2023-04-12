import {
  ChatBubbleLeftIcon,
  HomeModernIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { techTabs } from "../../data";
import AndroidIcon from "../Svgs/android";
import ReactIcon from "../Svgs/react";
import YiiIcon from "../Svgs/yii";

const Tabs = (props, { children }) => {
  const { onValueChange, onValueTabs, data } = props;
  const [value, setValue] = useState(1);
  const [arrDataTabs, setArrDataTabs] = useState([data.projectsList]);

  useEffect(() => {
    onValueChange(value);
    onValueTabs(arrDataTabs);
  }, []);

  const handleTabs = (id, data) => {
    setValue(id);
    onValueChange(id);

    setArrDataTabs(data);
    onValueTabs(data);
  };

  return (
    <>
      <div className="w-full">
        <ul className="flex mb-0 list-none flex-wrap flex-row " role="tablist">
          {data.map((item, index) => (
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              key={index}
            >
              <Link href={"/projects/" + item.href} legacyBehavior>
                <a
                  className={
                    "text-xs font-bold uppercase px-5 block leading-normal " +
                    (value === item.id
                      ? "text-brand border-b-2 border-brand "
                      : "text-text")
                  }
                  // href={item.link}
                  // onClick={() => handleTabs(item.id, item.projectsList)}
                  // data-toggle="tab"
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
      </div>
      {children}
    </>
  );
};

export default Tabs;
