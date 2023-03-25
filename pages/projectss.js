import Head from "next/head";
import React from "react";
import PhpSlider from "../components/PhpSlider";
import { projectsListPhp } from "../data";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Pojects</title>
      </Head>
      <section className="pojects">
        <div className="container mx-auto">
          <div className="shadow-lg shadow-text md:shadow-lg md:shadow-text flex flex-col lg:flex-col lg:gap-x-3 gap-y-3  p-5 rounded-lg">
            <div className="  w-full ">
              <h2 className=" mb-9 flex justify-end text-brand text-xl">
                <span className="font-semibold">PHP & YII Framework</span>
              </h2>
              <PhpSlider data={projectsListPhp} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
