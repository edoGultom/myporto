import { useEffect, useLayoutEffect, useState } from "react";

// custome hook scrool
export default function useSrcoll() {
  const [scroll, setIsScroll] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);
  return scroll;
}
