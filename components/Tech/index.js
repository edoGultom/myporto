import React from "react";
import BootstrapIcon from "../Svgs/bootstrap";
import PhpIcon from "../Svgs/php";
import ReactIcon from "../Svgs/react";
import YiiIcon from "../Svgs/yii";
import ReduxIcon from "../Svgs/redux";
import TailwindIcon from "../Svgs/tailwind";
import TypeScriptIcon from "../Svgs/typescript";

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
    console.log(techCode, "arr");
    return arr?.icon;
  };
  return <>{handleFind(data)}</>;
}
