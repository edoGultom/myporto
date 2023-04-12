import {
  CalendarDaysIcon,
  EnvelopeIcon,
  HomeModernIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";
import Image from "next/image";
import { contact } from "../data";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section
        id="contact"
        className="mt-[58px] m-auto md:max-w-3xl xl:max-w-7xl lg:px-6"
      >
        <div className="flex flex-col lg:flex-row  justify-center lg:space-x-28 ">
          <div className="items-center flex justify-center">
            <div className="border-2 border-brand w-[200px] h-[245px] lg:w-[350px] lg:h-[450px] rounded-2xl rounded-br-[100px] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px]">
              <div className="w-[200px] h-[245px] ml-4 mt-4 lg:ml-10 lg:mt-10 lg:w-[350px] lg:h-[450px]  flex flex-col">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  src="/images/profile_four.jpg"
                  className="w-full object-cover min-h-0 rounded-br-[100px] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px]"
                  alt="/images/blank.png"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 space-y-8 flex flex-col justify-center md:items-center lg:items-start">
            <div className=" flex flex-col items-center md:items-start">
              <span className="font-semibold leading-[160%] lg:text-[40px]">
                {contact.name}
              </span>
              <p className=" lg:text-[24px] leading-[160%]  font-light text-brand">
                {/* {contact.role} */}
                Frontend & Mobile <span className="text-white">Developer</span>
              </p>
            </div>

            <div className=" lg:text-lg flex items-center space-x-2">
              <CalendarDaysIcon className="text-brand w-5 lg:w-8" />
              <span>{contact.date}</span>
            </div>
            <div className=" lg:text-lg flex items-center">
              <PhoneIcon className="text-brand w-5 lg:w-8" />
              <span>{contact.phone}</span>
            </div>
            <div className=" lg:text-lg flex items-center space-x-2">
              <HomeModernIcon className="text-brand w-5 lg:w-8" />
              <span>{contact.address}</span>
            </div>
            <div className=" lg:text-lg flex items-center space-x-2">
              <EnvelopeIcon className="text-brand w-5 lg:w-8" />
              <span>{contact.email}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
