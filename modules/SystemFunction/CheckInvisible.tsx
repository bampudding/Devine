'use client'

import { useEffect, useState } from "react";

interface Props {
    Class: string;
}

const CheckInvisible = ({
    Class
}: Props) => {
    const [isClassInvisible, setIsClassInvisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const ClassElement = document.querySelector(`.${Class}`);

            if (ClassElement) {
                const { top } = ClassElement.getBoundingClientRect();
                setIsClassInvisible(top < 0);
            } else {
                setIsClassInvisible(false);
            }
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isClassInvisible }
}

export default CheckInvisible;