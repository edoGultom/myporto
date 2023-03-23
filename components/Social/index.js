import Link from "next/link";
import React from "react";
import FacebookIcon from "../Svgs/facebook";
import GithubIcon from "../Svgs/github";
import InstagramIcon from "../Svgs/instagram";
import LinkedinIcon from "../Svgs/linkedin";

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
    href: "https://www.facebook.com/edo10395",
    icon: FacebookIcon,
  },
];
export default function Social(props) {
  return (
    <div {...props}>
      {icons.map((icon, idx) => (
        <Link href={icon.href} target="_blank" key={idx}>
          <icon.icon />
        </Link>
      ))}
    </div>
  );
}
