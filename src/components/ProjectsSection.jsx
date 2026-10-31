import React, { useState } from "react";
import { sound } from "../utils/sound";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectsSection({ projects }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id || "roots");

  const selectedProject =
    projects.find((p) => p.id === selectedId) || projects[0];

  const handleSelectProject = (id) => {
    sound.playClick();
    setSelectedId(id);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTimeout(() => {
        const inspector = document.getElementById("project-inspector");
        if (inspector) {
          inspector.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch font-mono animate-fadeIn">
      {/* Left Column: Stacked Project File Cards */}
      <div className="w-full md:w-[320px] lg:w-[360px] flex-none flex flex-col gap-3">
        {projects.map((proj) => {
          const isSelected = proj.id === selectedId;
          return (
            <div
              key={proj.id}
              onClick={() => handleSelectProject(proj.id)}
              className={`p-4 sm:p-5 border-2 rounded-sm cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#1c1b18] text-white dark:bg-[#201f1a] dark:text-white border-[#1c1b18] dark:border-[#d4701a] shadow-md"
                  : "bg-white text-[#1c1b18] dark:bg-[#1a1916] dark:text-[#eae6dd] border-[#1c1b18] dark:border-[#38352e] hover:bg-[#eae8e0] dark:hover:bg-[#25231e]"
              }`}
            >
              {/* Header meta */}
              <div className="flex justify-between items-center text-[11px] sm:text-[11.5px] tracking-[0.18em] uppercase">
                <span className={isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"}>
                  FILE {proj.code}
                </span>
                <span className={isSelected ? "text-[#f0a04b]" : "text-[#66625a] dark:text-[#a09c91]"}>
                  {proj.kind}
                </span>
              </div>

              {/* Title */}
              <div className="font-display font-black text-[28px] sm:text-[34px] leading-none uppercase mt-2 tracking-wide">
                {proj.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column: Active Project Reading Card (Black Panel) */}
      <div
        id="project-inspector"
        className="flex-1 min-w-0 bg-[#181715] text-[#f4f3ef] border-2 border-[#181715] dark:border-[#38352e] p-5 sm:p-8 md:p-10 rounded-sm shadow-xl flex flex-col justify-between gap-6 scroll-mt-4"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#d4701a] font-semibold border-b border-[#2d2b26] pb-3">
          <span>READING FILE {selectedProject.code}</span>
          <span>{selectedProject.kind}</span>
        </div>

        {/* Big Project Title */}
        <div>
          <h3 className="m-0 font-display font-black text-[clamp(44px,7.5vw,84px)] uppercase leading-[0.92] text-white tracking-wide">
            {selectedProject.title}
          </h3>
          <div className="text-[12.5px] tracking-[0.14em] uppercase text-[#a39d8e] mt-1.5 font-medium">
            {selectedProject.type}
          </div>
        </div>

        {/* Project Description */}
        <p className="m-0 text-[15px] sm:text-[16px] leading-[1.7] text-[#dedad0] max-w-[65ch]">
          {selectedProject.blurb}
        </p>

        {/* Bullet Points */}
        {selectedProject.points && selectedProject.points.length > 0 && (
          <ul className="m-0 pl-4 sm:pl-5 flex flex-col gap-2 text-[14px] sm:text-[15px] leading-relaxed text-[#c4bfb3] list-disc">
            {selectedProject.points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        )}

        {/* Badges & Repo Button */}
        <div className="mt-auto pt-6 border-t border-[#2d2b26] flex flex-wrap items-center justify-between gap-4">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {selectedProject.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 border border-[#3e3b33] bg-[#22201b] text-[#eae6dd] text-[11px] tracking-[0.14em] uppercase font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub Link */}
          {selectedProject.repoUrl && (
            <a
              href={selectedProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#f0a04b] text-[#f0a04b] hover:bg-[#f0a04b] hover:text-[#181715] text-[12px] tracking-[0.14em] uppercase font-bold transition-all no-underline shadow-sm active:translate-y-0.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE REPO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
