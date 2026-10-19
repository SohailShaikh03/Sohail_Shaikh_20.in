import React, { useState, useEffect } from "react";
import { sound } from "../utils/sound";
import { Sun, Moon, Printer, Star, Volume2, VolumeX } from "lucide-react";

export default function TopBar({
  soundMuted,
  onToggleSound,
  onOpenReviews,
  darkMode,
  onToggleDarkMode,
  onOpenResume
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

  const handlePrintClick = () => {
    sound.playClick();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.print();
    }
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-y-2.5 py-3.5 sm:py-5 border-b-2 border-[#1c1b18] dark:border-[#38352e] text-[12px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#66625a] dark:text-[#a09c91] font-mono transition-colors">
      {/* Bureau ID & Time */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
        <span className="font-semibold text-[#1c1b18] dark:text-[#f3f2ed] text-[11.5px] sm:text-[13px]">
          DEV BUREAU <span className="hidden xs:inline">/</span> <span className="hidden xs:inline">PERSONNEL ARCHIVE</span>
        </span>
        <span className="hidden md:inline-block text-[#a39d8e] dark:text-[#555146]">|</span>
        <span className="hidden md:inline-flex items-center gap-2 text-[#4a473f] dark:text-[#c4bfb3]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#d4701a] animate-pulse" />
          {timeStr || "PUNE, IN"}
        </span>
      </div>

      {/* Status & Controls */}
      <div className="flex items-center flex-wrap gap-1.5 sm:gap-3">
        {/* Open to Work Badge */}
        <div className="hidden xs:flex items-center gap-1.5 text-[#1c1b18] dark:text-[#f3f2ed] font-medium text-[11px] sm:text-[12px] mr-1">
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3f7a4e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#3f7a4e]" />
          </span>
          <span className="hidden sm:inline">OPEN TO WORK</span>
        </div>

        {/* Dark Mode Switcher */}
        <button
          onClick={() => {
            sound.playMode();
            onToggleDarkMode();
          }}
          title={darkMode ? "Switch to Light dossier theme" : "Switch to Dark terminal theme"}
          className="no-print inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] border border-[#cfcabb] dark:border-[#3e3b33] hover:border-[#1c1b18] dark:hover:border-[#f0a04b] text-[#1c1b18] dark:text-[#f3f2ed] hover:bg-[#fbfaf6] dark:hover:bg-[#25231e] rounded-sm transition-all"
        >
          {darkMode ? (
            <>
              <Sun className="w-3 h-3 text-[#f0a04b]" />
              <span className="font-semibold text-[#f0a04b]">LIGHT</span>
            </>
          ) : (
            <>
              <Moon className="w-3 h-3 text-[#66625a]" />
              <span>DARK</span>
            </>
          )}
        </button>

        {/* Reviews Quick Link */}
        {onOpenReviews && (
          <button
            onClick={onOpenReviews}
            title="Open Reviews & Community Feedback"
            className="no-print hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] border border-[#cfcabb] dark:border-[#3e3b33] hover:border-[#1c1b18] dark:hover:border-[#f0a04b] text-[#1c1b18] dark:text-[#f3f2ed] hover:bg-[#fbfaf6] dark:hover:bg-[#25231e] rounded-sm transition-colors font-medium"
          >
            <Star className="w-3 h-3 text-[#d4701a] fill-[#d4701a]" />
            <span>REVIEWS</span>
          </button>
        )}

        {/* Audio Toggle */}
        <button
          onClick={() => {
            onToggleSound();
          }}
          title={soundMuted ? "Enable mechanical audio clicks" : "Mute audio clicks"}
          className="no-print hidden md:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] border border-[#cfcabb] dark:border-[#3e3b33] hover:border-[#1c1b18] dark:hover:border-[#f0a04b] text-[#1c1b18] dark:text-[#f3f2ed] hover:bg-[#fbfaf6] dark:hover:bg-[#25231e] rounded-sm transition-colors"
        >
          {soundMuted ? <VolumeX className="w-3 h-3 text-[#a39d8e]" /> : <Volume2 className="w-3 h-3 text-[#b45a12] dark:text-[#f0a04b]" />}
          <span className={soundMuted ? "text-[#a39d8e] dark:text-[#736e63]" : "text-[#b45a12] dark:text-[#f0a04b] font-semibold"}>
            {soundMuted ? "OFF" : "AUDIO"}
          </span>
        </button>

        {/* Print Dossier / Resume */}
        <button
          onClick={handlePrintClick}
          title="Open Resume & Print / Export PDF"
          className="no-print inline-flex items-center gap-1.5 px-3 py-1 text-[11px] border border-[#1c1b18] dark:border-[#f0a04b] bg-[#1c1b18] dark:bg-[#f0a04b] text-[#f3f2ed] dark:text-[#1c1b18] hover:bg-[#d4701a] dark:hover:bg-white hover:border-[#d4701a] dark:hover:border-white rounded-sm transition-all font-semibold shadow-sm active:translate-y-0.5"
        >
          <Printer className="w-3 h-3" />
          <span>PRINT FILE</span>
        </button>
      </div>
    </header>
  );
}
