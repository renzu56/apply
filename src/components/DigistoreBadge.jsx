// src/components/DigistoreBadge.jsx
import { useEffect } from "react";

export default function DigistoreBadge() {
  useEffect(() => {
    // Prevent double-insert (StrictMode, route changes, etc.)
    if (window.__ds24BadgeLoaded) return;
    window.__ds24BadgeLoaded = true;

    if (!document.getElementById("ds24-badge-script")) {
      const script = document.createElement("script");
      script.id = "ds24-badge-script";
      script.src =
        "https://www.digistore24.com/trusted-badge/40889/AIxWTaH9SKEqPJt/salespage";
      script.async = true;
      document.body.appendChild(script);
    }

    // No cleanup: removing only the script leaves the injected badge behind,
    // which then gets duplicated on the next mount.
  }, []);

  return null;
}
