'use client'

import { useEffect, useState } from "react";

const CheckScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollTop = window.scrollY;
        const isHeaderScrolled = scrollTop > 0;

        setIsScrolled(isHeaderScrolled);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isHeaderScrolled = scrollTop > 0;

            setIsScrolled(isHeaderScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isScrolled };
}

export default CheckScroll;