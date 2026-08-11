import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from './data/portfolioData';
import { HeaderCover } from './components/HeaderCover';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { CodingProfilesSection } from './components/CodingProfilesSection';
import { ContactSection } from './components/ContactSection';
import { DustParticles } from './components/DustParticles';

export const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('about');
    const [toastMsg, setToastMsg] = useState<string | null>(null);

    const showToast = (message: string) => {
        setToastMsg(message);
        setTimeout(() => {
            setToastMsg(null);
        }, 3000);
    };

    useEffect(() => {
        const scrollContainer = document.getElementById('case-file-scroll');
        if (!scrollContainer) return;

        const handleScroll = () => {
            const sections = ['about', 'education', 'projects', 'experience', 'skills', 'cp-profiles', 'certs', 'contact'];
            const scrollPos = scrollContainer.scrollTop + 220;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveTab(sections[i]);
                    break;
                }
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="viewport-desk">
            {/* Moving Grain & Ambient Dust Layer */}
            <div className="moving-grain" />
            <DustParticles />
            <div className="vignette" />

            {/* Stage 2 & 3: Case-file Document Slides Upward and Settles with Spring Bounce */}
            <motion.div
                id="case-file-scroll"
                className="case-file"
                initial={{ y: 120, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
            >
                <HeaderCover
                    fileNo={portfolioData.fileNo}
                    department={portfolioData.department}
                    name={portfolioData.name}
                    role={portfolioData.role}
                    activeTab={activeTab}
                    onSelectTab={setActiveTab}
                />

                <main>
                    <AboutSection summary={portfolioData.summary} />
                    <EducationSection education={portfolioData.education} />
                    <ProjectsSection projects={portfolioData.projects} />
                    <ExperienceSection experience={portfolioData.experience} />
                    <SkillsSection categories={portfolioData.skillCategories} />
                    <CodingProfilesSection profiles={portfolioData.codingProfiles} />
                    <CredentialsSection
                        certifications={portfolioData.certifications}
                        commendations={portfolioData.commendations}
                    />
                </main>

                <ContactSection contact={portfolioData.contact} onShowToast={showToast} />

                <footer className="foot-note">— end of file, subject remains under active development —</footer>

                {toastMsg && <div className="toast-notice">{toastMsg}</div>}
            </motion.div>
        </div>
    );
};

export default App;
