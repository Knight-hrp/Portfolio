import React from 'react';
import { motion } from 'framer-motion';
import type { ExperienceMemo } from '../types/portfolio';

interface ExperienceSectionProps {
    experience: ExperienceMemo[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
    return (
        <section id="experience">
            <h2 className="section-stamp ink-reveal">FIELD WORK — CASE MEMOS</h2>
            {experience.map((memo, idx) => (
                <motion.div
                    key={memo.id}
                    className="memo"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                    <div className="memo-head">
                        <h3>CASE #{String(idx + 1).padStart(2, '0')} — {memo.role}</h3>
                        <span className="date">{memo.period}</span>
                    </div>
                    <p className="org">{memo.company}</p>
                    <ul>
                        {memo.responsibilities.map((resp, respIdx) => (
                            <li key={respIdx}>{resp}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </section>
    );
};
