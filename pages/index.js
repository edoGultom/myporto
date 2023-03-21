import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main className="px-4 py-12 ">
        <section
          id="home"
          className="mt-[58px] m-auto md:max-w-3xl xl:max-w-7xl px-6"
        >
          <Hero />
        </section>
      </main>
    </>
  );
}
