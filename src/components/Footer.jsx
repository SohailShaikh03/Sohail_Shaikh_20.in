import React from "react";
import { sound } from "../utils/sound";

export default function Footer({ fileCode, location, onOpenReviews }) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-[#1c1b18] text-[12px] tracking-[0.18em] uppercase text-[#66625a] font-mono">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 bg-[#d4701a] inline-block" />
        <span>
          FILE {fileCode} / {location || "PUNE, IN"}
        </span>
      </div>

      <div className="flex items-center gap-6">
        {onOpenReviews && (
          <button
            onClick={onOpenReviews}
            className="no-print hover:text-[#d4701a] underline underline-offset-4 text-[#66625a]"
            title="Open Reviews"
          >
            [REVIEWS ★]
          </button>
        )}
        <button
          onClick={scrollToTop}
          className="no-print hover:text-[#1c1b18] underline underline-offset-4"
          title="Return to top of personnel file"
        >
          [TOP OF FILE ↑]
        </button>
        <span className="font-semibold text-[#1c1b18]">END OF RECORD</span>
      </div>
    </footer>
  );
}
