import Head from "next/head";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { Down, Up } from "../components/Shape";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <section id="home" className=" mt-[58px]"> */}
      <section id="home">
        <Hero />
      </section>
    </>
  );
}
