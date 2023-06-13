import { ArrowDownCircleIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { linkCv, navigation, profile } from "../../data";
import useSrcoll from "../../helpers/hooks/useScroll";
import Social from "../Social";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1);
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scroll = useSrcoll();

  return (
    <header className=" z-20 top-0 left-0 right-0 fixed w-full transition-all duration-200">
      <div className="container mx-auto">
        <div
          className={[
            "py-3 md:py-4 px-4 flex flex-row justify-between items-center max-w-full",
            scroll ? "backdrop-blur-sm bg-brand/50 shadow-lg" : "",
          ].join(" ")}
        >
          <div className="flex items-center space-x-6">
            <Link href="/" legacyBehavior>
              <a className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center">
                {/* <Image
                  src={`${process.env.PUBLIC_URL}/images/profile_four.jpg`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  quality={60}
                  alt={`${process.env.PUBLIC_URL}/images/blank.png`}
                  className=" w-6 h-6 md:w-10 md:h-10 rounded-full "
                /> */}
                <span className="logo">E.</span>
                <span className="font-semibold leading-[160%]">Edo Gultom</span>
              </a>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-2">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.hef} legacyBehavior>
                      <a
                        className={[
                          "px-3 py-2 leading-[160%] text-sm capitalize hover:border-b transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300",
                          activeMenu === item.id ? "border-b" : "",
                        ].join(" ")}
                        onClick={() => setActiveMenu(item.id)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:block lg:flex items-center">
              <Social className="lg:flex md:hidden  space-x-6" />
              <button
                className="flex items-center justify-center space-x-2 py-2 px-6 text-sm leading-[160%] border border-brand rounded-full lg:ml-6 hover:bg-brand hover:border transition transform hover:scale-[0.9] "
                onClick={() => window.open(linkCv)}
              >
                <span> Download CV</span>
              </button>
            </div>

            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={handleNav}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>

          {/* menu humberger */}
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-full h-full bg-black opacity-10 ease-in duration-500"
                : "md: hidden"
            }
            onClick={handleNav}
          ></div>

          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-[308px] sm:hidden h-full bg-brand ease-in duration-500"
                : "fixed left-[-100%] w-[308px] h-screen top-0 p-4 ease-in duration-500 bg-white"
            }
          >
            <div className=" flex w-full justify-center mt-[43px]">
              <div className="flex flex-col items-center ">
                <Link href="/" legacyBehavior>
                  <a className="flex py-2 px-4 space-x-2  items-center ">
                    <Image
                      src={profile.src}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
                      alt={`${process.env.PUBLIC_URL}/images/blank.png`}
                    />
                    <span className="font-semibold leading-[160%]">
                      Edo Gultom
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <nav className="flex w-full justify-center mt-4">
              <ul className="flex flex-col items-center space-y-2 ">
                {navigation.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-3 px-[130px] cursor-pointer"
                    onClick={handleMenu}
                  >
                    <Link href={item.hef} legacyBehavior>
                      <a className="leading-[160%] text-sm capitalize">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="fixed bottom-0 w-[308px] flex justify-center mb-[60px] group">
              <button className="py-2 px-6 text-sm leading-[160%] border border-dark rounded-full lg:ml-6 hover:bg-brand hover:border">
                Download CV
              </button>
            </div>
          </div>
          {/* end menu humberger */}
        </div>
      </div>
    </header>
  );
}
