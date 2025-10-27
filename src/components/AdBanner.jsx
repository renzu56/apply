import { useEffect, useRef } from "react";

export default function AdBanner({ slot }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // Verhindert doppeltes Initialisieren (z.B. React StrictMode in DEV)
    const already = ref.current.getAttribute("data-adsbygoogle-status") === "done";
    if (!already && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {}
    }
  }, []);

  return (
    <ins
      ref={ref}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5684569576031799"
      data-ad-slot={slot}               // <- deine Slot-ID hier
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
