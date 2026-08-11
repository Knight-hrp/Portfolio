import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
    name: 'RISHABH PATIDAR',
    role: 'COMPUTER SCIENCE ENGINEER · FULL-STACK & AI SYSTEMS Specialist',
    fileNo: 'FILE NO. 2027-CSE · STATUS: ACTIVE',
    department: 'DEPT. OF ENGINEERING',
    summary: `Subject is a Computer Science undergraduate at IIIT Vadodara International Campus Diu (Class of 2027), with a track record spanning full-stack web platforms, AI-driven simulations, and cybersecurity assessments. Confirmed skill sets in Next.js, Node.js, Python, and applied machine learning, with field experience in network security auditing and AI-based network management. Subject is currently seeking opportunities where systems thinking meets product execution. Approach with interest — cleared for collaboration.`,
    education: [
        {
            id: 'edu-1',
            institution: 'Indian Institute of Information Technology, Vadodara (ICD)',
            degree: 'B.Tech in Computer Science & Engineering',
            period: 'Aug 2023 to May 2027',
            score: 'CPI 7.06'
        },
        {
            id: 'edu-2',
            institution: 'Datahari Public School, Kukshi',
            degree: 'Class XII, MPBSE',
            period: 'Apr 2021 to Mar 2022',
            score: '77.8%'
        },
        {
            id: 'edu-3',
            institution: 'Allegiance Academy, Kukshi',
            degree: 'Class X, CBSE',
            period: 'Apr 2019 to Mar 2020',
            score: '83.6%'
        }
    ],
    projects: [
        {
            id: 'exhibit-a',
            tag: 'EXHIBIT A',
            date: 'AUG 2026',
            title: 'Insurance Management Platform',
            highlights: [
                'Full-stack platform with JWT authentication and role-based access across policy, customer, and claims workflows.',
                'RESTful APIs covering the complete insurance lifecycle.',
                'Supabase Storage integration for secure document uploads, agent verification, and analytics dashboards.'
            ],
            techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'JavaScript'],
            link: 'https://insurance-management-platform-nine.vercel.app/',
            github: 'https://github.com/Knight-hrp/insurance-management-platform'
        },
        {
            id: 'exhibit-b',
            tag: 'EXHIBIT B',
            date: 'MAY 2026',
            title: 'ChatNet 5G — AI Network Platform',
            highlights: [
                'Agentic AI-based 5G Network Management Platform using FastAPI, Next.js, LangGraph, and Groq LLM.',
                'Integrated RAG (ChromaDB) and PostgreSQL for real-time AI-driven network monitoring and automated diagnostic telemetry.',
                'Enterprise private repository built during AI research internship.'
            ],
            techStack: ['TypeScript', 'FastAPI', 'Next.js', 'LangGraph', 'Groq LLM', 'ChromaDB', 'PostgreSQL'],
            link: 'https://vercel.com/knight-hrps-projects/chatnet-5g/A6gYvaes5NKDXzwHXYav5FM8qjm4',
            github: 'https://github.com/Knight-hrp/chatnet-5g',
            isPrivate: true
        },
        {
            id: 'exhibit-c',
            tag: 'EXHIBIT C',
            date: 'JUL 2026',
            title: 'AI Code Review Assistant',
            highlights: [
                'Automated AI-powered code review platform performing multi-file static analysis and quality evaluations.',
                'Delivers actionable performance optimizations, bug detection, and code smell identification in real time.',
                'Interactive dashboard with detailed file diff summaries and automated lint reporting.'
            ],
            techStack: ['JavaScript', 'Node.js', 'Express', 'AI API', 'React'],
            link: 'https://ai-code-review-assistant-vert.vercel.app/',
            github: 'https://github.com/Knight-hrp/AI-Code-Review-Assistant'
        },
        {
            id: 'exhibit-d',
            tag: 'EXHIBIT D',
            date: 'JUL 2026',
            title: 'TransitOps — Smart Transport Platform',
            highlights: [
                'Smart Transport Operations Platform for fleet management, driver allocation, trip dispatching, maintenance logs, and expense tracking.',
                'Real-time route optimization, driver telemetry monitoring, and vehicle diagnostics dashboard.',
                'Role-based operational metrics with modular microservice architecture.'
            ],
            techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
            link: 'https://transitops-theta.vercel.app/',
            github: 'https://github.com/Knight-hrp/transitops'
        },
        {
            id: 'exhibit-e',
            tag: 'EXHIBIT E',
            date: 'AUG 2026',
            title: 'Netflix Clone',
            highlights: [
                'Full-featured movie & TV streaming application clone featuring dynamic TMDB API integration and video preview modals.',
                'User authentication, wishlist tracking, and personalized content recommendation rows.',
                'Modern high-performance web interface built with React, CSS glassmorphism, and responsive media streaming UI.'
            ],
            techStack: ['React', 'JavaScript', 'Node.js', 'TMDB API', 'CSS3', 'Vercel'],
            link: 'https://neflix-clone-theta.vercel.app/',
            github: 'https://github.com/Knight-hrp/netflix-clone'
        },
        {
            id: 'exhibit-f',
            tag: 'EXHIBIT F',
            date: 'JUL 2026',
            title: 'CPU Simulator',
            highlights: [
                'Interactive computer architecture simulator and visual instruction pipeline execution environment.',
                'Real-time visualization of CPU register banks, memory addresses, ALU logic operations, and assembly execution cycles.',
                'Designed for computer architecture diagnostics, instruction step-throughs, and system-level performance visualization.'
            ],
            techStack: ['React', 'TypeScript', 'Computer Architecture', 'WebAssembly', 'CSS3'],
            link: 'https://cpu-simulator-mu.vercel.app/',
            github: 'https://github.com/Knight-hrp/cpu-simulator'
        },
        {
            id: 'exhibit-g',
            tag: 'EXHIBIT G',
            date: 'FEB 2025',
            title: 'IIIT Vadodara ICD Web Design',
            highlights: [
                'Award-winning official web redesign for IIIT Vadodara International Campus Diu, securing 2nd Place in WEB SURGE 2025.',
                'Interactive academic portal with smooth Framer Motion animations, accessible UI, dynamic department showcases, and event feeds.',
                'Built for high performance, mobile responsiveness, and SEO optimization.'
            ],
            techStack: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
            link: 'https://web-surge-2025-omega.vercel.app/',
            github: 'https://github.com/Knight-hrp/web-surge-2025'
        },
        {
            id: 'exhibit-h',
            tag: 'EXHIBIT H',
            date: 'JUN 2026',
            title: 'PetStop — Pet Care & Adoption Platform',
            highlights: [
                'Full-stack pet care, veterinary appointment scheduling, and adoption management system.',
                'Enables pet owners to keep health logs, track vaccination schedules, search adoption listings, and book care services.',
                'Secure REST APIs, database schemas for multi-role user profiles (pet owners, vets, shelters), and intuitive UI dashboard.'
            ],
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            link: 'https://pet-stop-beta.vercel.app/',
            github: 'https://github.com/Knight-hrp/PetStop'
        },
        {
            id: 'exhibit-i',
            tag: 'EXHIBIT I',
            date: 'APR 2026',
            title: "X's Day — AI Virtual Human Simulation",
            highlights: [
                "Unity-based virtual human simulation built on the X's Day research framework.",
                'Offline Llama 3 via Ollama for personality-based activity planning using Chain-of-Thought prompting.',
                'NavMesh navigation, interactive 3D objects, and real-time AI state visualization.'
            ],
            techStack: ['Unity 6', 'C#', 'Llama 3', 'Ollama'],
            link: 'https://drive.google.com/file/d/14sOShyGJ_lyDibJlULdLJ2xeeTDBoFMK/view?usp=sharing',
            github: 'https://github.com/Knight-hrp'
        },
        {
            id: 'exhibit-j',
            tag: 'EXHIBIT J',
            date: 'MAY 2026',
            title: 'Custom CLI Tool',
            highlights: [
                'High-performance custom command-line interface tool engineered for efficient system command execution and process management.',
                'Features input/output stream piping, pipeline redirection, background job execution, and built-in command handlers.',
                'Modular C++/C codebase designed for low-latency terminal workflows and system automation.'
            ],
            techStack: ['C++', 'C', 'Linux', 'POSIX', 'Systems Programming'],
            github: 'https://github.com/Knight-hrp/custom-cli'
        },
        {
            id: 'exhibit-k',
            tag: 'EXHIBIT K',
            date: 'JUN 2025',
            title: 'Healthcare Monitoring System',
            highlights: [
                'High-performance patient vital signs monitoring system designed for real-time medical data stream processing.',
                'Structured data models for patient history tracking, emergency threshold alerts, and diagnostic logging.',
                'Engineered with memory-efficient C++ data structures.'
            ],
            techStack: ['C++', 'OOP', 'Data Structures', 'File I/O'],
            github: 'https://github.com/Knight-hrp/Healthcare_Monitoring_System'
        },
        {
            id: 'exhibit-l',
            tag: 'EXHIBIT L',
            date: 'MAR 2026',
            title: 'S.N.E.T.C.H — Voice Assistant',
            highlights: [
                'Voice-controlled AI assistant featuring 30+ automation modules for desktop system and media control.',
                'HuggingFace models via LangChain for conversational AI with persistent memory.',
                'Flask backend paired with a web UI frontend for stable deployment.'
            ],
            techStack: ['Python', 'Flask', 'LangChain', 'HuggingFace'],
            github: 'https://github.com/Knight-hrp/SNETCH'
        }
    ],
    experience: [
        {
            id: 'exp-1',
            role: 'AI Engineer Intern',
            company: 'IIIT Vadodara',
            period: 'MAY 2026 – AUG 2026',
            responsibilities: [
                'Built an agentic AI-based 5G Network Management Platform using FastAPI, Next.js, LangGraph, and Groq LLM.',
                'Integrated RAG (ChromaDB) and PostgreSQL for AI-driven network monitoring and analytics.'
            ]
        },
        {
            id: 'exp-2',
            role: 'Cyber Security Intern',
            company: 'The Red Users',
            period: 'JUNE 2024',
            responsibilities: [
                'Configured and analyzed network security using Windows Defender Firewall and Wireshark to monitor traffic.',
                'Performed web vulnerability assessments using OWASP ZAP and WebGoat, identifying SQL Injection, XSS, and CSRF vulnerabilities.'
            ]
        }
    ],
    skillCategories: [
        {
            id: 'sk-1',
            title: 'LANGUAGES',
            skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'Dart', 'C#']
        },
        {
            id: 'sk-2',
            title: 'CORE CS',
            skills: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Cyber Security', 'System Design']
        },
        {
            id: 'sk-3',
            title: 'FRAMEWORKS & LIBRARIES',
            skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flutter', 'Flask', 'FastAPI', 'LangChain', 'LangGraph', 'Prisma ORM', 'OpenSSL', 'ncurses']
        },
        {
            id: 'sk-4',
            title: 'DATABASES',
            skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'ChromaDB', 'Isar']
        },
        {
            id: 'sk-5',
            title: 'TOOLS & TECHNOLOGIES',
            skills: ['Git', 'GitHub', 'Linux', 'Docker', 'Wireshark', 'OWASP ZAP', 'Burp Suite', 'Postman', 'Ollama', 'Unity 6']
        }
    ],
    certifications: [
        {
            id: 'cert-1',
            title: 'NVIDIA CERTIFICATION',
            issuer: 'NVIDIA',
            issued: 'Oct 2025',
            url: 'https://learn.nvidia.com/certificates?id=UqiWiqWfS_qoH01r94e7SA#'
        },
        {
            id: 'cert-2',
            title: 'CYBERSECURITY JOB SIMULATION',
            issuer: 'Mastercard × Forage',
            issued: 'Aug 2024',
            url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_cCp7KgqnR32B4boqn_1724849099904_completion_certificate.pdf'
        }
    ],
    commendations: [
        {
            id: 'ach-1',
            text: 'Competitive Programming: LeetCode rating 1604, CodeChef rating 1535, Codeforces max rating 1131.'
        },
        {
            id: 'ach-2',
            text: 'Ranked among the Top 15 teams at the IIIT Vadodara Hackathon.'
        },
        {
            id: 'ach-3',
            text: 'Secured 2nd place in WEB SURGE 2025 for a responsive redesign of the IIITV-ICD website using Next.js, React, and Framer Motion.'
        }
    ],
    codingProfiles: [
        {
            id: 'cp-codechef',
            platform: 'CodeChef',
            handle: 'rishabh114',
            url: 'https://www.codechef.com/users/rishabh114',
            badgeText: 'Rating: 1535 (3★)'
        },
        {
            id: 'cp-leetcode',
            platform: 'LeetCode',
            handle: 'hbahsir',
            url: 'https://leetcode.com/u/hbahsir/',
            badgeText: 'Rating: 1604'
        },
        {
            id: 'cp-codeforces',
            platform: 'Codeforces',
            handle: 'ris_18',
            url: 'https://codeforces.com/profile/ris_18',
            badgeText: 'Max Rating: 1131'
        }
    ],
    contact: {
        email: 'patidarrishabh20@gmail.com',
        phone: '+918462870356',
        linkedin: 'https://www.linkedin.com/in/rishabh-patidar-370960289/',
        github: 'https://github.com/Knight-hrp'
    }
};
