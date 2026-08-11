import React from 'react';
import type { CodingProfile } from '../types/portfolio';

interface CodingProfilesSectionProps {
    profiles: CodingProfile[];
}

export const CodingProfilesSection: React.FC<CodingProfilesSectionProps> = ({ profiles }) => {
    return (
        <section id="cp-profiles">
            <h2 className="section-stamp">COMPETITIVE PROGRAMMING PROFILES</h2>
            <div className="cp-profile-grid">
                {profiles.map((profile) => (
                    <a
                        key={profile.id}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cp-card"
                        title={`Open ${profile.platform} profile for @${profile.handle}`}
                    >
                        <div className="cp-badge-header">
                            <span className="cp-icon">⚡</span>
                            <span className="cp-platform">{profile.platform}</span>
                        </div>
                        <div className="cp-handle">@{profile.handle}</div>
                        {profile.badgeText && <div className="cp-rating">{profile.badgeText}</div>}
                        <div className="cp-stamp">VERIFIED USER</div>
                    </a>
                ))}
            </div>
        </section>
    );
};
