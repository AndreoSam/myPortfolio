import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Ensure you create this CSS file for styling
import { FaAngleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (!isVisible && window.pageYOffset > 300) {
            setIsVisible(true);
        } else if (isVisible && window.pageYOffset <= 300) {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [isVisible]);

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <FaAngleUp />

        </button>
    );
};

export default ScrollToTopButton;
