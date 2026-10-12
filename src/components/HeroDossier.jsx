import React, { useState, useEffect } from "react";
import { sound } from "../utils/sound";

export default function HeroDossier({ data, onOpenProjects, onOpenReviews }) {
  const [copied, setCopied] = useState(false);
  const targetName = "SOHAIL";
  const [typedName, setTypedName] = useState("");

  const typingIntervalRef = React.useRef(null);

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

  return (
    <section className="flex flex-wrap gap-12 items-stretch pt-2">
      {/* Left Column: Headline, Bio & Primary CTAs */}
      <div className="flex-1 basis-[520px] min-w-0 flex flex-col justify-center gap-6">
        <div className="text-[13px] tracking-[0.22em] uppercase text-[#66625a] font-mono">
          {data.tagline}
        </div>

        <h1
          onClick={handleRetype}
          title="Click to re-type name"
          className="m-0 font-display font-black text-[clamp(84px,14.5vw,184px)] leading-[0.86] tracking-[0.01em] text-[#1c1b18] select-none inline-flex items-baseline min-h-[0.88em] cursor-pointer"
        >
          <span>{typedName}</span>
          <span className="cursor" aria-hidden="true" />
        </h1>

        <div className="font-display font-bold text-[clamp(26px,3.4vw,42px)] tracking-[0.12em] uppercase text-[#b45a12] leading-tight">
          {data.role}
        </div>

        <p className="m-0 max-w-[58ch] text-[17px] leading-[1.65] text-[#1c1b18]">
          {data.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2 no-print">
          <button
            onClick={() => {
              sound.playClick();
              onOpenProjects();
            }}
            className="px-6 py-3.5 min-h-[44px] bg-[#1c1b18] text-[#f3f2ed] border-2 border-[#1c1b18] hover:bg-[#d4701a] hover:border-[#d4701a] font-mono font-semibold tracking-[0.14em] text-[13px] uppercase shadow-sm active:translate-y-0.5"
          >
            Open Project Files
          </button>

          {onOpenReviews && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenReviews();
              }}
              className="px-5 py-3.5 min-h-[44px] border-2 border-[#1c1b18] hover:border-[#d4701a] text-[#1c1b18] hover:text-[#d4701a] hover:bg-[#eae8e0] font-mono font-semibold tracking-[0.14em] text-[13px] uppercase transition-colors active:translate-y-0.5 flex items-center gap-2"
              title="View community reviews & notes"
            >
              <span className="text-[#d4701a]">★</span>
              <span>Reviews</span>
            </button>
          )}

          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] border-2 border-[#1c1b18] text-[#1c1b18] hover:bg-[#1c1b18] hover:text-[#f3f2ed] font-mono font-semibold tracking-[0.14em] text-[13px] uppercase no-underline transition-colors active:translate-y-0.5"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          <button
            onClick={handleCopySummary}
            className="px-4 py-3.5 min-h-[44px] border-2 border-dashed border-[#cfcabb] hover:border-[#b45a12] text-[#66625a] hover:text-[#b45a12] font-mono font-medium tracking-[0.1em] text-[12px] uppercase transition-colors"
            title="Copy plain-text summary to clipboard"
          >
            {copied ? "✓ Copied to clipboard" : "Copy Dossier Data"}
          </button>
        </div>
      </div>

      {/* Right Column: Dark CRT Dossier Card */}
      <div className="flex-1 basis-[380px] min-w-0 flex flex-col justify-start">
        <div className="bg-[#1c1b18] text-[#f3f2ed] p-7 sm:p-8 flex flex-col gap-5 rounded-t-sm shadow-md">
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
            <div className="relative w-16 h-16 flex-none" title="Radar telemetry active">
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
                <g className="origin-center animate-radar-sweep">
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
          <div className="grid grid-cols-[minmax(84px,104px)_minmax(0,1fr)] gap-y-3.5 gap-x-4 text-[13.5px] font-mono leading-relaxed">
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
        <div className="filmstrip-pattern rounded-b-sm" aria-hidden="true" />
      </div>
    </section>
  );
}
