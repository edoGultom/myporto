import {
  DevicePhoneMobileIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";
import { Down, Up } from "../components/Shape";
import Image from "next/image";
import { BookIcon } from "../components/Icons";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <section id="about">
        <div className="flex flex-col w-full space-y-4">
          <div className="px-4 ">
            <div className="flex flex-col md:flex-row py-2  md:space-x-4 items-center ">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                src={`${process.env.PUBLIC_URL}/images/about.png`}
                className="border-8 bg-back border-brand w-[124px] h-[124px] object-contain rounded-full p-2 "
                alt={`${process.env.PUBLIC_URL}/images/blank.png`}
              />
              <div className="flex flex-col">
                <span className="text-center md:text-left font-semibold text-[20px] md:text-[28px] leading-[160%]">
                  This is it 😊
                </span>
                <span className="font-light text-[12px] md:text-[18px] leading-[160%]">
                  I&apos;m{" "}
                  <span className="text-brand">Dwi Herydo Gultom </span>
                  with nickname Edo Gultom. I&apos;m a developer at one of the
                  Medan city software house. I always try something inspired by
                  YouTube tutorials or any courses. I Having +4 years for
                  experience , 3 years as fulstack developer and 1 years as
                  frontend and mobile developer. Exicited on Javascript and
                  <span className="text-brand"> React or Ract Native</span>.
                </span>
                <span className="mt-2 font-light text-[12px] md:text-[18px] leading-[160%]">
                  <b>Fact about me </b>I am a child who migrated from the Riau
                  area so when I was not coding, I probably video calling with
                  parents.
                </span>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="space-y-8 flex flex-col md:flex-row lg:space-y-0 lg:space-x-4 md:space-y-0 md:space-x-4">
              {/* what i do */}
              <div className="  items-center flex">
                <div className="p-2 text-center md:text-left">
                  <p className="flex flex-row font-semibold text-[20px] md:text-[28px] leading-[160%]  gap-2">
                    What I do
                    <BookIcon className="md:w-14 md:h-14" />
                  </p>
                  <p className="font-light text-[12px] md:text-[18px] leading-[160%]">
                    Build and maintain websites or mobile application with +24k
                    users active, improve and upgrade legacy web application and
                    perform integration between applications
                  </p>
                </div>
              </div>
              {/* tutup what i do */}

              {/* card  */}
              <div className="space-y-8 flex flex-col mx-auto lg:flex-row lg:space-y-0 lg:space-x-[30px]">
                {/* web development */}
                <div className=" bg-white w-[250px]  md:w-[262px] md:h-[190px] rounded-[23px] flex flex-col  items-center">
                  <div className="bg-back inline-flex items-center justify-center -mt-6 w-16 h-16 rounded-b-full">
                    <GlobeAsiaAustraliaIcon className="text-wbrand w-10 h-10" />
                  </div>
                  <p className="font-medium text-base text-brand leading-[160%] mt-2 md:mt-5">
                    Web Development
                  </p>
                  <p className="font-light text-sm text-center leading-[160%] md:mt-2 text-back">
                    Build, developing and maintaining web application based on
                    client requirements using YII as core framework.
                  </p>
                </div>
                {/* tutup development */}

                {/* android development */}
                <div className="bg-white  w-[250px] md:w-[262px] md:h-[190px] rounded-[23px] flex flex-col  items-center">
                  <div className="bg-back inline-flex items-center justify-center -mt-6 w-16 h-16 rounded-b-full">
                    <DevicePhoneMobileIcon className="text-white w-10 h-10" />
                  </div>
                  <p className="font-medium text-base text-brand leading-[160%] mt-2 md:mt-5">
                    Mobile Development
                  </p>
                  <p className="font-light text-sm text-center leading-[160%] md:mt-2 text-back">
                    Build, developing and maintaining mobile application using
                    React Native as core libraries
                  </p>
                </div>
                {/* tutup android development */}
              </div>
              {/* tutup card */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
