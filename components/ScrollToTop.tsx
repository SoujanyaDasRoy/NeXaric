"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration and always start from top
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
