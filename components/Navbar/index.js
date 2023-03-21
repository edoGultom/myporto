import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import profile from "../../assets/profile-2.jpg";
import Social from "../Social";

// menu
const menus = [
  {
    hef: "/",
    text: "home",
  },
  {
    hef: "/about",
    text: "about",
  },
  {
    hef: "/contact",
    text: "contact",
  },
];

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setIsScroll] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 99) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="top-0 left-0 right-0 fixed w-full">
      <div
        className={[
          "py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl xl:max-w-7xl",
          scroll ? "bg-white" : "",
        ].join(" ")}
      >
        <div className="flex items-center space-x-6">
          <Link href="/" legacyBehavior>
            <a className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center">
              <img
                src={profile.src}
                className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
              />
              <span className="font-semibold leading-[160%]">It's me</span>
            </a>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {menus.map((menu, idx) => (
                <li key={idx}>
                  <Link href={menu.hef} legacyBehavior>
                    <a className="px-3 py-2 leading-[160%] text-sm">
                      {menu.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden lg:block md:block lg:flex items-center">
            <Social className="lg:flex md:hidden lg:block  space-x-6" />
            <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full lg:ml-6">
              Download CV
            </button>
          </div>

          <button className="md:hidden p-2 cursor-pointer" onClick={handleNav}>
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
              ? " fixed left-0 top-0 w-[308px] sm:hidden h-full bg-white ease-in duration-500"
              : "fixed left-[-100%] w-[308px] h-screen top-0 p-4 ease-in duration-500 bg-white"
          }
        >
          <div className="flex w-full justify-center mt-[43px]">
            <div className="flex flex-col items-center ">
              <Link href="/" legacyBehavior>
                <a className="flex py-2 px-4 space-x-2  items-center">
                  <img
                    src={profile.src}
                    className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
                  />
                  <span className="font-semibold leading-[160%]">It's me</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center mt-4">
            <ul className="flex flex-col items-center space-y-2 ">
              {menus.map((menu, idx) => (
                <li key={idx} className="py-3 px-[133px]">
                  <Link href={menu.hef} legacyBehavior>
                    <a className="leading-[160%] text-sm">{menu.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="fixed bottom-0 w-[308px] flex justify-center mb-[60px]">
            <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full lg:ml-6">
              Download CV
            </button>
          </div>
        </div>
        {/* end menu humberger */}
      </div>
    </header>
  );
}
