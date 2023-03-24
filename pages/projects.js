import Head from "next/head";
import Image from "next/image";
import React from "react";
import Card from "../components/Card";
import { CardSlider, ImageSlider } from "../components/CardSlider";
import { Down, Up } from "../components/Shape";
import { Slider, testimonial } from "../data";
import { productImages } from "../assets/contents";
import LeftSlider from "../components/CardSlider/LeftSlider";

export default function Projects() {
  const { image, title } = testimonial;
  return (
    <>
      <Head>
        <title>Pojects</title>
      </Head>
      <section className="pojects">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            {/* title */}
            <h2 className="title mb-9">{title}</h2>
            {/* slider */}
            <LeftSlider />
          </div>
          {/* image */}
          <div className="order-1">
            <Image src={image.type} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
