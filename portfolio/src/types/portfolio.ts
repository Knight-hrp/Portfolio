export interface EducationEntry {
    id: string;
    institution: string;
    degree: string;
    period: string;
    score: string;
}

export interface ProjectExhibit {
    id: string;
    tag: string;
    date: string;
    title: string;
    highlights: string[];
    techStack: string[];
    link?: string;
    github?: string;
    isPrivate?: boolean;
}

export interface ExperienceMemo {
    id: string;
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export interface SkillCategory {
    id: string;
    title: string;
    skills: string[];
}

export interface CertificationSeal {
    id: string;
    title: string;
    issued: string;
    issuer: string;
    url?: string;
}

export interface Commendation {
    id: string;
    text: string;
}

export interface CodingProfile {
    id: string;
    platform: string;
    handle: string;
    url: string;
    badgeText?: string;
}

export interface PortfolioData {
    name: string;
    role: string;
    fileNo: string;
    department: string;
    summary: string;
    education: EducationEntry[];
    projects: ProjectExhibit[];
    experience: ExperienceMemo[];
    skillCategories: SkillCategory[];
    certifications: CertificationSeal[];
    commendations: Commendation[];
    codingProfiles: CodingProfile[];
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
}
