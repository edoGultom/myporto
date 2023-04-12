import Link from "next/link";
import React from "react";
import { social } from "../../data";

// social menu

export default function Social(props) {
  social;
  return (
    <div {...props}>
      {social.map((item, idx) => (
        <Link href={item.href} target="_blank" key={idx}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
