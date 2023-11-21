import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [screen, setScreen] = useState<"desktop" | "tablet" | "mobile">(
    window.innerWidth > 1024
      ? "desktop"
      : window.innerWidth > 768
      ? "tablet"
      : "mobile"
  );
  useEffect(() => {
    const handleResize = () => {
      setScreen(
        window.innerWidth > 1024
          ? "desktop"
          : window.innerWidth > 768
          ? "tablet"
          : "mobile"
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isDesktop: screen === "desktop",
    isTablet: screen === "tablet",
    isMobile: screen === "mobile",
  };
};
