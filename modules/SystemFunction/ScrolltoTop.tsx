'use client'

import { useEffect } from "react";

const ScrolltoTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
}

export default ScrolltoTop