import React, { useEffect } from "react";
import { sound } from "../utils/sound";

export default function ArchiveNav({ activeTab, onSelectTab }) {
  const tabs = [
    {
      id: "certificates",
      title: "CERTIFICATIONS & TRAINING",
      subtitle: "6 RECORDS",
      keyHint: "1 or C"
    },
    {
      id: "projects",
      title: "PROJECTS",
      subtitle: "4 FILES",
      keyHint: "2 or P"
    },
    {
      id: "education",
      title: "EDUCATION",
      subtitle: "3 RECORDS",
      keyHint: "3 or E"
    },
    {
      id: "skills",
      title: "SKILLS",
      subtitle: "4 GROUPS",
      keyHint: "4 or S"
    },
    {
      id: "reviews",
      title: "REVIEWS",
      subtitle: "TESTIMONIALS",
      keyHint: "5 or R"
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target?.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === "1" || key === "c") {
        sound.playTab();
        onSelectTab("certificates");
      } else if (key === "2" || key === "p") {
        sound.playTab();
        onSelectTab("projects");
      } else if (key === "3" || key === "e") {
        sound.playTab();
        onSelectTab("education");
      } else if (key === "4" || key === "s") {
        sound.playTab();
        onSelectTab("skills");
      } else if (key === "5" || key === "r") {
        sound.playTab();
        onSelectTab("reviews");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSelectTab]);

  return (
    <div className="flex flex-col gap-2 pt-2 font-mono">
      {/* Label matching screenshot */}
      <div className="flex items-center justify-between">
        <span className="text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#66625a] dark:text-[#a09c91] font-semibold">
          OPEN A FILE
        </span>
        <span className="hidden sm:inline-block text-[10.5px] tracking-[0.14em] text-[#a39d8e] dark:text-[#6e6a5f]">
          [NAV KEYS: 1-5]
        </span>
      </div>

      {/* 5 Tab cards row */}
      <nav
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3"
        aria-label="Dossier section files"
      >
        {tabs.map((tab, idx) => {
          const isActive = activeTab === tab.id;
          const isLastOnMobile = idx === 4;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playTab();
                onSelectTab(tab.id);
              }}
              aria-selected={isActive}
              role="tab"
              title={`Press ${tab.keyHint} to open ${tab.title}`}
              className={`p-3 sm:p-4 text-left transition-all border-2 rounded-sm cursor-pointer flex flex-col justify-between min-h-[76px] sm:min-h-[88px] active:translate-y-0.5 ${
                isLastOnMobile ? "col-span-2 sm:col-span-1" : ""
              } ${
                isActive
                  ? "bg-[#1c1b18] text-white dark:bg-[#f3f2ed] dark:text-[#1c1b18] border-[#1c1b18] dark:border-[#f3f2ed] shadow-md -translate-y-0.5"
                  : "bg-white text-[#1c1b18] dark:bg-[#1a1916] dark:text-[#dedad0] border-[#1c1b18] dark:border-[#38352e] hover:bg-[#eae8e0] dark:hover:bg-[#25231e]"
              }`}
            >
              <div className="font-display font-black text-[15px] sm:text-[20px] tracking-wide uppercase leading-tight break-words">
                {tab.title}
              </div>
              <div
                className={`text-[10px] sm:text-[11px] tracking-[0.12em] uppercase mt-1 truncate ${
                  isActive
                    ? "text-[#f0a04b] dark:text-[#b45a12] font-semibold"
                    : "text-[#66625a] dark:text-[#a09c91]"
                }`}
              >
                {tab.subtitle}
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
