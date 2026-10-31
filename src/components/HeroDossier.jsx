import React, { useState, useEffect, useRef } from "react";
import { sound } from "../utils/sound";
import { FileText, Sparkles, ExternalLink, Download } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import profilePhoto from "../assets/profile.png";

export default function HeroDossier({ data, onOpenProjects, onOpenResume }) {
  const [typedName, setTypedName] = useState("");
  const targetName = "SOHAIL";
  const [isStamped, setIsStamped] = useState(false);
  const [imageError, setImageError] = useState(false);
  const typingIntervalRef = useRef(null);

  const startTyping = (delay = 0) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    let index = 0;
    setTypedName("");

    const start = () => {
      typingIntervalRef.current = setInterval(() => {
        if (index < targetName.length) {
          index++;
          setTypedName(targetName.slice(0, index));
          try {
            sound.playTick();
          } catch {
            // Ignore
          }
        } else {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
      }, 120);
    };

    if (delay > 0) {
      const timeoutId = setTimeout(start, delay);
      return timeoutId;
    } else {
      start();
      return null;
    }
  };

  useEffect(() => {
    const timeoutId = startTyping(200);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const handleRetype = () => {
    sound.playClick();
    startTyping(0);
  };

  const handleToggleStamp = () => {
    sound.playStamp();
    setIsStamped(!isStamped);
  };

  return (
    <section className="flex flex-col gap-8 sm:gap-10 pt-2 animate-fadeIn font-mono">
      {/* 1. HERO TOP ROW: Name & Role on Left, Polaroid on Right */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
        {/* Left Column: Dossier Header, Huge Name with Orange Bar, Subtitle */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          {/* Metadata file tag */}
          <div className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[#66625a] dark:text-[#a09c91] font-semibold flex items-center gap-2">
            <span>FILE {data.fileCode} / {data.location?.toUpperCase() || "PUNE, INDIA"}</span>
          </div>

          {/* Huge Name with blinking orange vertical cursor */}
          <h1
            onClick={handleRetype}
            title="Click to re-type name"
            className="m-0 font-display font-black text-[clamp(48px,13vw,170px)] leading-[0.88] tracking-[-0.01em] text-[#1c1b18] dark:text-white select-none inline-flex items-baseline cursor-pointer hover:opacity-95 transition-opacity"
          >
            <span>{typedName}</span>
            <span className="cursor" aria-hidden="true" />
          </h1>

          {/* Role / Subtitle */}
          <div className="font-display font-black text-[clamp(18px,3.2vw,38px)] tracking-[0.06em] sm:tracking-[0.1em] uppercase text-[#b45a12] dark:text-[#f0a04b] leading-tight mt-1">
            {data.role || "FRESHER SOFTWARE DEVELOPER / ENGINEER"}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-3 no-print">
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenResume) onOpenResume();
              }}
              className="px-4 py-2 border-2 border-[#1c1b18] dark:border-[#f3f2ed] bg-[#1c1b18] text-[#f3f2ed] dark:bg-[#f3f2ed] dark:text-[#1c1b18] hover:bg-[#d4701a] dark:hover:bg-[#d4701a] dark:hover:text-white hover:border-[#d4701a] text-[12px] font-bold tracking-[0.12em] uppercase transition-all shadow-sm flex items-center gap-1.5 active:translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>

            <a
              href="./myresume.pdf"
              download="Sohail_Shaikh_Resume.pdf"
              onClick={() => sound.playClick()}
              className="px-3.5 py-2 border border-[#cfcabb] dark:border-[#4a473f] hover:border-[#d4701a] text-[#1c1b18] dark:text-[#f3f2ed] hover:text-[#d4701a] bg-white dark:bg-[#1a1916] text-[11.5px] font-semibold tracking-[0.1em] uppercase transition-all flex items-center gap-1.5 no-underline active:translate-y-0.5"
              title="Direct Download Official PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-3.5 py-2 border border-[#cfcabb] dark:border-[#4a473f] hover:border-[#1c1b18] dark:hover:border-white text-[#1c1b18] dark:text-[#f3f2ed] bg-white dark:bg-[#1a1916] text-[11.5px] font-semibold tracking-[0.1em] uppercase transition-all flex items-center gap-1.5 no-underline active:translate-y-0.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub ↗</span>
            </a>

            <button
              onClick={handleToggleStamp}
              className={`px-3 py-2 border border-dashed ${
                isStamped
                  ? "border-[#d4701a] bg-[#d4701a]/15 text-[#d4701a] font-bold"
                  : "border-[#cfcabb] dark:border-[#4a473f] text-[#66625a] dark:text-[#a09c91] hover:border-[#d4701a] hover:text-[#d4701a]"
              } text-[11px] uppercase transition-all flex items-center gap-1`}
              title="Stamp candidate dossier"
            >
              <Sparkles className="w-3 h-3" />
              <span>{isStamped ? "Stamped ✓" : "Stamp"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Polaroid Photo Card with Realistic Paperclip */}
        <div className="flex-none self-center md:self-auto relative group">
          {/* Realistic Metallic Paperclip pinned to the top edge */}
          <svg
            width="28"
            height="58"
            viewBox="0 0 28 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-4 right-10 sm:right-12 z-30 drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] pointer-events-none"
            aria-hidden="true"
          >
            {/* Outer wire loop */}
            <path
              d="M9 16 V41 C9 47.5 19 47.5 19 41 V11 C19 3.5 5 3.5 5 13 V44 C5 54 23 54 23 44 V16"
              stroke="#55514a"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            {/* Shading / Reflection */}
            <path
              d="M10 16 V41 C10 46.5 18 46.5 18 41 V11 C18 4.5 6 4.5 6 13 V44"
              stroke="#e4e0d7"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          {/* Polaroid Paper Frame */}
          <div
            className={`w-[220px] sm:w-[250px] bg-white dark:bg-[#1e1d19] p-3 sm:p-3.5 pb-4 sm:pb-5 border-2 border-[#1c1b18] dark:border-[#38352e] shadow-[4px_6px_0px_rgba(28,27,24,0.15)] dark:shadow-[4px_6px_0px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-1 relative ${
              isStamped ? "rotate-[1deg]" : "-rotate-[1deg]"
            }`}
          >
            {/* Stamped Seal Overlay */}
            {isStamped && (
              <div
                onClick={handleToggleStamp}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto cursor-pointer rubber-stamp animate-stamp bg-[#1c1b18]/90 text-center select-none shadow-2xl"
                title="Click to remove stamp"
              >
                <div className="text-[9px] tracking-[0.25em] text-[#d4701a] font-bold">
                  ★ DEV BUREAU ★
                </div>
                <div className="text-[14px] sm:text-[16px] font-black text-[#d4701a] leading-tight">
                  VERIFIED A+
                </div>
                <div className="text-[8px] tracking-[0.16em] text-[#a39d8e]">
                  BATCH 2026
                </div>
              </div>
            )}

            {/* Dark Inner Photo Box */}
            <div className="w-full aspect-[4/5] bg-[#141311] border border-[#2b2924] overflow-hidden relative flex flex-col items-center justify-center">
              {!imageError ? (
                <img
                  src={profilePhoto}
                  alt={data.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center grayscale-[10%] contrast-[1.05] hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                /* Fallback wireframe avatar matching the mockup */
                <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#f0a04b]/80 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-[#f0a04b]/80" />
                  </div>
                  <div className="text-[10px] tracking-[0.16em] uppercase text-[#f0a04b]/80 font-bold">
                    [ADD: YOUR PHOTO]
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Polaroid Caption */}
            <div className="flex justify-between items-center pt-2.5 px-0.5 text-[11px] sm:text-[11.5px] font-mono tracking-wider">
              <span className="font-bold text-[#1c1b18] dark:text-[#f3f2ed] uppercase">
                {data.name?.toUpperCase() || "SOHAIL SHAIKH"}
              </span>
              <span className="text-[#66625a] dark:text-[#a09c91] font-semibold">
                {data.fileCode || "0412-SS"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT ME SECTION: Large Heading & Bordered Box */}
      <div className="flex flex-col gap-3">
        <h2 className="m-0 font-display font-black text-[clamp(32px,5vw,56px)] uppercase tracking-tight text-[#1c1b18] dark:text-white leading-none">
          ABOUT ME
        </h2>

        {/* Bordered Bio Card */}
        <div className="border-2 border-[#1c1b18] dark:border-[#38352e] bg-white dark:bg-[#1a1916] p-5 sm:p-7 md:p-8 rounded-sm shadow-sm flex flex-col gap-5">
          {/* Dynamic Bio text */}
          <div className="flex flex-col gap-4 text-[14.5px] sm:text-[16px] leading-[1.75] text-[#2c2a26] dark:text-[#dedad0]">
            {data.bio ? (
              data.bio.split("\n\n").map((para, idx) => (
                <p key={idx} className="m-0">
                  {para}
                </p>
              ))
            ) : (
              <p className="m-0">{data.bio}</p>
            )}
          </div>

          {/* Thin horizontal divider inside card */}
          <div className="h-[1px] bg-[#e4e0d7] dark:bg-[#33312b]" />

          {/* Redone Tech Stack Badges (HTML, CSS, JS, REACT, BOOTSTRAP, TAILWIND, etc.) */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            {data.aboutTechStack?.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 sm:px-3 py-1 border border-[#1c1b18] dark:border-[#4a473f] bg-[#fbfaf6] dark:bg-[#22201b] text-[#1c1b18] dark:text-[#eae6dd] text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.12em] uppercase hover:border-[#d4701a] hover:text-[#d4701a] hover:bg-[#eae8e0] dark:hover:bg-[#2c2a23] transition-colors cursor-default select-none rounded-[1px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
