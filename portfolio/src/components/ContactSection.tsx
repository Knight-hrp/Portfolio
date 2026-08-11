import React from 'react';

interface ContactSectionProps {
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
    onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact, onShowToast }) => {
    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(contact.email);
        onShowToast(`Copied email to clipboard: ${contact.email}`);
    };

    return (
        <footer className="envelope" id="contact">
            <h2 className="section-stamp">CLOSE THE FILE — GET IN TOUCH</h2>
            <p className="signoff">Cleared for contact. Reach out any time.</p>
            <div className="stamp-links">
                <a href={`mailto:${contact.email}`} onClick={handleCopyEmail} title="Click to copy email address">
                    EMAIL
                </a>
                <a href={`tel:${contact.phone}`}>CALL</a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LINKEDIN
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    GITHUB
                </a>
            </div>
        </footer>
    );
};
