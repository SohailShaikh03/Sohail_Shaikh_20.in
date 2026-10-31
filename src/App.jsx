import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./components/TopBar";
import HeroDossier from "./components/HeroDossier";
import ArchiveNav from "./components/ArchiveNav";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import PrintResumeSheet from "./components/PrintResumeSheet";
import { portfolioData } from "./data/portfolioData";
import { sound } from "./utils/sound";

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");
  const [soundMuted, setSoundMuted] = useState(sound.muted);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Dark Mode State with LocalStorage Persistence
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bureau_theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("bureau_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("bureau_theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleSound = () => {
    const isMuted = sound.toggleMute();
    setSoundMuted(isMuted);
  };

  const handleOpenProjects = () => {
    setActiveTab("projects");
    const navElem = document.getElementById("archive-navigator");
    if (navElem) {
      navElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenReviews = () => {
    sound.playTab();
    setActiveTab("reviews");
    const navElem = document.getElementById("archive-navigator");
    if (navElem) {
      navElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenResume = () => {
    sound.playClick();
    setShowResumeModal(true);
  };

  return (
    <>
      {/* 1. Main Interactive Layout */}
      <div className="web-app-view bg-[#f4f3ef] dark:bg-[#12110e] text-[#1c1b18] dark:text-[#f3f2ed] font-mono min-h-screen px-4 sm:px-6 md:px-10 pb-12 selection:bg-[#d4701a] selection:text-white transition-colors duration-200">
        <div className="max-w-[1140px] mx-auto flex flex-col gap-8 sm:gap-10">
          {/* Top Header Bar */}
          <TopBar
            soundMuted={soundMuted}
            onToggleSound={toggleSound}
            darkMode={darkMode}
            onToggleDarkMode={toggleDarkMode}
            onOpenResume={handleOpenResume}
          />

          {/* Hero Section & About Me Dossier Card */}
          <HeroDossier
            data={portfolioData.personnel}
            onOpenProjects={handleOpenProjects}
            onOpenResume={handleOpenResume}
          />

          {/* Section Navigation Tabs: 5 Tabs (Certificates, Projects, Education, Skills, Reviews) */}
          <div id="archive-navigator" className="scroll-mt-4">
            <ArchiveNav
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />
          </div>

          {/* Active File Content Area */}
          <main className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {activeTab === "certificates" && (
                  <CertificatesSection commendations={portfolioData.commendations} />
                )}

                {activeTab === "projects" && (
                  <ProjectsSection projects={portfolioData.projects} />
                )}

                {activeTab === "education" && (
                  <EducationSection education={portfolioData.educationRecords} />
                )}

                {activeTab === "skills" && (
                  <SkillsSection groups={portfolioData.skillGroups} />
                )}

                {activeTab === "reviews" && (
                  <ReviewsSection />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Contact Banner: 'HIRING A FIRST-YEAR DEVELOPER?' */}
          <ContactSection data={portfolioData.personnel} />

          {/* Footer Bar */}
          <Footer
            fileCode={portfolioData.personnel.fileCode}
            location="PUNE, IN"
            onOpenReviews={handleOpenReviews}
          />
        </div>
      </div>

      {/* 2. Official Resume Modal (Preview, Print/PDF, Plaintext Copy, Download) */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        data={portfolioData.personnel}
      />

      {/* 3. Dedicated Print-Media Sheet */}
      <PrintResumeSheet />
    </>
  );
}
