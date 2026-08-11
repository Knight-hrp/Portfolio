import React from 'react';
import { motion } from 'framer-motion';
import type { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
    categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
    return (
        <section id="skills">
            <h2 className="section-stamp ink-reveal">EVIDENCE TAGS — SKILLS INDEX</h2>
            <div className="index-cards">
                {categories.map((cat, catIdx) => (
                    <motion.div
                        key={cat.id}
                        className="index-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                    >
                        <h4>{cat.title}</h4>
                        <div className="evidence-tags-grid">
                            {cat.skills.map((skill, skillIdx) => (
                                <motion.span
                                    key={skill}
                                    className="evidence-tag"
                                    initial={{ scale: 1.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: catIdx * 0.1 + skillIdx * 0.04,
                                        type: 'spring',
                                        stiffness: 220,
                                        damping: 15,
                                    }}
                                >
                                    [ {skill.toUpperCase()} ]
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
