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
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/sohail-shaikh-z",
      icon: LinkedinIcon,
      hoverColor: "hover:text-[#0077b5] dark:hover:text-[#0a66c2]"
    },
    {
      name: "GITHUB",
      href: "https://github.com/SohailShaikh03",
      icon: GithubIcon,
      hoverColor: "hover:text-[#1c1b18] dark:hover:text-white"
    },
    {
      name: "WHATSAPP",
      href: "https://wa.me/919552081902",
      icon: WhatsappIcon,
      hoverColor: "hover:text-[#25D366]"
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/zohell._",
      icon: InstagramIcon,
      hoverColor: "hover:text-[#E4405F]"
    }
  ];

  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-4 py-5 border-t border-[#1c1b18] dark:border-[#38352e] text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-[#66625a] dark:text-[#a09c91] font-mono transition-colors">
      {/* File code badge with orange square */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-[#d4701a] inline-block flex-none" />
        <span className="text-[#1c1b18] dark:text-[#dedad0] font-semibold">
          FILE {fileCode || "0412-SS"} / {location || "PUNE, IN"}
        </span>
      </div>

      {/* Social Links with Logos */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 no-print">
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
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#cfcabb] dark:border-[#38352e] text-[#1c1b18] dark:text-[#eae6dd] bg-white dark:bg-[#1a1916] rounded-[2px] transition-all text-[11px] font-bold ${item.hoverColor} hover:border-current active:translate-y-0.5 shadow-sm no-underline`}
            >
              <Icon className="w-3.5 h-3.5 flex-none" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>

      {/* Navigation actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {onOpenReviews && (
          <button
            onClick={() => {
              sound.playClick();
              onOpenReviews();
            }}
            className="no-print hover:text-[#d4701a] underline underline-offset-4 text-[#66625a] dark:text-[#a09c91] font-semibold"
            title="Open Reviews"
          >
            [REVIEWS ★]
          </button>
        )}

        <button
          onClick={scrollToTop}
          className="no-print hover:text-[#1c1b18] dark:hover:text-white underline underline-offset-4 text-[#66625a] dark:text-[#a09c91] font-semibold"
          title="Return to top of personnel file"
        >
          [TOP OF FILE ↑]
        </button>

        <span className="font-bold text-[#1c1b18] dark:text-[#f3f2ed]">
          END OF RECORD
        </span>
      </div>
    </footer>
  );
}
