import React from "react";
import BootstrapIcon from "../Svgs/bootstrap";
import PhpIcon from "../Svgs/php";
import ReactIcon from "../Svgs/react";
import YiiIcon from "../Svgs/yii";

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
  ];
  const handleFind = (techCode) => {
    const arr = Icon.find((item) => item.code === techCode);
    console.log(techCode, "arr");
    return arr?.icon;
  };
  return <>{handleFind(data)}</>;
}
