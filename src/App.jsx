import React, { useState } from "react";
import TopBar from "./components/TopBar";
import HeroDossier from "./components/HeroDossier";
import ArchiveNav from "./components/ArchiveNav";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import RecordSection from "./components/RecordSection";
import ContactSection from "./components/ContactSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";
import { sound } from "./utils/sound";

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");
  const [soundMuted, setSoundMuted] = useState(sound.muted);

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

  return (
    <div className="bg-[#f3f2ed] text-[#1c1b18] font-mono min-h-screen px-4 sm:px-6 md:px-8 pb-16 selection:bg-[#d4701a] selection:text-white print-page">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
        {/* Top Header Bar */}
        <TopBar
          soundMuted={soundMuted}
          onToggleSound={toggleSound}
          onOpenReviews={handleOpenReviews}
        />

        {/* Hero Section & Dossier Identity Card */}
        <HeroDossier
          data={portfolioData.personnel}
          onOpenProjects={handleOpenProjects}
          onOpenReviews={handleOpenReviews}
        />

        {/* Section Navigation Tabs */}
        <div id="archive-navigator">
          <ArchiveNav
            activeTab={activeTab}
            onSelectTab={setActiveTab}
          />
        </div>

        {/* Dynamic Archive Sections */}
        <main className="min-h-[420px]">
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
        </main>

        {/* Footer */}
        <Footer
          fileCode={portfolioData.personnel.fileCode}
          location="PUNE, IN"
          onOpenReviews={handleOpenReviews}
        />
      </div>
    </div>
  );
}
