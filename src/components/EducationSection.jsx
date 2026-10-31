import React, { useState } from "react";
import { sound } from "../utils/sound";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection({ education }) {
  const [selectedId, setSelectedId] = useState(education[0]?.id || "bba");
  const selected = education.find((e) => e.id === selectedId) || education[0];

  const handleSelect = (id) => {
    sound.playClick();
    setSelectedId(id);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTimeout(() => {
        const inspector = document.getElementById("education-inspector");
        if (inspector) {
          inspector.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch font-mono animate-fadeIn">
      {/* Left Column: Education List */}
      <div className="w-full md:w-[320px] lg:w-[360px] flex-none flex flex-col gap-3">
        {education.map((rec, idx) => {
          const isSelected = rec.id === selectedId;
          return (
            <div
              key={rec.id}
              onClick={() => handleSelect(rec.id)}
              className={`p-4 sm:p-5 border-2 rounded-sm cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#1c1b18] text-white dark:bg-[#201f1a] dark:text-white border-[#1c1b18] dark:border-[#d4701a] shadow-md"
                  : "bg-white text-[#1c1b18] dark:bg-[#1a1916] dark:text-[#eae6dd] border-[#1c1b18] dark:border-[#38352e] hover:bg-[#eae8e0] dark:hover:bg-[#25231e]"
              }`}
            >
              <div className="flex justify-between items-center text-[11px] tracking-[0.18em] uppercase">
                <span className={isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"}>
                  ENTRY E-0{idx + 1}
                </span>
                <span className={isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"}>
                  {rec.years}
                </span>
              </div>
              <div className="font-display font-black text-[22px] sm:text-[26px] leading-tight uppercase mt-2 tracking-wide">
                {rec.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column: Active Education Panel */}
      <div
        id="education-inspector"
        className="flex-1 min-w-0 bg-[#181715] text-[#f4f3ef] border-2 border-[#181715] dark:border-[#38352e] p-5 sm:p-8 md:p-10 rounded-sm shadow-xl flex flex-col justify-between gap-6 scroll-mt-4"
      >
        <div className="flex justify-between items-center text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#d4701a] font-semibold border-b border-[#2d2b26] pb-3">
          <span>READING ACADEMIC FILE: {selected.years}</span>
          <span>SCORE: {selected.result}</span>
        </div>

        <div>
          <h3 className="m-0 font-display font-black text-[clamp(32px,5.5vw,60px)] uppercase leading-[1] text-white tracking-wide">
            {selected.title}
          </h3>
          <div className="text-[13px] tracking-[0.12em] uppercase text-[#f0a04b] font-semibold mt-2">
            {selected.school}
          </div>
          <div className="text-[12px] tracking-[0.1em] uppercase text-[#a39d8e] mt-0.5">
            {selected.board}
          </div>
        </div>

        <div className="bg-[#22201b] p-4 sm:p-5 border-l-4 border-[#d4701a] rounded-sm">
          <div className="text-[11px] tracking-[0.18em] uppercase text-[#f0a04b] font-bold mb-1.5">
            COURSEWORK & CURRICULUM:
          </div>
          <p className="m-0 text-[14px] sm:text-[15px] leading-relaxed text-[#dedad0]">
            {selected.details}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-[#2d2b26] flex items-center justify-between text-[11.5px] uppercase tracking-[0.14em]">
          <span className="text-[#a39d8e]">STATUS: OFFICIAL RECORD</span>
          <span className="font-bold text-[#3f7a4e]">CGPA 8.56 (GRADE A+)</span>
        </div>
      </div>
    </section>
  );
}
