import React, { useState, useEffect } from "react";
import { sound } from "../utils/sound";

export default function TopBar({
  soundMuted,
  onToggleSound,
  reviewCount = 8,
  onOpenReviews
}) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (Indian Standard Time)
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setTimeStr(now.toLocaleTimeString("en-GB", options) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-y-3 py-5 border-b-2 border-[#1c1b18] text-[13px] tracking-[0.18em] uppercase text-[#66625a] font-mono">
      {/* Bureau ID & Time */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <span className="font-semibold text-[#1c1b18]">
          DEV BUREAU / PERSONNEL ARCHIVE
        </span>
        <span className="hidden md:inline-block text-[#a39d8e]">|</span>
        <span className="hidden md:inline-flex items-center gap-2 text-[#4a473f]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#d4701a] animate-pulse" />
          {timeStr || "PUNE, IN"}
        </span>
      </div>

      {/* Status & Controls */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Open to Work Badge */}
        <div className="flex items-center gap-2 text-[#1c1b18] font-medium text-[12px]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3f7a4e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3f7a4e]" />
          </span>
          <span className="hidden sm:inline">OPEN TO WORK</span>
        </div>

        {/* Reviews Quick Link */}
        {onOpenReviews && (
          <button
            onClick={onOpenReviews}
            title="Open Reviews & Community Feedback"
            className="no-print inline-flex items-center gap-1 px-2.5 py-1 text-[11px] border border-[#cfcabb] hover:border-[#1c1b18] text-[#1c1b18] hover:bg-[#fbfaf6] rounded-sm transition-colors font-medium"
          >
            <span className="text-[#d4701a] font-bold">★</span>
            <span>REVIEWS</span>
          </button>
        )}

        {/* Audio Toggle */}
        <button
          onClick={() => {
            onToggleSound();
          }}
          title={soundMuted ? "Enable mechanical audio clicks" : "Mute audio"}
          className="no-print hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] border border-[#cfcabb] hover:border-[#1c1b18] text-[#1c1b18] hover:bg-[#fbfaf6] rounded-sm transition-colors"
        >
          <span>AUDIO:</span>
          <span className={soundMuted ? "text-[#a39d8e]" : "text-[#b45a12] font-semibold"}>
            {soundMuted ? "OFF" : "ON"}
          </span>
        </button>

        {/* Print Dossier */}
        <button
          onClick={handlePrint}
          title="Print or save dossier as PDF"
          className="no-print inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] border border-[#1c1b18] bg-[#1c1b18] text-[#f3f2ed] hover:bg-[#d4701a] hover:border-[#d4701a] rounded-sm transition-colors font-semibold"
        >
          <span>PRINT FILE</span>
        </button>
      </div>
    </header>
  );
}
