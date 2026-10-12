import React, { useState } from "react";
import { sound } from "../utils/sound";

export default function SkillsSection({ groups }) {
  const [selectedGroupId, setSelectedGroupId] = useState(
    groups[0]?.id || "languages"
  );

  const selectedGroup =
    groups.find((g) => g.id === selectedGroupId) || groups[0];

  return (
    <section className="flex flex-wrap gap-8 items-stretch font-mono animate-fadeIn">
      {/* Left Column: Skill Category Selector */}
      <div className="flex-1 basis-[280px] max-w-full min-w-0 flex flex-col gap-3">
        <div className="text-[12px] tracking-[0.2em] uppercase text-[#66625a] pb-1 font-semibold">
          Select Capability Group:
        </div>

        {groups.map((g) => {
          const isSelected = g.id === selectedGroupId;
          return (
            <button
              key={g.id}
              onClick={() => {
                sound.playClick();
                setSelectedGroupId(g.id);
              }}
              className={`text-left p-4 sm:p-5 w-full block min-h-[44px] transition-all border-2 border-[#1c1b18] ${
                isSelected
                  ? "bg-[#1c1b18] text-[#f3f2ed] shadow-md -translate-x-1 sm:-translate-x-1.5"
                  : "bg-[#fbfaf6] text-[#1c1b18] hover:bg-[#eae8e0] hover:border-[#1c1b18]"
              }`}
            >
              <div
                className={`text-[12px] tracking-[0.18em] uppercase ${
                  isSelected ? "text-[#f0a04b]" : "opacity-70"
                }`}
              >
                {g.items.length} Modules Documented
              </div>
              <div className="font-display font-black text-[34px] leading-[1.05] uppercase mt-1 tracking-wide">
                {g.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Equipment List Panel */}
      <div className="flex-[2] basis-[460px] min-w-0 bg-[#fbfaf6] border-2 border-[#1c1b18] p-6 sm:p-10 flex flex-col gap-3 shadow-md rounded-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-[#1c1b18] pb-3 mb-2">
          <div className="text-[13px] tracking-[0.2em] uppercase font-bold text-[#b45a12]">
            {selectedGroup.label}: Equipment &amp; Tooling
          </div>
          <div className="text-[11px] tracking-[0.14em] uppercase text-[#66625a]">
            STATUS: VERIFIED
          </div>
        </div>

        {/* Skill Items Table */}
        <div className="divide-y divide-[#cfcabb]">
          {selectedGroup.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-between gap-y-1 gap-x-4 py-3.5 hover:bg-[#f3f2ed] px-2 transition-colors rounded-sm"
            >
              {/* Skill Name */}
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#d4701a]" aria-hidden="true" />
                <span className="text-[17px] font-semibold text-[#1c1b18]">
                  {item.name}
                </span>
              </div>

              {/* Badges: Level & Used In */}
              <div className="flex items-center gap-2.5">
                {item.used && (
                  <span className="text-[12px] tracking-[0.12em] uppercase text-[#66625a] bg-[#eae8e0] px-2.5 py-1 border border-[#cfcabb]">
                    Used in {item.used}
                  </span>
                )}
                {item.level && (
                  <span className="text-[11px] tracking-[0.1em] uppercase font-bold text-[#1c1b18] border border-[#1c1b18] px-2 py-0.5">
                    {item.level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Footer Note */}
        <div className="mt-auto pt-6 text-[12px] text-[#66625a] tracking-[0.08em] border-t border-[#cfcabb] flex justify-between items-center">
          <span>SOURCE: ATSS College Curriculum &amp; Project Codebases</span>
          <span className="font-bold text-[#1c1b18]">DEV BUREAU VERIFIED</span>
        </div>
      </div>
    </section>
  );
}
