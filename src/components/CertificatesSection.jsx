import React, { useState } from "react";
import { sound } from "../utils/sound";
import { Award, CheckCircle2, Trophy, Star } from "lucide-react";

export default function CertificatesSection({ commendations }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = commendations[selectedIdx] || commendations[0];

  const handleSelect = (idx) => {
    sound.playClick();
    setSelectedIdx(idx);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTimeout(() => {
        const inspector = document.getElementById("certificate-inspector");
        if (inspector) {
          inspector.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch font-mono animate-fadeIn">
      {/* Left Column: List of Certificates */}
      <div className="w-full md:w-[320px] lg:w-[360px] flex-none flex flex-col gap-3">
        {commendations.map((item, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <div
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`p-4 sm:p-5 border-2 rounded-sm cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#1c1b18] text-white dark:bg-[#201f1a] dark:text-white border-[#1c1b18] dark:border-[#d4701a] shadow-md"
                  : "bg-white text-[#1c1b18] dark:bg-[#1a1916] dark:text-[#eae6dd] border-[#1c1b18] dark:border-[#38352e] hover:bg-[#eae8e0] dark:hover:bg-[#25231e]"
              }`}
            >
              <div className="flex justify-between items-center text-[11px] tracking-[0.18em] uppercase">
                <span className={isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"}>
                  RECORD C-0{idx + 1}
                </span>
                <span className={isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"}>
                  {item.type}
                </span>
              </div>
              <div className="font-display font-black text-[22px] sm:text-[26px] leading-tight uppercase mt-2 tracking-wide">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column: Active Certificate Details Panel */}
      <div
        id="certificate-inspector"
        className="flex-1 min-w-0 bg-[#181715] text-[#f4f3ef] border-2 border-[#181715] dark:border-[#38352e] p-5 sm:p-8 md:p-10 rounded-sm shadow-xl flex flex-col justify-between gap-6 scroll-mt-4"
      >
        <div className="flex justify-between items-center text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#d4701a] font-semibold border-b border-[#2d2b26] pb-3">
          <span>READING RECORD C-0{selectedIdx + 1}</span>
          <span>{selected.type}</span>
        </div>

        <div>
          <div className="text-[12.5px] tracking-[0.16em] uppercase text-[#f0a04b] font-bold">
            ISSUER: {selected.issuer}
          </div>
          <h3 className="m-0 font-display font-black text-[clamp(32px,5.5vw,60px)] uppercase leading-[1] text-white tracking-wide mt-2">
            {selected.title}
          </h3>
        </div>

        <p className="m-0 text-[15px] sm:text-[16px] leading-[1.75] text-[#dedad0] max-w-[65ch]">
          {selected.detail}
        </p>

        <div className="mt-auto pt-6 border-t border-[#2d2b26] flex items-center justify-between text-[11.5px] uppercase tracking-[0.14em]">
          <span className="text-[#a39d8e]">STATUS: VERIFIED CERTIFICATION &amp; TRAINING</span>
          <span className="font-bold text-[#f0a04b]">DEV BUREAU CLEARED ★</span>
        </div>
      </div>
    </section>
  );
}
