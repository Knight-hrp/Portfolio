import React from 'react';
import { motion } from 'framer-motion';
import type { CertificationSeal, Commendation } from '../types/portfolio';

interface CredentialsSectionProps {
    certifications: CertificationSeal[];
    commendations: Commendation[];
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({
    certifications,
    commendations,
}) => {
    return (
        <>
            <section id="certs">
                <h2 className="section-stamp ink-reveal">CREDENTIAL ARCHIVE — VERIFIED DOCUMENTS</h2>
                <div className="seals">
                    {certifications.map((cert, idx) => {
                        const content = (
                            <>
                                DOCUMENT #{String(idx + 1).padStart(2, '0')}
                                <br />
                                <strong>{cert.title.split(' ')[0]}</strong>
                                <span className="sub">
                                    {cert.issuer}
                                    <br />
                                    Issued {cert.issued}
                                    {cert.url && <span className="verify-badge">VERIFY ↗</span>}
                                </span>
                            </>
                        );

                        return cert.url ? (
                            <motion.a
                                key={cert.id}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="seal clickable-seal"
                                initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: idx % 2 === 0 ? -5 : 4 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 200 }}
                            >
                                {content}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={cert.id}
                                className="seal"
                                initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: idx % 2 === 0 ? -5 : 4 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 200 }}
                            >
                                {content}
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section id="achievements">
                <h2 className="section-stamp ink-reveal">COMMENDATIONS</h2>
                <ul className="ribbon-list">
                    {commendations.map((item, idx) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                        >
                            {item.text}
                        </motion.li>
                    ))}
                </ul>
            </section>
        </>
    );
};
