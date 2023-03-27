import Link from "next/link";
import React from "react";
import { tabs } from "../../data";

const Tabs = (props) => {
  const { idTab } = props;

  return (
    <>
      <ul className="flex mb-0 list-none flex-wrap flex-row" role="tablist">
        {tabs.map((item, index) => (
          <li
            className="-mb-px  last:mr-0 flex-auto justify-between w-10"
            key={index}
          >
            <Link href={"/projects/" + item.href} legacyBehavior>
              <a
                className={[
                  "text-xs md:text-lg font-bold uppercase  block leading-normal",
                  idTab === item.id
                    ? "text-brand border-b-2 border-brand "
                    : "text-text",
                ].join(" ")}
              >
                <div className="flex items-center gap-2 justify-center">
                  {item.icon}
                  {item.name}
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
