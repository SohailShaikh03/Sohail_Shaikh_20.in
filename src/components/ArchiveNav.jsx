import React, { useEffect } from "react";
import { sound } from "../utils/sound";

export default function ArchiveNav({ activeTab, onSelectTab }) {
  const tabs = [
    { id: "projects", code: "A", label: "Projects", hint: "Key 1 or A" },
    { id: "skills", code: "B", label: "Skills", hint: "Key 2 or B" },
    { id: "record", code: "C", label: "Record", hint: "Key 3 or C" },
    { id: "contact", code: "D", label: "Contact", hint: "Key 4 or D" },
    { id: "reviews", code: "E", label: "Reviews", hint: "Key 5 or E" },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input or textarea
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target?.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === "1" || key === "a") {
        sound.playTab();
        onSelectTab("projects");
      } else if (key === "2" || key === "b") {
        sound.playTab();
        onSelectTab("skills");
      } else if (key === "3" || key === "c") {
        sound.playTab();
        onSelectTab("record");
      } else if (key === "4" || key === "d") {
        sound.playTab();
        onSelectTab("contact");
      } else if (key === "5" || key === "e") {
        sound.playTab();
        onSelectTab("reviews");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSelectTab]);

  return (
    <div className="flex flex-col gap-0 pt-4">
      <div className="flex items-center justify-between pb-3">
        <div className="text-[13px] tracking-[0.22em] uppercase text-[#66625a] dark:text-[#a09c91] font-mono font-medium">
          Open an Archive Section
        </div>
        <div className="hidden sm:block text-[11px] tracking-[0.14em] text-[#a39d8e] dark:text-[#736e63] font-mono">
          [NAV KEYS: A / B / C / D / E]
        </div>
      </div>

      <nav
        className="flex overflow-x-auto no-scrollbar gap-1 sm:gap-0 border-b-2 border-[#1c1b18] dark:border-[#38352e] pb-1 sm:pb-0"
        aria-label="Archive sections"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playTab();
                onSelectTab(tab.id);
              }}
              title={tab.hint}
              aria-selected={isActive}
              role="tab"
              className={`px-3.5 sm:px-7 py-2.5 sm:py-3.5 min-h-[42px] sm:min-h-[46px] box-border text-[12.5px] sm:text-[14px] font-mono font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase -mb-[2px] transition-all flex items-center flex-none whitespace-nowrap rounded-t-sm sm:rounded-none ${
                isActive
                  ? "bg-[#1c1b18] dark:bg-[#f3f2ed] text-[#f3f2ed] dark:text-[#1c1b18] border-2 border-[#1c1b18] dark:border-[#f3f2ed] shadow-sm z-10"
                  : "bg-[#eae8e0]/40 dark:bg-[#191815] text-[#1c1b18] dark:text-[#dedad0] border-2 border-transparent hover:bg-[#eae8e0] dark:hover:bg-[#25231e] hover:text-[#b45a12] dark:hover:text-[#f0a04b]"
              }`}
            >
              <span
                className={`mr-2 sm:mr-2.5 text-[11px] sm:text-[12px] font-bold ${
                  isActive ? "text-[#f0a04b] dark:text-[#b45a12]" : "opacity-60"
                }`}
              >
                {tab.code}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
