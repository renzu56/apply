// src/components/DigistoreBadge.jsx
import { useEffect } from "react";

export default function DigistoreBadge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.digistore24.com/trusted-badge/40889/AIxWTaH9SKEqPJt/salespage";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // kein sichtbares Element nötig
}
