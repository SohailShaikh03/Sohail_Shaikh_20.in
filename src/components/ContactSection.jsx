import React, { useState } from "react";
import { sound } from "../utils/sound";

export default function ContactSection({ data }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [quickMsg, setQuickMsg] = useState("");
  const [showQuickForm, setShowQuickForm] = useState(false);

  const handleCopyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(data.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(data.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendMail = (e) => {
    e.preventDefault();
    sound.playSuccess();
    const subject = encodeURIComponent("Software Developer Role / Inquiry for Sohail Shaikh");
    const body = encodeURIComponent(
      quickMsg
        ? `${quickMsg}\n\nSent via Dev Bureau Archive Portal`
        : "Hi Sohail,\n\nWe came across your personnel file and would like to connect regarding an engineering opportunity.\n\nBest regards,"
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#1c1b18] text-[#f3f2ed] p-7 sm:p-12 md:p-14 flex flex-wrap gap-8 md:gap-12 items-center justify-between font-mono rounded-sm shadow-xl border-2 border-[#1c1b18] animate-fadeIn">
      {/* Left Column: Heading & Availability Pitch */}
      <div className="flex-1 basis-[420px] min-w-0 flex flex-col gap-4">
        <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#f0a04b] flex items-center gap-2">
          <span className="w-2 h-2 bg-[#f0a04b] rounded-full inline-block" />
          Requests for Contact // Placement Direct
        </div>

        <h2 className="m-0 font-display font-black text-[clamp(44px,6.2vw,78px)] leading-[0.95] uppercase tracking-wide text-white">
          Hiring for a First-Year Developer?
        </h2>

        <p className="m-0 max-w-[54ch] text-[16px] leading-[1.7] text-[#e6e2d6]">
          I'm looking for entry-level Software Developer, Full-Stack Developer, and Android Developer
          roles, remote or in Pune, and internships. Java-based engineering teams are my
          first choice.
        </p>

        {/* Quick dispatch toggle button */}
        <div className="pt-2 no-print">
          <button
            onClick={() => {
              sound.playClick();
              setShowQuickForm(!showQuickForm);
            }}
            className="text-[12px] tracking-[0.16em] uppercase text-[#f0a04b] hover:text-white underline underline-offset-4 font-semibold"
          >
            {showQuickForm ? "▲ Hide Direct Message Form" : "▼ Send a Fast Direct Message / Note"}
          </button>
        </div>

        {/* Optional Quick Message Form */}
        {showQuickForm && (
          <form onSubmit={handleSendMail} className="mt-2 flex flex-col gap-3 bg-[#24221d] p-4 border border-[#3e3b33] rounded-sm no-print animate-fadeIn">
            <label className="text-[11px] tracking-[0.15em] uppercase text-[#a39d8e]">
              Enter brief inquiry message:
            </label>
            <textarea
              rows={3}
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder="Hi Sohail, we have an entry-level Java/Android opening in Pune..."
              className="w-full bg-[#1c1b18] text-[#f3f2ed] border border-[#4a473f] p-3 text-[13px] font-mono focus:outline-none focus:border-[#f0a04b] resize-none"
            />
            <div className="flex justify-end gap-3">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#f0a04b] text-[#1c1b18] font-bold text-[12px] tracking-[0.14em] uppercase hover:bg-white transition-colors"
              >
                Dispatch via Mail ↗
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Contact Connectors */}
      <div className="flex-initial basis-[380px] w-full min-w-0 flex flex-col gap-3.5 text-[14px]">
        {/* GitHub Link */}
        <a
          href={data.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          className="flex items-center justify-between p-4 bg-[#f3f2ed] text-[#1c1b18] hover:bg-[#d4701a] hover:text-white font-bold tracking-[0.1em] text-[13px] uppercase transition-colors no-underline border-2 border-[#f3f2ed]"
        >
          <span>GITHUB.COM/SOHAILSHAIKH03</span>
          <span aria-hidden="true">↗</span>
        </a>

        {/* Email Address Box with 1-Click Copy */}
        <div className="flex flex-col gap-1 border-2 border-dashed border-[#f0a04b] p-3.5 bg-[#24221d]/60 text-[#f0a04b]">
          <div className="flex justify-between items-center text-[10px] tracking-[0.18em] uppercase text-[#a39d8e]">
            <span>DIRECT INBOX:</span>
            <span>{copiedEmail ? "✓ COPIED" : "CLICK TO COPY"}</span>
          </div>
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <a
              href={`mailto:${data.email}`}
              className="text-[#f0a04b] hover:text-white font-bold text-[14px] truncate no-underline"
              title="Send email directly"
            >
              {data.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-2.5 py-1 text-[11px] bg-[#f0a04b]/20 hover:bg-[#f0a04b] hover:text-[#1c1b18] border border-[#f0a04b] font-bold uppercase transition-colors flex-none"
            >
              {copiedEmail ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* LinkedIn & Phone Box */}
        <div className="flex flex-col gap-2.5 border-2 border-dashed border-[#f0a04b] p-3.5 bg-[#24221d]/60 text-[#f0a04b]">
          <div className="flex justify-between items-center text-[10px] tracking-[0.18em] uppercase text-[#a39d8e]">
            <span>LINKEDIN &amp; PHONE:</span>
            <span>{copiedPhone ? "✓ COPIED" : "PUNE, MAHARASHTRA"}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
            <a
              href={data.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="text-[#f0a04b] hover:text-white font-bold text-[13.5px] no-underline inline-flex items-center gap-1.5 truncate"
              title="Open LinkedIn profile"
            >
              <span>{data.linkedinUrl ? data.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "") : "linkedin.com/in/sohail-shaikh-z"}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#3e3b33]">
            <a
              href={`tel:${data.phone.replace(/\s+/g, '')}`}
              className="text-[#e6e2d6] hover:text-[#f0a04b] text-[13.5px] font-medium no-underline"
              title="Call phone number"
            >
              {data.phone}
            </a>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="px-2.5 py-1 text-[11px] bg-[#f0a04b]/20 hover:bg-[#f0a04b] hover:text-[#1c1b18] border border-[#f0a04b] font-bold uppercase transition-colors"
              title="Copy mobile number"
            >
              {copiedPhone ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
