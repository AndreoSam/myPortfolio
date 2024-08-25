import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.history.scrollRestoration = 'manual'; // Prevent browser from restoring scroll position
        window.scrollTo(0, 0);
    }, [location]); // Runs every time the route changes

    return null;
}

export default ScrollToTop;
