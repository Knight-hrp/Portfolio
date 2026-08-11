import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { ProjectExhibit } from '../types/portfolio';

interface ProjectsSectionProps {
    projects: ProjectExhibit[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const annotations = [
        '✓ VERIFIED SYSTEM',
        '★ LIVE DEPLOYMENT',
        '→ STACK ARCHITECTURE',
        '★ REAL-TIME TELEMETRY',
        '✓ CORE FLEET DISPATCH',
        '⚡ ARCHITECTURE EMULATOR',
        '★ AWARD WINNING DESIGN',
        '✓ PET CARE SYSTEM',
        '→ HIGH PERFORMANCE C++',
        '★ AI AGENTIC FRAMEWORK',
        '✓ VOICE AUTOMATION'
    ];

    const allTechs = useMemo(() => {
        const set = new Set<string>();
        projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
        return Array.from(set).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (!selectedTech) return projects;
        return projects.filter((p) => p.techStack.includes(selectedTech));
    }, [projects, selectedTech]);

    return (
        <section id="projects">
            <h2 className="section-stamp ink-reveal">CASE EXHIBITS ({projects.length})</h2>

            <div className="exhibit-filter">
                <button
                    className={`filter-btn ${selectedTech === null ? 'active' : ''}`}
                    onClick={() => setSelectedTech(null)}
                >
                    ALL EXHIBITS ({projects.length})
                </button>
                {allTechs.map((tech) => (
                    <button
                        key={tech}
                        className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
                        onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <div className="exhibit-grid">
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        className="exhibit-card"
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 4) * 0.12, duration: 0.5 }}
                    >
                        <div className="exhibit-tag">
                            {project.tag} {project.isPrivate ? '· PRIVATE' : ''}
                        </div>
                        <span className="exhibit-annotation">{annotations[idx % annotations.length]}</span>
                        <div className="exhibit-date">{project.date}</div>
                        <h3>{project.title}</h3>
                        <ul>
                            {project.highlights.map((bullet, bulletIdx) => (
                                <li key={bulletIdx}>{bullet}</li>
                            ))}
                        </ul>
                        <div className="tech-strip">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        fontWeight: selectedTech === tech ? 'bold' : 'normal',
                                        borderColor: selectedTech === tech ? 'var(--stamp-red)' : undefined,
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {(project.link || project.github) && (
                            <div className="exhibit-link-wrap">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="exhibit-live-link"
                                    >
                                        {project.link.includes('drive.google.com') || project.link.includes('video') ? '🎬 VIDEO DEMO ↗' : '🌐 LIVE DEMO ↗'}
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="exhibit-github-link"
                                    >
                                        {project.isPrivate ? '🔒 REPO ACCESS ON REQUEST' : '📂 VIEW REPOSITORY ↗'}
                                    </a>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
