import React, { useMemo } from 'react';

interface DustParticle {
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    opacity: number;
}

export const DustParticles: React.FC = () => {
    const particles = useMemo<DustParticle[]>(() => {
        return Array.from({ length: 28 }, (_, i) => ({
            id: i,
            size: Math.random() * 3 + 1.5,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 15 + 12,
            delay: Math.random() * 8,
            opacity: Math.random() * 0.35 + 0.15,
        }));
    }, []);

    return (
        <div className="dust-particles" aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="dust-particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};
