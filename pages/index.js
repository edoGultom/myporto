import Hero from "../components/Hero";
import { Down, Up } from "../components/Shape";

export default function Home() {
  return (
    <>
      <Up />
      <section
        id="home"
        className="mt-[58px] m-auto md:max-w-3xl xl:max-w-7xl "
      >
        <Hero />
      </section>
      <Down className="hidden" />
    </>
  );
}
