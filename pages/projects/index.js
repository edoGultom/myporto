import React, { useState } from "react";
import PhpSlider from "../../components/PhpSlider";
import Tabs from "../../components/Tabs";
import { projectsListPhp, techTabs } from "../../data";

const Projects = () => {
  const [tab, setTabs] = useState(1);

  const onClickTabs = (value) => {
    setTabs(value);
  };
  return (
    <div className="flex flex-wrap md:w-full md:mx-auto">
      <Tabs onValueChange={onClickTabs} />
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 ">
        <div className="px-4 py-2 flex-auto">
          <div className="tab-content tab-space">
            <div className={tab === 1 ? "block" : "hidden"} id="link1">
              <div className="shadow-lg shadow-text md:shadow-lg md:shadow-text flex flex-col lg:flex-col lg:gap-x-3 gap-y-3  rounded-lg">
                <div className="  w-full">
                  {/* <h2 className=" px-2 py-2 flex justify-end text-brand text-xl">
                    <span className="font-semibold">PHP & YII Framework</span>
                  </h2> */}
                  <PhpSlider data={projectsListPhp} />
                </div>
              </div>
            </div>
            <div className={tab === 2 ? "block" : "hidden"} id="link2">
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div className={tab === 3 ? "block" : "hidden"} id="link3">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br /> Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
