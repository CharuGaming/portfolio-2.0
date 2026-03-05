import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const isClickable =
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button');
            setIsHovering(isClickable);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mousePosition.x - 16, springConfig);
    const cursorY = useSpring(mousePosition.y - 16, springConfig);

    // Hide on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                    borderColor: 'rgba(255, 255, 255, 0.8)'
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                style={{
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1, // shrink inner dot on hover
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
