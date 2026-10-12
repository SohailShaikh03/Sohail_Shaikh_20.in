import React, { useState } from "react";
import { sound } from "../utils/sound";

export default function RecordSection({ education, commendations }) {
  const [openRecordId, setOpenRecordId] = useState(education[0]?.id || "bba");

  const toggleRecord = (id) => {
    sound.playClick();
    setOpenRecordId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="flex flex-wrap gap-10 items-stretch font-mono animate-fadeIn">
      {/* Left Column: Education Record Accordion */}
      <div className="flex-1 basis-[440px] min-w-0 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-1">
          <div className="text-[12px] tracking-[0.2em] uppercase text-[#b45a12] font-semibold">
            Academic Track (Tap Entry to Expand):
          </div>
          <div className="text-[11px] tracking-[0.14em] text-[#66625a]">
            SAVITRIBAI PHULE PUNE UNIV.
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {education.map((rec) => {
            const isOpen = rec.id === openRecordId;
            return (
              <div
                key={rec.id}
                className="border-2 border-[#1c1b18] bg-[#fbfaf6] transition-all shadow-sm rounded-sm overflow-hidden"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleRecord(rec.id)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center gap-4 w-full text-left p-4 sm:p-5 min-h-[44px] hover:bg-[#f3f2ed] transition-colors"
                >
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[12.5px] tracking-[0.14em] uppercase text-[#66625a] font-medium">
                      {rec.years}
                    </span>
                    <span className="text-[17.5px] font-bold text-[#1c1b18] tracking-tight">
                      {rec.title}
                    </span>
                  </div>
                  <span className="text-[24px] font-bold text-[#b45a12] flex-none px-2 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="p-4 sm:p-6 grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-y-2.5 sm:gap-y-3 gap-x-3 sm:gap-x-4 text-[13px] sm:text-[14px] border-t-2 border-[#1c1b18] bg-white leading-relaxed animate-fadeIn">
                    <div className="text-[#66625a] uppercase tracking-[0.1em] text-[11px] pt-0.5">
                      SCHOOL
                    </div>
                    <div className="font-medium text-[#1c1b18]">{rec.school}</div>

                    <div className="text-[#66625a] uppercase tracking-[0.1em] text-[11px] pt-0.5">
                      BOARD / UNIV
                    </div>
                    <div>{rec.board}</div>

                    <div className="text-[#66625a] uppercase tracking-[0.1em] text-[11px] pt-0.5">
                      SCORE
                    </div>
                    <div className="font-bold text-[#b45a12] text-[15px]">
                      {rec.result}
                    </div>

                    {rec.details && (
                      <>
                        <div className="text-[#66625a] uppercase tracking-[0.1em] text-[11px] pt-0.5">
                          CURRICULUM
                        </div>
                        <div className="text-[13px] text-[#4a473f]">{rec.details}</div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Commendations & Certifications */}
      <div className="flex-1 basis-[380px] min-w-0 flex flex-col gap-3">
        <div className="text-[12px] tracking-[0.2em] uppercase text-[#b45a12] font-semibold pb-1">
          Commendations &amp; Leadership Record:
        </div>

        <div className="flex flex-col gap-3">
          {commendations.map((c, idx) => {
            const isDark = idx < 2;
            return (
              <div
                key={idx}
                className={`p-5 flex flex-col gap-2 rounded-sm border-2 border-[#1c1b18] shadow-sm transition-all hover:-translate-x-1 ${
                  isDark
                    ? "bg-[#1c1b18] text-[#f3f2ed]"
                    : "bg-[#fbfaf6] text-[#1c1b18]"
                }`}
              >
                <div className="flex justify-between items-center text-[11.5px] tracking-[0.2em] uppercase font-bold">
                  <span className={isDark ? "text-[#f0a04b]" : "text-[#b45a12]"}>
                    {c.type}
                  </span>
                  <span className={isDark ? "text-[#a39d8e]" : "text-[#66625a]"}>
                    {c.issuer}
                  </span>
                </div>
                <div className="text-[16px] font-bold leading-snug">
                  {c.title}
                </div>
                <div
                  className={`text-[13px] leading-relaxed ${
                    isDark ? "text-[#e6e2d6]" : "text-[#66625a]"
                  }`}
                >
                  {c.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
