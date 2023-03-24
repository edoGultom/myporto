import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import CardSlider from "../components/CardSlider";
import { Down, Up } from "../components/Shape";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Pojects</title>
      </Head>
      <section id="projects">
        {/* <div className="mt-14  flex flex-col md:flex-wrap md:flex-row gap-3 md:gap-3 lg:gap-9 "> */}
        <div className=" flex flex-col md:flex-wrap md:flex-row gap-3 md:gap-3 lg:gap-9 ">
          {/* <CardSlider /> */}
          <Card />
        </div>
      </section>
    </>
  );
}
