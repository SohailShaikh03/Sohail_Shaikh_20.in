import React from "react";
import { sound } from "../utils/sound";
import { LinkedinIcon, GithubIcon, InstagramIcon, WhatsappIcon } from "./BrandIcons";

export default function Footer({ fileCode, location, onOpenReviews }) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sohail-shaikh-z",
      icon: LinkedinIcon,
      hoverColor: "hover:text-[#0077b5] dark:hover:text-[#0a66c2]"
    },
    {
      name: "GitHub",
      href: "https://github.com/SohailShaikh03",
      icon: GithubIcon,
      hoverColor: "hover:text-[#1c1b18] dark:hover:text-white"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919552081902",
      icon: WhatsappIcon,
      hoverColor: "hover:text-[#25D366]"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/zohell._",
      icon: InstagramIcon,
      hoverColor: "hover:text-[#E4405F]"
    }
  ];

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-5 py-6 border-t-2 border-[#1c1b18] dark:border-[#38352e] text-[11.5px] sm:text-[12px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#66625a] dark:text-[#a09c91] font-mono transition-colors">
      {/* File code badge */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="w-1.5 h-1.5 bg-[#d4701a] inline-block" />
        <span className="text-[#1c1b18] dark:text-[#dedad0]">
          FILE {fileCode} / {location || "PUNE, IN"}
        </span>
      </div>

      {/* Social Links with Logos */}
      <div className="flex items-center gap-2.5 sm:gap-3 no-print">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title={`Connect on ${item.name}`}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-[#cfcabb] dark:border-[#38352e] text-[#1c1b18] dark:text-[#eae6dd] bg-[#fbfaf6] dark:bg-[#191815] rounded-sm transition-all text-[11px] font-semibold ${item.hoverColor} hover:border-current active:translate-y-0.5 shadow-sm`}
            >
              <Icon className="w-3.5 h-3.5 flex-none" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>

      {/* Navigation actions */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6">
        {onOpenReviews && (
          <button
            onClick={onOpenReviews}
            className="no-print hover:text-[#d4701a] underline underline-offset-4 text-[#66625a] dark:text-[#a09c91]"
            title="Open Reviews"
          >
            [REVIEWS ★]
          </button>
        )}

        <button
          onClick={scrollToTop}
          className="no-print hover:text-[#1c1b18] dark:hover:text-white underline underline-offset-4 text-[#66625a] dark:text-[#a09c91]"
          title="Return to top of personnel file"
        >
          [TOP OF FILE ↑]
        </button>

        <span className="font-semibold text-[#1c1b18] dark:text-[#f3f2ed]">END OF RECORD</span>
      </div>
    </footer>
  );
}
