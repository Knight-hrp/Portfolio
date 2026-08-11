import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import rishabhPhoto from '../assets/rishabh.jpeg';

interface HeaderCoverProps {
    fileNo: string;
    department: string;
    name: string;
    role: string;
    activeTab: string;
    onSelectTab: (tabId: string) => void;
}

export const HeaderCover: React.FC<HeaderCoverProps> = ({
    fileNo,
    department,
    name,
    role,
    activeTab,
    onSelectTab,
}) => {
    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Exhibits' },
        { id: 'experience', label: 'Field Work' },
        { id: 'skills', label: 'Evidence Tags' },
        { id: 'cp-profiles', label: 'CP Profiles' },
        { id: 'certs', label: 'Credentials' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string) => {
        e.preventDefault();
        onSelectTab(tabId);
        const element = document.getElementById(tabId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="cover" id="top">
            {/* Impact Red Stamp */}
            <div className="file-tag stamp-impact">{fileNo}</div>

            <div className="stamp-corner">
                {department.split(' OF ')[0]} OF
                <br />
                {department.split(' OF ')[1]}
            </div>

            {/* Pinned Old ID Photo dropping into place */}
            <motion.div
                className="photo-frame"
                title="Subject ID Photo — Rishabh Patidar"
                initial={{ y: -80, opacity: 0, rotate: -15 }}
                animate={{ y: 0, opacity: 1, rotate: -2.5 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 180, damping: 14 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
            >
                <div className="tape t1"></div>
                <div className="tape t2"></div>
                <img src={rishabhPhoto} alt="Rishabh Patidar" className="subject-id-photo" />
                <div className="photo-label">ID: RP-2027</div>
            </motion.div>

            {/* Typewriter Name Reveal */}
            <h1 className="typed-name">
                <TypewriterText text={name} speed={70} delay={900} showCursor={true} />
            </h1>

            <p className="typed-role">— {role} —</p>
            <div className="redacted-line"></div>

            {/* Sequential Navigation Buttons */}
            <nav className="folder-tabs" aria-label="Folder navigation">
                {tabs.map((tab, idx) => (
                    <motion.a
                        key={tab.id}
                        href={`#${tab.id}`}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, tab.id)}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + idx * 0.08, ease: 'easeOut' }}
                    >
                        {tab.label}
                    </motion.a>
                ))}
            </nav>
        </header>
    );
};
