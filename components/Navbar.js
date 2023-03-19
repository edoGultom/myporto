import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import profile from "../assets/profile-2.jpg";
import Social from "./Social";

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
  return (
    <div className="py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl xl:max-w-7xl">
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

        <button className="md:hidden p-2">
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
