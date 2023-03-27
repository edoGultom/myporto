import React from "react";
import Layout from "../../components/LayoutTabs";
import PhpSlider from "../../components/PhpSlider";
import { tabs } from "../../data";

export const getStaticProps = async (ctx) => {
  const tabs = await getAllTabs(1);
  const response = JSON.stringify(tabs);
  return {
    props: { response },
  };
};

const getAllTabs = async (id) => {
  const arr = tabs.find((item) => item.id === id);
  return arr;
};
const Projects = ({ response }) => {
  const data = JSON.parse(response);
  return (
    <Layout idTab={data.id}>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 ">
        <div className="px-4 py-2 flex-auto">
          <div className="tab-content tab-space">
            <div className="block">
              <div className="shadow-lg shadow-text md:shadow-lg md:shadow-text flex flex-col lg:flex-col lg:gap-x-3 gap-y-3  rounded-lg"></div>
              <div className="  w-full ">
                <PhpSlider data={data.projectsList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    // <div className="flex flex-wrap md:w-full md:mx-auto">
    //   <div className="w-full">
    //     <Tabs idTab={data.id} />
    //   </div>
    //   <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 ">
    //     <div className="px-4 py-2 flex-auto">
    //       <div className="tab-content tab-space">
    //         <div className="block">
    //           <div className="shadow-lg shadow-text md:shadow-lg md:shadow-text flex flex-col lg:flex-col lg:gap-x-3 gap-y-3  rounded-lg">
    //             <div className="  w-full ">
    //               <PhpSlider data={data.projectsList} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Projects;
