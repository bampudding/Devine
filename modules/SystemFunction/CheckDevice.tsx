const CheckDevice = () => {
    let isMobile = false;

    if (typeof window !== "undefined") {
        const userAgent = window.navigator.userAgent;
        const mobileAgents = ["Android", "iPhone", "iPad", "iPod", "BlackBerry", "Windows Phone"];
        isMobile = mobileAgents.some(agent => userAgent.includes(agent));
    }

    return isMobile;
};

export default CheckDevice;