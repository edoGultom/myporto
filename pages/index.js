import HandsIcon from "../components/svgs/hands";
import Navbar from "../components/navbar";
import Social from "../components/Social";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import profile_one from "../assets/profile.png";
import profile_two from "../assets/profile_two.png";
import profile_three from "../assets/profile_three.png";

export default function Home() {
  return (
    <>
      <div class="relative">
        <div class="fixed w-full top-0 left-0 -m-24 -mt-32 -ml-32 -z-10">
          <svg
            className="w-[350px] h-[350px] lg:w-[550px] lg:h-[550px]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FC942A"
              d="M50.9,-47.4C55,-35.4,39.7,-14.9,31.9,2.3C24,19.6,23.4,33.6,13,45.9C2.5,58.2,-17.9,68.8,-34.2,63.7C-50.5,58.7,-62.7,37.9,-68.6,14.9C-74.4,-8.1,-73.8,-33.2,-61.3,-47.1C-48.8,-61,-24.4,-63.5,-0.5,-63.1C23.4,-62.7,46.8,-59.3,50.9,-47.4Z"
              transform="translate(100 100) scale(1.1) "
            />
          </svg>
        </div>
      </div>
      <header className="top-0 left-0 right-0 fixed w-full">
        <Navbar />
      </header>

      <main className="px-4 py-12">
        {/* Hero */}
        <section
          id="home"
          className="mt-[58px] m-auto md:max-w-3xl xl:max-w-7xl px-6"
        >
          <div className="w-full lg:flex lg:justify-between">
            <h3 className="flex flex-col font-light text-[34px] md:text-[72px] lg:text-[72px] leading-[120%] md:leading-[102%] lg:leading-[102%]  ">
              <span className="flex items-center space-x-2 text-[25px] text-text">
                Hello everybody!
                <HandsIcon className="w-5 h-5 md:w-8 md:h-8 ml-2" />
              </span>
              <span>I'm Dwi Herydo </span>
              <span className="flex items-center">
                Gultom
                {/* <BookIcon className="md:w-14 md:h-14" /> */}
              </span>
            </h3>
            <div className="flex items-center justify-between">
              <div className="mt-8 md:w-[374px] space-y-4">
                <h1 className="leading-[160%] text-left space-y-3">
                  <div className="flex">
                    I like to code and keep it simple, try something new and
                    learn more.
                  </div>
                  <p>
                    I'm currently the{" "}
                    <span className="text-brand">Software Developer</span> at
                    Codinglab.id, a software house to helps goverment employees
                    manage data and reduce the use of paper in any
                    administration.
                  </p>
                  {/* <span className="text-brand">Fullstack</span> &
                  <span className="text-brand"> Mobile </span>Developer */}
                </h1>
                <div className="flex flex-row items-center space-x-4 mt-8">
                  <button className="flex items-center bg-brand rounded-full py-2 px-6 text-white">
                    Projects <ArrowRightCircleIcon className="w-8 h-8" />
                  </button>
                  <Social className="block md:hidden flex items-center space-x-4" />
                </div>
              </div>
              <div className="hidden lg:hidden md:block flex flex-col items-center">
                <Social className="space-x-6 " />
              </div>
            </div>
          </div>

          {/* profile */}
          <div className="w-full lg:flex lg:justify-between ">
            <div className="relative m-auto">
              <img
                src={profile_three.src}
                className="w-50 mt-4 lg:max-w-md lg:-mt-28 m-auto"
                alt="edo-gultom"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
