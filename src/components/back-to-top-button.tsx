"use client";

import { Button } from "@/components/ui/button";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showButton ? (
    <Button
      size="icon"
      className="fixed bottom-4 right-4 p-2 shadow-md z-50 bg-primary transition-all"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <IconArrowUp />
    </Button>
  ) : null;
}
