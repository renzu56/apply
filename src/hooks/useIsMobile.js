// src/hooks/useIsMobile.js
import { useEffect, useState } from "react";

export default function useIsMobile(max = 900) {
  const get = () =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width:${max}px)`).matches
      : false;

  const [isMobile, setIsMobile] = useState(get);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width:${max}px)`);
    const handler = (e) => setIsMobile(e.matches);

    // support both APIs
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    setIsMobile(mq.matches);

    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, [max]);

  return isMobile;
}
