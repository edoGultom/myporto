import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import BootstrapIcon from "../Svgs/bootstrap";
import NewIcon from "../Svgs/new";
import YiiIcon from "../Svgs/yii";
const Card = (props) => {
  return (
    <div className=" w-[343px] h-[341.33px] mx-auto md:w-[331px] md:h-[355px] lg:w-[392px] px-3 py-3 flex flex-col border-2 border-dashed  rounded-[24px] md:px-4 md:py-4 md:mx-0 lg:pr-4 lg:pl-4 lg:pt-4 border-[#E5E5E5] hover:border-text ">
      {/* <div className="bg-cover bg-center bg-[url('/images/content/project-1.png')] w-full h-full rounded-2xl">
        <div className="float-left p-4">
          <NewIcon />
        </div>
        <div className="flex justify-end px-2 py-2 space-x-[10px]">
          <div className="flex rounded-lg bg-[#F3EBFE]">
            <BootstrapIcon className="w-10 h-10 p-[6px]" />
          </div>
          <div className="flex rounded-lg bg-[#EFFAFA]">
            <YiiIcon className="w-10 h-10 p-[6px]" />
          </div>
        </div>
      </div> */}
      <div className=" flex justify-between w-full">
        <div className=" w-[232px] items-start ml-4 mr-[69px]  mt-4">
          <p className="text-lg leading-[120%] text-text font-medium ">
            BWsdsdsdsdssdssds ds dsd ssdsdalet
          </p>
          <p className="text-sm leading-[160%] text-text mt-2 mb-2">
            Business wallet
          </p>
        </div>

        <div className=" inline-flex items-center px-2 cursor-pointer">
          <div className="iflex rounded-lg bg-text p-2">
            <ArrowUpRightIcon className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
