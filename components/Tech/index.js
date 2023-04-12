import React from "react";
import {
  BootstrapIcon,
  PhpIcon,
  ReactIcon,
  YiiIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../Svgs";

export default function Tech({ data, className }) {
  const Icon = [
    {
      code: "yii",
      icon: <YiiIcon {...className} />,
    },
    {
      code: "php",
      icon: <PhpIcon {...className} />,
    },
    {
      code: "bs",
      icon: <BootstrapIcon {...className} />,
    },
    {
      code: "react",
      icon: <ReactIcon {...className} />,
    },
    {
      code: "redux",
      icon: <ReduxIcon {...className} />,
    },
    {
      code: "tailwind",
      icon: <TailwindIcon {...className} />,
    },
    {
      code: "ts",
      icon: <TypeScriptIcon {...className} />,
    },
  ];
  const handleFind = (techCode) => {
    const arr = Icon.find((item) => item.code === techCode);
    return arr?.icon;
  };
  return <>{handleFind(data)}</>;
}
