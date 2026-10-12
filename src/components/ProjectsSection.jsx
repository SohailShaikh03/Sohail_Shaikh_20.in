import React, { useState } from "react";
import { sound } from "../utils/sound";
import { ExternalLink, Code2 } from "lucide-react";

export default function ProjectsSection({ projects }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id || "orbit");

  const selectedProject =
    projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section className="flex flex-wrap gap-8 items-stretch font-mono animate-fadeIn">
      {/* Left Column: File Catalog Cards */}
      <div className="flex-1 basis-[320px] max-w-full min-w-0 flex flex-col gap-3">
        <div className="text-[12px] tracking-[0.2em] uppercase text-[#66625a] pb-1 font-semibold flex items-center justify-between">
          <span>Select Project File:</span>
          <span className="text-[11px] text-[#a39d8e]">[{projects.length} PROJECTS]</span>
        </div>

        {projects.map((proj) => {
          const isSelected = proj.id === selectedId;
          return (
            <div
              key={proj.id}
              onClick={() => {
                sound.playClick();
                setSelectedId(proj.id);
              }}
              className={`text-left p-5 w-full block min-h-[44px] transition-all border-2 border-[#1c1b18] cursor-pointer ${
                isSelected
                  ? "bg-[#1c1b18] text-[#f3f2ed] shadow-md -translate-x-1 sm:-translate-x-1.5"
                  : "bg-[#fbfaf6] text-[#1c1b18] hover:bg-[#eae8e0] hover:border-[#1c1b18]"
              }`}
            >
              {/* File header */}
              <div className="flex justify-between items-center gap-2 text-[12px] tracking-[0.18em] uppercase">
                <span className={isSelected ? "text-[#f0a04b]" : "opacity-70 font-semibold"}>
                  File {proj.code}
                </span>
                <span
                  className={`text-[11px] px-2 py-0.5 border ${
                    isSelected ? "border-[#f0a04b]/40 text-[#f0a04b]" : "border-current opacity-70"
                  }`}
                >
                  {proj.kind}
                </span>
              </div>

              {/* Title */}
              <div className="font-display font-black text-[38px] leading-[1.05] uppercase mt-2 tracking-wide">
                {proj.title}
              </div>

              {/* Subtitle */}
              <div
                className={`text-[12px] mt-1.5 truncate ${
                  isSelected ? "text-[#e6e2d6]" : "text-[#66625a]"
                }`}
              >
                {proj.type}
              </div>

              {/* Tech Badges Preview */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-current/15 text-[11px]">
                {proj.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-1.5 py-0.5 rounded text-[10.5px] ${
                      isSelected
                        ? "bg-white/10 text-[#f3f2ed]"
                        : "bg-black/5 text-[#4a473f]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
                {proj.tags.length > 4 && (
                  <span className="opacity-60 text-[10px] self-center">
                    +{proj.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Direct GitHub Link on Card */}
              {proj.repoUrl && (
                <div className="mt-3 pt-2 flex items-center justify-between text-[11px]">
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                    }}
                    className={`inline-flex items-center gap-1 font-bold underline underline-offset-2 ${
                      isSelected
                        ? "text-[#f0a04b] hover:text-white"
                        : "text-[#b45a12] hover:text-[#1c1b18]"
                    }`}
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] opacity-60">
                    {isSelected ? "ACTIVE FILE" : "CLICK TO INSPECT"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Column: Full File Inspector (Dark Dossier Screen) */}
      <div className="flex-[2] basis-[460px] min-w-0 bg-[#1c1b18] text-[#f3f2ed] p-6 sm:p-10 flex flex-col gap-6 border-2 border-[#1c1b18] shadow-lg rounded-sm">
        {/* Top File Meta */}
        <div className="flex flex-wrap justify-between items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#f0a04b] font-medium border-b border-[#33312b] pb-3">
          <span>READING FILE {selectedProject.code}</span>
          <span className="text-[#a39d8e]">CLASSIFICATION: {selectedProject.kind}</span>
        </div>

        {/* Project Headline & Title */}
        <div>
          <h2 className="m-0 font-display font-black text-[clamp(48px,7vw,86px)] leading-[0.95] uppercase tracking-wide text-white">
            {selectedProject.title}
          </h2>
          <div className="text-[13.5px] tracking-[0.16em] uppercase text-[#d4701a] font-semibold mt-1">
            {selectedProject.type}
          </div>
        </div>

        {/* Project Description (What the project is) */}
        <div className="flex flex-col gap-2">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#a39d8e] font-semibold">
            ABOUT THIS PROJECT:
          </div>
          <p className="m-0 max-w-[62ch] text-[16px] leading-[1.7] text-[#e6e2d6]">
            {selectedProject.blurb}
          </p>
        </div>

        {/* Functional Capabilities & Architecture Highlights */}
        {selectedProject.points && selectedProject.points.length > 0 && (
          <div className="bg-[#22211e] p-5 border-l-4 border-[#d4701a] rounded-sm">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#f0a04b] font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#d4701a]" />
              <span>CORE FUNCTIONALITY & ARCHITECTURE:</span>
            </div>
            <ul className="m-0 pl-5 flex flex-col gap-2.5 text-[14.5px] text-[#e6e2d6] leading-relaxed list-disc">
              {selectedProject.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Status / Scope Note */}
        {selectedProject.note && (
          <div className="text-[13px] border-2 border-dashed border-[#f0a04b]/60 p-3.5 text-[#f0a04b] bg-[#f0a04b]/5">
            <span className="font-bold mr-1.5">[TECHNICAL SCOPE]:</span>
            {selectedProject.note}
          </div>
        )}

        {/* Tech Stack & GitHub Action Link */}
        <div className="mt-auto pt-6 border-t border-[#33312b] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          {/* Tech Badges */}
          <div className="flex flex-col gap-2">
            <div className="text-[10.5px] tracking-[0.18em] uppercase text-[#a39d8e] font-bold">
              TECH STACK:
            </div>
            <div className="flex flex-wrap gap-2 text-[12px] tracking-[0.06em]">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="border border-[#e6e2d6]/30 text-[#e6e2d6] px-2.5 py-1 bg-black/40 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Source Link Button */}
          {selectedProject.repoUrl && (
            <a
              href={selectedProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#f0a04b] text-[#f0a04b] hover:bg-[#f0a04b] hover:text-[#1c1b18] text-[12.5px] tracking-[0.14em] uppercase font-bold transition-all no-underline shadow-sm flex-none active:translate-y-0.5"
            >
              <span>GITHUB REPO</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
