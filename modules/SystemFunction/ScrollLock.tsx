import { useEffect } from 'react';

const useScrollLock = () => {
    let scrollPosition = 0;

    const lockScroll = () => {
        scrollPosition = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    };

    const openScroll = () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
    };

    useEffect(() => {
        lockScroll();

        return () => {
            openScroll();
        };
    }, []);

    return { openScroll, lockScroll };
};

export default useScrollLock;