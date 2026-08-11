import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    speed?: number;
    delay?: number;
    showCursor?: boolean;
    className?: string;
    onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = 65,
    delay = 300,
    showCursor = true,
    className = '',
    onComplete,
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timeoutId: ReturnType<typeof setTimeout>;
        let intervalId: ReturnType<typeof setInterval>;

        timeoutId = setTimeout(() => {
            let index = 0;
            intervalId = setInterval(() => {
                if (!isMounted) return;
                index++;
                setDisplayedText(text.slice(0, index));
                if (index >= text.length) {
                    clearInterval(intervalId);
                    setIsComplete(true);
                    if (onComplete) onComplete();
                }
            }, speed);
        }, delay);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, speed, delay, onComplete]);

    return (
        <span className={`typewriter-wrapper ${className}`}>
            {displayedText}
            {showCursor && !isComplete && <span className="typewriter-cursor">▌</span>}
        </span>
    );
};
