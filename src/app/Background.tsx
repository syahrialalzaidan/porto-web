"use client";

import { useEffect, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";

export default function Background() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check the window size on the client side only
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isLargeScreen && <Boxes />}</>;
}
