import {
  DevicePhoneMobileIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import AndroidIcon from "./components/Svgs/android";
import BootstrapIcon from "./components/Svgs/bootstrap";
import FacebookIcon from "./components/Svgs/facebook";
import GithubIcon from "./components/Svgs/github";
import InstagramIcon from "./components/Svgs/instagram";
import LinkedinIcon from "./components/Svgs/linkedin";
import NewIcon from "./components/Svgs/new";
import PhpIcon from "./components/Svgs/php";
import ReactIcon from "./components/Svgs/react";
import TailwindIcon from "./components/Svgs/tailwind";
import YiiIcon from "./components/Svgs/yii";
import Product from "./assets/project-1.png";
import Avatar from "./assets/avatar.png";
import { Slider1, Slider2, Slider3, Slider4 } from "./assets/contents";

export const linkCv =
  "https://drive.google.com/file/d/124cdk8siTj0Ac7-68ecDZIKa_BcSqNlT/view?usp=share_link";

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

// export const Slider = [
//   {
//     name: "Product 1",
//     image: <Slider1 />,
//   },
//   {
//     name: "Product 2",
//     image: <Slider2 />,
//   },
//   {
//     name: "Product 3",
//     image: <Slider3 />,
//   },
//   {
//     name: "Product 4",
//     image: <Slider4 />,
//   },
// ];
export const Slider = [<Slider1 />, <Slider2 />, <Slider3 />, <Slider4 />];
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

export const projects = {
  title: "All Projects",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      projectList: [
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: "",
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
      ],
    },
    {
      projectList: [
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          iconNew: <NewIcon />,
          title: "Application 1",
          subtitle: "Test Subtitle",
          technologyIcon: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "Many Project has been finished",
  projects: [
    {
      avatar: <Avatar />,
      company: "Badan Kepegawaian Daerah",
      apps: "SIMPEG, SKP, KAREJO, SMK",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
      screenshots: [
        {
          image: <Product />,
          technologies: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          technologies: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
      ],
    },
    {
      avatar: <Avatar />,
      company: "Dinas Koperasi",
      apps: "Antrian",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
      screenshots: [
        {
          image: <Product />,
          technologies: [
            <PhpIcon className="w-10 h-10 p-[6px]" />,
            <ReactIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          technologies: [
            <YiiIcon className="w-10 h-10 p-[6px]" />,
            <PhpIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
      ],
    },
    {
      avatar: <Avatar />,
      company: "MBPRU",
      apps: "Konsultant Property",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people sdsdsdf dfsd sdsdsds dsdsds dsdsds dsdsd.”",
      screenshots: [
        {
          image: <Product />,
          technologies: [
            <BootstrapIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
        {
          image: <Product />,
          technologies: [
            <ReactIcon className="w-10 h-10 p-[6px]" />,
            <TailwindIcon className="w-10 h-10 p-[6px]" />,
          ],
        },
      ],
    },
  ],
};
// export const projects = {
//   title: "Project 1",
//   image: <Product/>,
//   images: [
//     {
//       avatar: <Avatar/>,
//       name: "Badan Kepegawaian daerah",
//       occupation: "Manager of The New York Times",
//       message:
//         "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
//     },
//     {
//       avatar: <Avatar2Img />,
//       name: "Brandi Johns",
//       occupation: "Manager of The New York Times",
//       message:
//         "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
//     },
//     {
//       avatar: <Avatar3Img />,
//       name: "Paula Pfeffer",
//       occupation: "Manager of The New York Times",
//       message:
//         "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
//     },
//   ],
// };
