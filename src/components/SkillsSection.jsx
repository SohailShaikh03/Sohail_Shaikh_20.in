import React, { useState } from "react";
import { sound } from "../utils/sound";

export default function SkillsSection({ groups }) {
  const [selectedGroupId, setSelectedGroupId] = useState(
    groups[0]?.id || "backend"
  );

  const selectedGroup =
    groups.find((g) => g.id === selectedGroupId) || groups[0];

  const handleSelectGroup = (id) => {
    sound.playClick();
    setSelectedGroupId(id);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTimeout(() => {
        const panel = document.getElementById("skills-inspector");
        if (panel) {
          panel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch font-mono animate-fadeIn">
      {/* Left Column: Skill Category Selector */}
      <div className="w-full md:w-[320px] lg:w-[360px] flex-none flex flex-col gap-3">
        {groups.map((g) => {
          const isSelected = g.id === selectedGroupId;
          return (
            <button
              key={g.id}
              onClick={() => handleSelectGroup(g.id)}
              className={`p-4 sm:p-5 text-left border-2 rounded-sm cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#1c1b18] text-white dark:bg-[#201f1a] dark:text-white border-[#1c1b18] dark:border-[#d4701a] shadow-md"
                  : "bg-white text-[#1c1b18] dark:bg-[#1a1916] dark:text-[#eae6dd] border-[#1c1b18] dark:border-[#38352e] hover:bg-[#eae8e0] dark:hover:bg-[#25231e]"
              }`}
            >
              <div
                className={`text-[11px] sm:text-[11.5px] tracking-[0.18em] uppercase ${
                  isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"
                }`}
              >
                {g.items.length} MODULES
              </div>
              <div className="font-display font-black text-[22px] sm:text-[26px] leading-tight uppercase mt-2 tracking-wide">
                {g.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Skill Items Inspector Panel */}
      <div
        id="skills-inspector"
        className="flex-1 min-w-0 bg-[#181715] text-[#f4f3ef] border-2 border-[#181715] dark:border-[#38352e] p-5 sm:p-8 md:p-10 rounded-sm shadow-xl flex flex-col justify-between gap-6 scroll-mt-4"
      >
        <div className="flex justify-between items-center text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#d4701a] font-semibold border-b border-[#2d2b26] pb-3">
          <span>READING SKILL SPECIFICATION: {selectedGroup.label}</span>
          <span>STATUS: VERIFIED</span>
        </div>

        <div className="divide-y divide-[#2d2b26]">
          {selectedGroup.items.map((item, idx) => (
            <div
              key={idx}
              className="py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#d4701a] flex-none" />
                <span className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
                  {item.name}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px]">
                {item.used && (
                  <span className="text-[#a39d8e] bg-[#22201b] border border-[#3e3b33] px-2 py-0.5">
                    {item.used}
                  </span>
                )}
                {item.level && (
                  <span className="text-[#f0a04b] border border-[#f0a04b]/50 px-2 py-0.5 font-bold">
                    {item.level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-[#2d2b26] flex items-center justify-between text-[11.5px] uppercase tracking-[0.14em]">
          <span className="text-[#a39d8e]">TECH STACK VERIFICATION</span>
          <span className="font-bold text-[#f0a04b]">DEV BUREAU CLEARED</span>
        </div>
      </div>
    </section>
  );
}
