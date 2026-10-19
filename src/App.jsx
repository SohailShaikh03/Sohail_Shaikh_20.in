import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./components/TopBar";
import HeroDossier from "./components/HeroDossier";
import ArchiveNav from "./components/ArchiveNav";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import RecordSection from "./components/RecordSection";
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
      {/* 1. Normal Interactive Web App Layout (hidden when printing) */}
      <div className="web-app-view bg-[#f3f2ed] dark:bg-[#12110e] text-[#1c1b18] dark:text-[#f3f2ed] font-mono min-h-screen px-4 sm:px-6 md:px-8 pb-16 selection:bg-[#d4701a] selection:text-white transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14 md:gap-16">
          {/* Top Header Bar */}
          <TopBar
            soundMuted={soundMuted}
            onToggleSound={toggleSound}
            onOpenReviews={handleOpenReviews}
            darkMode={darkMode}
            onToggleDarkMode={toggleDarkMode}
            onOpenResume={handleOpenResume}
          />

          {/* Hero Section & Dossier Identity Card */}
          <HeroDossier
            data={portfolioData.personnel}
            onOpenProjects={handleOpenProjects}
            onOpenReviews={handleOpenReviews}
            onOpenResume={handleOpenResume}
          />

          {/* Section Navigation Tabs */}
          <div id="archive-navigator">
            <ArchiveNav
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />
          </div>

          {/* Dynamic Archive Sections with Tactile Framer Motion Spring Animations */}
          <main className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.995 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {activeTab === "projects" && (
                  <ProjectsSection projects={portfolioData.projects} />
                )}

                {activeTab === "skills" && (
                  <SkillsSection groups={portfolioData.skillGroups} />
                )}

                {activeTab === "record" && (
                  <RecordSection
                    education={portfolioData.educationRecords}
                    commendations={portfolioData.commendations}
                  />
                )}

                {activeTab === "contact" && (
                  <ContactSection data={portfolioData.personnel} />
                )}

                {activeTab === "reviews" && (
                  <ReviewsSection />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer */}
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

      {/* 3. Dedicated Print-Media Sheet (Prints Sohail's full Resume cleanly upon window.print() / PRINT FILE) */}
      <PrintResumeSheet />
    </>
  );
}
