import React from "react";
import { sound } from "../utils/sound";
import { Sun, Moon, Printer, Volume2, VolumeX, FileText } from "lucide-react";

export default function TopBar({
  soundMuted,
  onToggleSound,
  darkMode,
  onToggleDarkMode,
  onOpenResume
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-2 py-3.5 border-b border-[#1c1b18] dark:border-[#38352e] text-[12px] sm:text-[13px] tracking-[0.16em] uppercase text-[#66625a] dark:text-[#a09c91] font-mono transition-colors">
      {/* Bureau Title */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-[#1c1b18] dark:text-white tracking-widest text-[12px] sm:text-[13px]">
          DEV BUREAU / PERSONNEL ARCHIVE
        </span>
      </div>

      {/* Right controls: Status indicator + Controls */}
      <div className="flex items-center gap-3 sm:gap-4 no-print">
        {/* Open to Work with Green Indicator Dot */}
        <div className="flex items-center gap-2 text-[#1c1b18] dark:text-white font-bold text-[11px] sm:text-[12px] tracking-[0.14em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3f7a4e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3f7a4e]" />
          </span>
          <span>OPEN TO WORK</span>
        </div>

        <span className="text-[#cfcabb] dark:text-[#4a473f] hidden sm:inline">|</span>

        {/* Dark/Light mode toggle */}
        <button
          onClick={() => {
            sound.playMode();
            onToggleDarkMode();
          }}
          title={darkMode ? "Switch to Light mode" : "Switch to Dark mode"}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#66625a] dark:text-[#a09c91] hover:text-[#1c1b18] dark:hover:text-white transition-colors"
        >
          {darkMode ? <Sun className="w-3.5 h-3.5 text-[#f0a04b]" /> : <Moon className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{darkMode ? "LIGHT" : "DARK"}</span>
        </button>

        {/* Audio click toggle */}
        <button
          onClick={() => onToggleSound()}
          title={soundMuted ? "Enable mechanical sounds" : "Mute sounds"}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#66625a] dark:text-[#a09c91] hover:text-[#1c1b18] dark:hover:text-white transition-colors"
        >
          {soundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#d4701a]" />}
        </button>

        {/* Print File */}
        <button
          onClick={() => {
            sound.playClick();
            if (onOpenResume) onOpenResume();
          }}
          title="Open Resume / Print File"
          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1c1b18] dark:bg-[#f3f2ed] text-[#f3f2ed] dark:text-[#1c1b18] hover:bg-[#d4701a] dark:hover:bg-[#d4701a] dark:hover:text-white text-[10.5px] font-bold tracking-[0.1em] rounded-[1px] transition-all"
        >
          <Printer className="w-3 h-3" />
          <span className="hidden sm:inline">PRINT FILE</span>
        </button>
      </div>
    </header>
  );
}
