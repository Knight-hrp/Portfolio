import React from 'react';
import { motion } from 'framer-motion';
import type { EducationEntry } from '../types/portfolio';

interface EducationSectionProps {
    education: EducationEntry[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
    return (
        <section id="education">
            <h2 className="section-stamp ink-reveal">EDUCATION LEDGER</h2>
            <div>
                {education.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        className="ledger-row"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <div>
                            <h3>{item.institution}</h3>
                            <div className="meta">
                                {item.degree} — {item.period}
                            </div>
                        </div>
                        <div className="score">{item.score}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
