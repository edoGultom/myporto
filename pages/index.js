import Card from "../components/Card";
import Hero from "../components/Hero";
import { Down, Up } from "../components/Shape";

export default function Home() {
  return (
    <>
      <Up />
      <section id="home" className=" mt-[58px]">
        <Hero />
      </section>

      <section id="projects">
        <div className="mt-14  flex flex-col md:flex-wrap md:flex-row gap-3 md:gap-3 lg:gap-9 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Down className="hidden" />
    </>
  );
}
