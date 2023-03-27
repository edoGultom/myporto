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
    id: 1,
    hef: "/",
    name: "home",
  },
  {
    id: 2,
    hef: "/about",
    name: "about",
  },
  {
    id: 3,
    hef: "/contact",
    name: "contact",
  },
];

export const tabs = [
  {
    id: 1,
    link: "#link1",
    href: "yii",
    icon: <YiiIcon />,
    name: "YII Framework",
    projectsList: [
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        company: "Badan Kepegawaian Daerah",
        apps: [
          "SISTEM PELAYANAN KEPEGAWAIAN TANPA KERTAS (PAKET KERAS)",
          "SISTEM MANAJEMEN KAREJO",
        ],
        responsibilities:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
        screenshots: [
          {
            isNew: true,
            src: "/images/slider01.jpg",
            techLabel: <YiiIcon />,
          },
          {
            isNew: false,
            src: "/images/slider02.jpg",
            techLabel: <YiiIcon />,
          },
        ],
      },
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        company: "Dinas Koperasi & UKM",
        apps: ["Sistem Antrian"],
        responsibilities:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
        screenshots: [
          {
            isNew: true,
            src: "/images/slider01.jpg",
            techLabel: [
              <YiiIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              <PhpIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
            ],
          },
        ],
      },
      {
        avatar: "/images/avatar.png",
        institution: "PROVINSI SUMATERA UTARA",
        company: "Muttaqin Bambang Purwanto Rozak Uswatun & Rekan (MBPRU)",
        apps: ["Sistem Konsultan Properti"],
        responsibilities:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
        screenshots: [
          {
            isNew: true,
            src: "/images/slider01.jpg",
            techLabel: [
              <YiiIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              <PhpIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    link: "#link2",
    href: "react",
    icon: <ReactIcon />,
    name: "React",
    projectsList: [],
  },
  {
    id: 3,
    link: "#link3",
    href: "native",
    icon: <ReactIcon />,
    name: "React Native",
    projectsList: [
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        company: "Badan Kepegawaian Daerah",
        apps: "KAREJO MOBILE",
        responsibilities:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
        screenshots: [
          {
            isNew: true,
            src: "/images/slider01.jpg",
            techLabel: [
              <YiiIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              <PhpIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
            ],
          },
        ],
      },
      {
        avatar: "/images/avatar.png",
        institution: "ANOTHER",
        company: "Another",
        apps: "FOOD MARKET",
        responsibilities:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
        screenshots: [
          {
            isNew: true,
            src: "/images/slider01.jpg",
            techLabel: [
              {
                label: <YiiIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
              },
              {
                label: (
                  <ReactIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />
                ),
              },
            ],
          },
        ],
      },
    ],
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
    responsibilities:
      "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    screenshots: [
      {
        isNew: true,
        src: "/images/slider01.jpg",
        // src: "/projects/simpeg_provsu.png",

        techLabel: [
          {
            label: (
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />
            ),
          },
          {
            label: <YiiIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
          {
            label: <PhpIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
        ],
      },
      {
        isNew: false,
        src: "/images/slider02.jpg",
        techLabel: [
          {
            label: <ReactIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
          {
            label: <YiiIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
        ],
      },
    ],
  },
  {
    avatar: "/images/avatar.png",
    company: "Dinas Koperasi",
    logoNew: "",
    apps: "Antrian",
    responsibilities:
      "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    screenshots: [
      {
        isNew: false,
        src: "/images/slider01.jpg",
        techLabel: [
          {
            label: (
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />
            ),
          },
          {
            label: <ReactIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
        ],
      },
      {
        isNew: false,
        src: "/images/slider02.jpg",
        techLabel: [
          {
            label: (
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />
            ),
          },
          {
            label: <ReactIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
        ],
      },
    ],
  },
  {
    avatar: "/images/avatar.png",
    company: "MBPRU",
    logoNew: <NewIcon className="absolute top-0  m-5" />,
    apps: "Konsultant Property",
    responsibilities:
      "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people sdsdsdf dfsd sdsdsds dsdsds dsdsds dsdsd.”",
    screenshots: [
      {
        isNew: true,
        src: "/images/slider01.jpg",
        techLabel: [
          {
            label: (
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />
            ),
          },
          {
            label: <ReactIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
        ],
      },
      {
        isNew: false,
        src: "/images/slider02.jpg",
        techLabel: [
          {
            label: (
              <BootstrapIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />
            ),
          },
          {
            label: <ReactIcon className="w-7 h-7 md:w-10 md:h-10 p-[6px]" />,
          },
        ],
      },
    ],
  },
];
