import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
    summary: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ summary }) => {
    return (
        <section id="about">
            <motion.div
                className="doc-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Paperclip Swinging Animation */}
                <motion.div
                    className="paperclip"
                    initial={{ rotate: -18 }}
                    animate={{ rotate: [-6, -2, -8, -6] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />

                <p className="note-label">Case Summary</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <p className="typed-body" style={{ flex: 1, minWidth: '260px' }}>{summary}</p>
                    <span className="annotation-tag">✓ CLEARED FOR COLLABORATION</span>
                </div>
            </motion.div>
        </section>
    );
};
