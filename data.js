import {
  DevicePhoneMobileIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import BootstrapIcon from "./components/Svgs/bootstrap";
import FacebookIcon from "./components/Svgs/facebook";
import GithubIcon from "./components/Svgs/github";
import InstagramIcon from "./components/Svgs/instagram";
import LinkedinIcon from "./components/Svgs/linkedin";
import PhpIcon from "./components/Svgs/php";
import ReactIcon from "./components/Svgs/react";
import TailwindIcon from "./components/Svgs/tailwind";
import YiiIcon from "./components/Svgs/yii";
// import Product from "./assets/project-1.png";
import Avatar from "./assets/avatar.png";
import { Slider1, Slider2, Slider3, Slider4 } from "./assets/contents";
import NewIcon from "./components/Svgs/new";

export const linkCv =
  "https://drive.google.com/file/d/124cdk8siTj0Ac7-68ecDZIKa_BcSqNlT/view?usp=share_link";

export const profile = {
  src: "/images/profile_four.jpg",
  alt: "Profile Picture",
};
export const navigation = [
  {
    hef: "/",
    name: "home",
  },
  {
    hef: "/about",
    name: "about",
  },
  {
    hef: "/contact",
    name: "contact",
  },
];

export const techTabs = [
  {
    id: 1,
    hef: "/yii",
    icon: <YiiIcon />,
    name: "YII Framework",
    // technologyIcon: [
    //   <BootstrapIcon className="w-10 h-10 p-[6px]" />,
    //   <PhpIcon className="w-10 h-10 p-[6px]" />,
    //   <TailwindIcon className="w-10 h-10 p-[6px]" />,
    // ],
  },
  {
    id: 2,
    hef: "/react",
    icon: <ReactIcon />,
    name: "React",
  },
  {
    id: 3,
    hef: "/react-native",
    icon: <ReactIcon />,
    name: "React Native",
  },
];
export const about = {
  subtitle:
    "Build and maintain websites or mobile application with +24k users active, improve and upgrade legacy web application and perform integration between applications",
  items: [
    {
      icon: <GlobeAsiaAustraliaIcon />,
      title: "Web Development",
      subtitle:
        "Build, developing and maintaining web application based on client requirements using YII as core framework.",
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "Mobile Development",
      subtitle:
        "Build, developing and maintaining mobile application using React Native as core libraries",
    },
  ],
};

export const contact = {
  name: "Dwi Herydo Gultom",
  role: "Fullstack & Mobile Developer",
  date: "March 10th, 1995",
  phone: "+6282-2858-1152-3",
  address: "Jl. Halat Gg. Rukun No. 15 , Medan Sumatera Utara",
  email: "edogultom10395@gmail.com",
};

export const social = [
  {
    href: "https://github.com/edoGultom",
    icon: <GithubIcon />,
  },
  {
    href: "https://www.instagram.com/dwihrygtm",
    icon: <InstagramIcon />,
  },
  {
    href: "https://www.linkedin.com/in/dwi-herydo-gultom-a81302141",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://www.facebook.com/edo10395",
    icon: <FacebookIcon />,
  },
];

export const projectsListPhp = [
  {
    avatar: "/images/avatar.png",
    company: "Badan Kepegawaian Daerah",
    apps: "SIMPEG, SKP, KAREJO, SMK",

    technologies: [
      <BootstrapIcon className="w-10 h-10 p-[6px]" />,
      <PhpIcon className="w-10 h-10 p-[6px]" />,
    ],
    message:
      "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",

    screenshots: [
      {
        logoNew: <NewIcon className="absolute top-0  m-5" />,
        src: "/images/slider01.jpg",
      },
      {
        logoNew: "",
        src: "/images/slider02.jpg",
      },
    ],
  },
  {
    avatar: "/images/avatar.png",
    company: "Dinas Koperasi",
    logoNew: "",
    apps: "Antrian",
    message:
      "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    screenshots: [
      {
        logoNew: "",
        src: "/images/slider01.jpg",
      },
      {
        logoNew: "",
        src: "/images/slider02.jpg",
      },
    ],
  },
  {
    avatar: "/images/avatar.png",
    company: "MBPRU",
    logoNew: <NewIcon className="absolute top-0  m-5" />,
    apps: "Konsultant Property",
    message:
      "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people sdsdsdf dfsd sdsdsds dsdsds dsdsds dsdsd.”",
    screenshots: [
      {
        logoNew: "",
        src: "/images/slider01.jpg",
      },
      {
        logoNew: <NewIcon className="absolute top-0  m-5" />,
        src: "/images/slider02.jpg",
      },
    ],
  },
];
