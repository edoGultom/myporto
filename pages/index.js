import Link from "next/link";
import profile from "../assets/profile-2.jpg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import GithubIcon from "../components/svgs/github";
import InstagramIcon from "../components/svgs/instagram";
import LinkedinIcon from "../components/svgs/linkedin";
import FacebookIcon from "../components/svgs/facebook";
import TashIcon from "../components/svgs/tash";
import BookIcon from "../components/svgs/book";

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
// social menu
const icons = [
  {
    href: "https://github.com/edoGultom",
    icon: GithubIcon,
  },
  {
    href: "https://www.instagram.com/dwihrygtm",
    icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/dwi-herydo-gultom-a81302141",
    icon: LinkedinIcon,
  },

  {
    href: "https://www.linkedin.com/in/dwi-herydo-gultom-a81302141",
    icon: FacebookIcon,
  },
];

export default function Home() {
  return (
    <>
      <header className="fixed w-full">
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
              <div className="lg:flex md:hidden lg:block  space-x-6">
                {icons.map((icon, idx) => (
                  <a key={idx} hef={icon.href}>
                    <icon.icon />
                  </a>
                ))}
              </div>
              <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full lg:ml-6">
                Download CV
              </button>
            </div>

            <button className="md:hidden p-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 py-12">
        {/* Hero */}
        <section className="mt-[58px] m-auto md:max-w-3xl xl:max-w-7xl px-6">
          <div className="w-full  lg:flex lg:justify-between">
            <h3 className="flex flex-col font-light text-[34px] md:text-[72px] leading-[120%] md:leading-[102%] lg:leading-[102%]  ">
              <span className="flex items-center space-x-2  ">
                Let’s learn <TashIcon className="md:w-14 md:h-14" />
              </span>
              <span className="flex items-center space-x-2">
                to code <BookIcon className="md:w-14 md:h-14" />
              </span>
              <span>an application</span>
            </h3>
            <div className="flex items-center justify-between">
              <div className="mt-8 md:w-[374px]">
                <p className="text-base leading-[160%] text-left  leading-[169%]">
                  with me <span className="text-brand">edo gultom</span>, a
                  software developer who loves to share how to code in many
                  programing languages and multi platforms.
                </p>
                <div className="flex flex-row items-center space-x-4 mt-8">
                  <button className="bg-brand rounded-full py-2 px-6 text-white">
                    Start learn
                  </button>
                  <div className="block md:hidden flex items-center space-x-4">
                    {icons.map((icon, idx) => (
                      <a key={idx} hef={icon.href}>
                        <icon.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:hidden md:block flex flex-col items-center space-x-12 p-4">
                {icons.map((icon, idx) => (
                  <a key={idx} hef={icon.href}>
                    <icon.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
