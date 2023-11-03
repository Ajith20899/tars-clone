"use client"

import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // You can adjust the threshold value according to your requirements

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 480); // You can adjust the threshold value here as well
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that effect runs only once after initial render

  return isMobile;
}
