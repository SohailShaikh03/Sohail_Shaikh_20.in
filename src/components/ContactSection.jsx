import React, { useState } from "react";
import { sound } from "../utils/sound";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "./BrandIcons";

export default function ContactSection({ data }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    sound.playSuccess();
    navigator.clipboard.writeText(data.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    sound.playSuccess();
    navigator.clipboard.writeText(data.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="bg-[#181715] text-[#f4f3ef] border-2 border-[#181715] dark:border-[#38352e] p-6 sm:p-8 md:p-10 rounded-sm shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono animate-fadeIn">
      {/* Left side: Heading */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold text-[#d4701a]">
          REQUESTS FOR CONTACT
        </div>
        <h3 className="m-0 font-display font-black text-[clamp(28px,5vw,56px)] leading-[0.95] uppercase tracking-wide text-white">
          HIRING A FIRST-YEAR DEVELOPER?
        </h3>
      </div>

      {/* Right side: White GitHub Box & Dashed Orange Info Box */}
      <div className="flex-none w-full md:w-auto flex flex-col gap-3">
        {/* White button matching screenshot */}
        <a
          href={data.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          className="w-full md:w-[360px] py-3 px-4 bg-white text-[#181715] hover:bg-[#d4701a] hover:text-white font-mono font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase flex items-center justify-between transition-colors no-underline shadow-sm"
        >
          <span className="truncate">GITHUB.COM/SOHAILSHAIKH03</span>
          <ExternalLink className="w-4 h-4 flex-none ml-2" />
        </a>

        {/* Dashed orange box matching screenshot */}
        <div className="w-full md:w-[360px] p-3 border border-dashed border-[#d4701a] text-[#f0a04b] text-[11px] sm:text-[11.5px] font-mono tracking-wider flex flex-wrap items-center justify-between gap-2 bg-[#d4701a]/5">
          <div className="flex items-center gap-2 truncate">
            <a
              href={`mailto:${data.email}`}
              className="hover:underline text-[#f0a04b] hover:text-white truncate"
              title="Send email"
            >
              {data.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={data.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#f0a04b] hover:text-white flex items-center gap-1"
              title="LinkedIn Profile"
            >
              <span>LinkedIn</span>
            </a>
            <span>|</span>
            <button
              onClick={handleCopyPhone}
              className="hover:underline text-[#f0a04b] hover:text-white"
              title="Click to copy phone number"
            >
              {copiedPhone ? "Copied!" : data.phone}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
