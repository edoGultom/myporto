import {
  CalendarDaysIcon,
  EnvelopeIcon,
  HomeModernIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Down, Up } from "../components/Shape";

const Contact = () => {
  return (
    <>
      <Up />
      <section
        id="contact"
        className="mt-[58px] m-auto md:max-w-3xl xl:max-w-7xl lg:px-6"
      >
        <div className="flex flex-col lg:flex-row  justify-center lg:space-x-28 ">
          <div className="items-center flex justify-center">
            <div className="border-2 border-gray-600 w-[200px] h-[245px] lg:w-[350px] lg:h-[450px] rounded-2xl rounded-br-[100px] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px]">
              <div className="w-[200px] h-[245px] ml-4 mt-4 lg:ml-10 lg:mt-10 lg:w-[350px] lg:h-[450px]  flex flex-col">
                <img
                  src="/images/content/profile_four.jpg"
                  className="w-full object-cover min-h-0 rounded-br-[100px] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 space-y-8 flex flex-col justify-center md:items-center lg:items-start">
            <div className=" flex flex-col items-center md:items-start">
              <span className="font-semibold leading-[160%] lg:text-[40px]">
                Dwi Herydo Gultom
              </span>
              <p className=" lg:text-[24px] leading-[160%]  font-light text-gray-500">
                Fullstack & Mobile Developer
              </p>
            </div>

            <div className=" lg:text-lg flex items-center space-x-2">
              <CalendarDaysIcon className="text-brand w-5 lg:w-8" />
              <span>March 10th, 1995</span>
            </div>
            <div className=" lg:text-lg flex items-center">
              <PhoneIcon className="text-brand w-5 lg:w-8" />
              <span>+6282-2858-1152-3</span>
            </div>
            <div className=" lg:text-lg flex items-center space-x-2">
              <HomeModernIcon className="text-brand w-5 lg:w-8" />
              <span>Jl. Halat Gg. Rukun No. 15 , Medan Sumatera Utara</span>
            </div>
            <div className=" lg:text-lg flex items-center space-x-2">
              <EnvelopeIcon className="text-brand w-5 lg:w-8" />
              <span>edogultom10395@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <Down />
    </>
  );
};

export default Contact;
