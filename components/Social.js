import React from "react";
import FacebookIcon from "../components/svgs/facebook";
import GithubIcon from "../components/svgs/github";
import InstagramIcon from "../components/svgs/instagram";
import LinkedinIcon from "../components/svgs/linkedin";

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
export default function Social(props) {
  return (
    <div {...props}>
      {icons.map((icon, idx) => (
        <a key={idx} hef={icon.href}>
          <icon.icon />
        </a>
      ))}
    </div>
  );
}
