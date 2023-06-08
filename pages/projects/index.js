import Head from "next/head";
import React from "react";
import Layout from "../../components/LayoutTabs";
import { MobileSlider, WebSlider } from "../../components/Slider";
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
    <>
      <div className="bg-red-200 w-full">
        <Head>
          <title>{data.name}</title>
        </Head>
        <Layout idTab={data.id}>
          {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 ">
          <div className="px-4 py-2 flex-auto">
            <div className="tab-content tab-space">
              <div className="block">
                <div className=" flex flex-col lg:flex-col lg:gap-x-3 gap-y-3  rounded-lg">
                  <div className="w-full">
                    {(data.id.toString() === "1" ||
                      data.id.toString() === "2") && (
                      <WebSlider data={data.projectsList} />
                    )}

                    {data.id.toString() === "3" && (
                      <MobileSlider data={data.projectsList} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </Layout>
      </div>
    </>
  );
};
export default Projects;
