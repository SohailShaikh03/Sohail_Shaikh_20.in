import React, { useState } from "react";
import { sound } from "../utils/sound";

export default function SkillsSection({ groups }) {
  const [selectedGroupId, setSelectedGroupId] = useState(
    groups[0]?.id || "languages"
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
      }, 60);
    }
  };

  return (
    <section className="flex flex-wrap gap-8 items-stretch font-mono animate-fadeIn">
      {/* Left Column: Skill Category Selector */}
      <div className="flex-1 basis-[280px] max-w-full min-w-0 flex flex-col gap-3">
        <div className="text-[12px] tracking-[0.2em] uppercase text-[#66625a] dark:text-[#a09c91] pb-1 font-semibold">
          Select Capability Group:
        </div>

        {groups.map((g) => {
          const isSelected = g.id === selectedGroupId;
          return (
            <button
              key={g.id}
              onClick={() => handleSelectGroup(g.id)}
              className={`text-left p-4 sm:p-5 w-full block min-h-[44px] transition-all border-2 ${
                isSelected
                  ? "bg-[#1c1b18] dark:bg-[#25231d] text-[#f3f2ed] border-[#1c1b18] dark:border-[#f0a04b] shadow-md -translate-x-1 sm:-translate-x-1.5"
                  : "bg-[#fbfaf6] dark:bg-[#191815] text-[#1c1b18] dark:text-[#f3f2ed] border-[#1c1b18] dark:border-[#38352e] hover:bg-[#eae8e0] dark:hover:bg-[#22211c]"
              }`}
            >
              <div
                className={`text-[11.5px] sm:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] uppercase ${
                  isSelected ? "text-[#f0a04b]" : "opacity-70 text-[#66625a] dark:text-[#a09c91]"
                }`}
              >
                {g.items.length} Modules Documented
              </div>
              <div className="font-display font-black text-[24px] sm:text-[34px] leading-[1.05] uppercase mt-1 tracking-wide">
                {g.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Equipment List Panel */}
      <div
        id="skills-inspector"
        className="flex-[2] basis-[460px] min-w-0 bg-[#fbfaf6] dark:bg-[#191815] border-2 border-[#1c1b18] dark:border-[#38352e] p-4 sm:p-8 md:p-10 flex flex-col gap-3 shadow-md rounded-sm scroll-mt-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-[#1c1b18] dark:border-[#38352e] pb-3 mb-2">
          <div className="text-[13px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b]">
            {selectedGroup.label}: Equipment &amp; Tooling
          </div>
          <div className="text-[11px] tracking-[0.14em] uppercase text-[#66625a] dark:text-[#a09c91]">
            STATUS: VERIFIED
          </div>
        </div>

        {/* Skill Items Table */}
        <div className="divide-y divide-[#cfcabb] dark:divide-[#38352e]">
          {selectedGroup.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-between gap-y-1 gap-x-4 py-3.5 hover:bg-[#f3f2ed] dark:hover:bg-[#22211c] px-2 transition-colors rounded-sm"
            >
              {/* Skill Name */}
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#d4701a]" aria-hidden="true" />
                <span className="text-[17px] font-semibold text-[#1c1b18] dark:text-[#f3f2ed]">
                  {item.name}
                </span>
              </div>

              {/* Badges: Level & Used In */}
              <div className="flex items-center gap-2.5">
                {item.used && (
                  <span className="text-[12px] tracking-[0.12em] uppercase text-[#66625a] dark:text-[#a09c91] bg-[#eae8e0] dark:bg-[#25231e] px-2.5 py-1 border border-[#cfcabb] dark:border-[#38352e]">
                    Used in {item.used}
                  </span>
                )}
                {item.level && (
                  <span className="text-[11px] tracking-[0.1em] uppercase font-bold text-[#1c1b18] dark:text-[#f3f2ed] border border-[#1c1b18] dark:border-[#f0a04b] px-2 py-0.5">
                    {item.level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Footer Note */}
        <div className="mt-auto pt-6 text-[12px] text-[#66625a] dark:text-[#a09c91] tracking-[0.08em] border-t border-[#cfcabb] dark:border-[#38352e] flex justify-between items-center">
          <span>SOURCE: ATSS College Curriculum &amp; Project Codebases</span>
          <span className="font-bold text-[#1c1b18] dark:text-[#f3f2ed]">DEV BUREAU VERIFIED</span>
        </div>
      </div>
    </section>
  );
}
