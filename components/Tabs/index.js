import {
  ChatBubbleLeftIcon,
  HomeModernIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { techTabs } from "../../data";
import AndroidIcon from "../Svgs/android";
import ReactIcon from "../Svgs/react";
import YiiIcon from "../Svgs/yii";

const Tabs = ({ onValueChange }) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onChange = (id) => {
    setValue(id);
    onValueChange(id);
  };
  console.log(value);
  return (
    <div className="w-full">
      <ul className="flex mb-0 list-none flex-wrap flex-row " role="tablist">
        {techTabs.map((item, index) => (
          <li
            className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            key={index}
          >
            <a
              className={
                "text-xs font-bold uppercase px-5 block leading-normal " +
                (value === item.id
                  ? "text-brand border-b-2 border-brand "
                  : "text-text")
              }
              onClick={() => onChange(item.id)}
              data-toggle="tab"
              href="#link2"
            >
              <div className="flex items-ceter space-x-2 justify-center">
                {item.icon}
                <span> {item.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
