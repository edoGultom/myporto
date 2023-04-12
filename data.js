import {
  DevicePhoneMobileIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  ReactIcon,
  YiiIcon,
} from "./components/Icons";
export const linkCv =
  "https://drive.google.com/file/d/124cdk8siTj0Ac7-68ecDZIKa_BcSqNlT/view?usp=share_link";

// export const social = [
//   {
//     href: "https://github.com/edoGultom",
//     icon: <GithubIcon fill=" #fff" />,
//   },
//   {
//     href: "https://www.instagram.com/dwihrygtm",
//     icon: <InstagramIcon fill=" #fff" />,
//   },
//   {
//     href: "https://www.linkedin.com/in/dwi-herydo-gultom-a81302141",
//     icon: <LinkedinIcon fill=" #fff" />,
//   },
//   {
//     href: "https://www.facebook.com/edo10395",
//     icon: <FacebookIcon fill=" #fff" />,
//   },
// ];
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
    name: "YII ",
    projectsList: [
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        platform: "Web Development",
        company: "Dinas Koperasi",
        app: "Sistem Antrian",
        link: "http://206.189.94.13:206",
        description:
          "This application is a queuing application and consulting service for making a business.",
        screenshoots: {
          isNew: true,
          techCode: ["php", "yii", "bs"],
          src: "/images/diskop_1.png",
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "",
        platform: "Web Development",
        company: "Muttaqin Bambang Purwanto Rozak Uswatun & Rekan",
        app: "MBPRU TRUST",
        link: "http://www.mbprutrusted.com",
        description:
          "MBPRU & Rekan is a leading public and property appraisal consultant in Indonesia. This app is specially built for Nort Sumatera region.",
        screenshoots: {
          isNew: true,
          techCode: ["php", "yii", "bs"],
          src: "/images/mbpru.png",
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        platform: "Web Development",
        company: "Badan Kepegawaian Daerah",
        app: "SIMPEG Paket Keras",
        link: "https://simpegbkd.sumutprov.go.id",
        description:
          "This project is give some service to make esier for government employee to get datas about them, verify their data, propose of salary increase , propose  study permit and others. This app also as data source for other application and this project has integrated with data center. ",
        screenshoots: {
          isNew: false,
          techCode: ["php", "yii", "bs"],
          src: "/images/bkd_1.png",
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        platform: "Web Development",
        company: "Badan Kepegawaian Daerah",
        app: " Manajemen Kinerja",
        link: "https://karejo.sumutprov.go.id",
        description:
          "This project is used for employee to make their work plain during 1 years, and then their boss and admin will verify the plan of employee. This project can manage their activity until the employee get bonus every month.",
        screenshoots: {
          isNew: false,
          techCode: ["php", "yii", "bs"],
          src: "/images/bkd_3.png",
        },
      },
    ],
  },
  {
    id: 2,
    link: "#link2",
    href: "react",
    icon: <ReactIcon />,
    name: "React",
    projectsList: [
      {
        avatar: "/images/avatar.png",
        institution: "PEMERINTAH PROVINSI SUMATERA UTARA",
        platform: "Web Development",
        company: "BADAN KEPEGAWAIAN DAERAH",
        app: "Sistem Kinerja Pegawai",
        link: "",
        description:
          "This project is used for employee to make their work plain during 1 years, and then their boss and admin will verify the plan of employee.But the application must be stopped development, because the government wants the development faster and the time is very limited.",
        screenshoots: {
          isNew: false,
          techCode: ["yii", "react"],
          src: "/images/bkd_2.png",
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "",
        platform: "Web Development",
        company: "",
        app: "Furniture",
        link: "https://luxspace-react-tailwind.netlify.app",
        description:
          "This is another project built from scratch using react and json server as data provider.",
        screenshoots: {
          isNew: false,
          techCode: ["react", "tailwind"],
          src: "/images/furniture.png",
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "",
        platform: "Web Development",
        company: "",
        app: "Timer Mania",
        link: "https://timers-mania-react-ts.vercel.app ",
        description:
          "This is another project built from scratch using react type script.",
        screenshoots: {
          isNew: false,
          techCode: ["react", "ts"],
          src: "/images/react_ts.png",
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "",
        platform: "Web Development",
        company: "",
        app: "Food Community",
        link: "https://main--food-community.netlify.app",
        description: "This is another project built from scratch using react.",
        screenshoots: {
          isNew: false,
          techCode: ["react"],
          src: "/images/food_community.png",
        },
      },
    ],
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
        platform: "Mobile Development",
        company: "BADAN KEPEGAWAIAN DAERAH",
        app: "KAREJO",
        link: "https://play.google.com/store/apps/details?id=com.karejo_mobile",
        description:
          "This project as media for employees to make daily activity from their work plans, and then uploaded their document. In this app the boss can give a specific instruction to their employee and verify it and the last  the employee can do evaluate of performance to others employee.",
        screenshoots: {
          isNew: false,
          techCode: ["yii", "react", "redux"],
          src: [
            "/images/karejo_1.png",
            "/images/karejo_2.png",
            "/images/karejo_3.png",
            "/images/karejo_4.png",
          ],
        },
      },
      {
        avatar: "/images/avatar.png",
        institution: "",
        platform: "Mobile Development",
        company: "",
        app: "Food Market",
        link: "",
        description:
          "This is another project where we can order snacks to payment using midtrans integration as a transaction.",
        screenshoots: {
          isNew: false,
          techCode: ["yii", "react", "redux"],
          src: [
            "/images/fm_1.png",
            "/images/fm_2.png",
            "/images/fm_3.png",
            "/images/fm_4.png",
            "/images/fm_5.png",
          ],
        },
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
