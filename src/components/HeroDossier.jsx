import React, { useState, useEffect, useRef } from "react";
import { sound } from "../utils/sound";
import { FileText, Star, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function HeroDossier({ data, onOpenProjects, onOpenReviews, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [isStamped, setIsStamped] = useState(false);
  const [radarSpeed, setRadarSpeed] = useState("normal");
  const targetName = "SOHAIL";
  const [typedName, setTypedName] = useState("");

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
      }, 140);
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
    const timeoutId = startTyping(260);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const handleRetype = () => {
    sound.playClick();
    startTyping(0);
  };

  const handleCopySummary = () => {
    sound.playSuccess();
    const summary = `PERSONNEL FILE: ${data.fileCode}\nNAME: ${data.name}${data.alias ? ` (${data.alias})` : ""}\nROLE: ${data.role}\nTARGET: ${data.target}\nBASE: ${data.base}\nDEGREE: ${data.degree} (CGPA: ${data.cgpa})\nGITHUB: ${data.githubUrl}\nLINKEDIN: ${data.linkedinUrl}\nEMAIL: ${data.email}\nPHONE: ${data.phone}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleToggleStamp = () => {
    sound.playStamp();
    setIsStamped(!isStamped);
  };

  const handleRadarPing = () => {
    sound.playTick();
    setRadarSpeed("fast");
    setTimeout(() => setRadarSpeed("normal"), 2500);
  };

  return (
    <section className="flex flex-wrap gap-8 sm:gap-12 items-stretch pt-2">
      {/* Left Column: Headline, Bio & Primary CTAs */}
      <div className="flex-1 basis-[320px] sm:basis-[520px] min-w-0 flex flex-col justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#66625a] dark:text-[#a09c91] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#d4701a]" />
          <span>{data.tagline}</span>
        </div>

        <h1
          onClick={handleRetype}
          title="Click to re-type name"
          className="m-0 font-display font-black text-[clamp(52px,13.5vw,184px)] leading-[0.88] tracking-[0.01em] text-[#1c1b18] dark:text-white select-none inline-flex items-baseline min-h-[0.88em] cursor-pointer hover:opacity-95 transition-opacity"
        >
          <span>{typedName}</span>
          <span className="cursor" aria-hidden="true" />
        </h1>

        <div className="font-display font-bold text-[clamp(20px,3.2vw,42px)] tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#b45a12] dark:text-[#f0a04b] leading-tight">
          {data.role}
        </div>

        <p className="m-0 max-w-[58ch] text-[15.5px] sm:text-[17px] leading-[1.65] text-[#1c1b18] dark:text-[#dedad0]">
          {data.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2 no-print">
          {/* Projects Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenProjects();
            }}
            className="px-5 sm:px-6 py-3 min-h-[44px] bg-[#1c1b18] text-[#f3f2ed] dark:bg-[#f3f2ed] dark:text-[#1c1b18] border-2 border-[#1c1b18] dark:border-[#f3f2ed] hover:bg-[#d4701a] dark:hover:bg-[#d4701a] dark:hover:text-white hover:border-[#d4701a] font-mono font-semibold tracking-[0.12em] sm:tracking-[0.14em] text-[12px] sm:text-[13px] uppercase shadow-sm active:translate-y-0.5 text-center justify-center inline-flex items-center transition-all"
          >
            Open Projects
          </button>

          {/* Resume & Print Dossier Button */}
          <button
            onClick={() => {
              sound.playClick();
              if (onOpenResume) onOpenResume();
            }}
            title="Open official Resume & Print / Save PDF"
            className="px-4 sm:px-5 py-3 min-h-[44px] border-2 border-[#d4701a] text-[#d4701a] dark:text-[#f0a04b] bg-[#d4701a]/5 hover:bg-[#d4701a] hover:text-white font-mono font-semibold tracking-[0.12em] sm:tracking-[0.14em] text-[12px] sm:text-[13px] uppercase transition-all active:translate-y-0.5 flex items-center justify-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume / CV</span>
          </button>

          {/* Reviews Button */}
          {onOpenReviews && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenReviews();
              }}
              className="px-3.5 sm:px-4 py-3 min-h-[44px] border-2 border-[#1c1b18] dark:border-[#38352e] hover:border-[#d4701a] text-[#1c1b18] dark:text-[#f3f2ed] hover:text-[#d4701a] hover:bg-[#eae8e0] dark:hover:bg-[#25231e] font-mono font-semibold tracking-[0.12em] text-[12px] sm:text-[13px] uppercase transition-colors active:translate-y-0.5 flex items-center justify-center gap-1.5"
              title="View community reviews & notes"
            >
              <Star className="w-3.5 h-3.5 text-[#d4701a] fill-[#d4701a]" />
              <span>Reviews</span>
            </button>
          )}

          {/* GitHub Button */}
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-3 min-h-[44px] border-2 border-[#1c1b18] dark:border-[#38352e] text-[#1c1b18] dark:text-[#f3f2ed] hover:bg-[#1c1b18] hover:text-[#f3f2ed] dark:hover:bg-white dark:hover:text-[#1c1b18] font-mono font-semibold tracking-[0.12em] text-[12px] sm:text-[13px] uppercase no-underline transition-colors active:translate-y-0.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub ↗</span>
          </a>

          {/* Interactive Stamp Button */}
          <button
            onClick={handleToggleStamp}
            className={`px-3 py-3 min-h-[44px] border-2 border-dashed ${
              isStamped
                ? "border-[#d4701a] bg-[#d4701a]/15 text-[#d4701a] font-bold"
                : "border-[#cfcabb] dark:border-[#4a473f] text-[#66625a] dark:text-[#a09c91] hover:border-[#d4701a] hover:text-[#d4701a]"
            } font-mono text-[11px] sm:text-[12px] uppercase transition-all flex items-center gap-1 active:scale-95`}
            title="Click to stamp candidate dossier"
          >
            <Sparkles className="w-3 h-3" />
            <span>{isStamped ? "Stamped ✓" : "Stamp Dossier"}</span>
          </button>

          {/* Copy Summary */}
          <button
            onClick={handleCopySummary}
            className="px-3 py-3 min-h-[44px] border border-dashed border-[#cfcabb] dark:border-[#4a473f] hover:border-[#b45a12] text-[#66625a] dark:text-[#a09c91] hover:text-[#b45a12] font-mono font-medium text-[11px] uppercase transition-colors"
            title="Copy plain-text summary to clipboard"
          >
            {copied ? "✓ Copied" : "Copy Info"}
          </button>
        </div>
      </div>

      {/* Right Column: Dark CRT Dossier Card */}
      <div className="flex-1 basis-[320px] sm:basis-[380px] min-w-0 flex flex-col justify-start relative">
        <div className="relative bg-[#1c1b18] text-[#f3f2ed] p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 rounded-t-sm shadow-md border-2 border-[#1c1b18] dark:border-[#38352e] overflow-hidden">
          
          {/* Interactive Distressed Rubber Stamp overlay */}
          {isStamped && (
            <div
              onClick={handleToggleStamp}
              title="Click to remove or restamp"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto cursor-pointer rubber-stamp animate-stamp bg-[#1c1b18]/90 text-center select-none shadow-2xl"
            >
              <div className="text-[10px] tracking-[0.25em] text-[#d4701a] dark:text-[#f0a04b] font-bold">
                ★ DEV BUREAU SEAL ★
              </div>
              <div className="text-[17px] sm:text-[19px] font-black text-[#d4701a] dark:text-[#f0a04b] leading-tight">
                RECOMMENDED HIRE
              </div>
              <div className="text-[9.5px] tracking-[0.16em] text-[#a39d8e]">
                BATCH 2026 // CLEARED A+
              </div>
            </div>
          )}

          {/* Card Header & Radar Gauge */}
          <div className="flex justify-between items-center gap-4">
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#f0a04b]">
                PERSONNEL FILE {data.fileCode}
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#a39d8e] mt-0.5">
                STATUS: RECORD ACTIVE // CLEARANCE A
              </div>
            </div>

            {/* Tactical Radar Widget */}
            <div
              onClick={handleRadarPing}
              className="relative w-16 h-16 flex-none cursor-pointer group"
              title="Telemetry active — Click to ping radar"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                className="w-full h-full select-none"
                aria-hidden="true"
              >
                {/* Outer Reticle Ring */}
                <circle cx="32" cy="32" r="30" fill="none" stroke="#f3f2ed" strokeWidth="1.5" />
                {/* Dashed Secondary Ring */}
                <circle
                  cx="32"
                  cy="32"
                  r="21"
                  fill="none"
                  stroke="#f0a04b"
                  strokeWidth="3.5"
                  strokeDasharray="3 5"
                />
                {/* Inner Ring */}
                <circle cx="32" cy="32" r="10" fill="none" stroke="#66625a" strokeWidth="1" />
                {/* Crosshairs */}
                <line x1="32" y1="2" x2="32" y2="62" stroke="#4a473f" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="2" y1="32" x2="62" y2="32" stroke="#4a473f" strokeWidth="1" strokeDasharray="2 2" />
                {/* Blip Dot */}
                <circle cx="44" cy="20" r="2.5" fill="#3f7a4e" className="animate-ping" />
                <circle cx="44" cy="20" r="2.5" fill="#3f7a4e" />
                {/* Sweep Hand */}
                <g className={`origin-center ${radarSpeed === "fast" ? "animate-spin-fast" : "animate-radar-sweep"}`}>
                  <line
                    x1="32"
                    y1="32"
                    x2="52"
                    y2="14"
                    stroke="#f3f2ed"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </g>
                <circle cx="32" cy="32" r="3.5" fill="#f3f2ed" />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#4a473f]" />

          {/* Metadata Grid */}
          <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[104px_1fr] gap-y-2.5 sm:gap-y-3.5 gap-x-3 sm:gap-x-4 text-[12.5px] sm:text-[13.5px] font-mono leading-relaxed">
            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              NAME
            </div>
            <div className="font-semibold text-white tracking-wide">
              {data.name}
            </div>

            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              STATUS
            </div>
            <div className="text-[#3f7a4e] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3f7a4e] animate-pulse inline-block" />
              {data.status || "OPEN TO WORK"}
            </div>

            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              TARGET
            </div>
            <div className="text-[#e6e2d6]">
              {data.target}
            </div>

            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              BASE
            </div>
            <div className="text-[#e6e2d6]">
              {data.base}
            </div>

            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              DEGREE
            </div>
            <div className="text-[#e6e2d6]">
              {data.degree}
            </div>

            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              CGPA
            </div>
            <div className="font-bold text-white">
              {data.cgpa}
            </div>

            <div className="text-[#a39d8e] uppercase tracking-[0.12em] text-[11px] pt-0.5">
              LANGUAGES
            </div>
            <div className="text-[#e6e2d6]">
              {data.languages}
            </div>
          </div>
        </div>

        {/* Filmstrip Barcode Edge */}
        <div className="filmstrip-pattern rounded-b-sm border-t-0" aria-hidden="true" />
      </div>
    </section>
  );
}
