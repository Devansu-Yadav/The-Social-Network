import { Gradient } from "common";
import { useEffect } from "react";
import "styles/GradientBgCanvas.css";

const GradientBgCanvas = () => {

    useEffect(() => {
        // Create your instance
        const gradient = new Gradient();
        gradient.initGradient('#gradient-canvas');
    }, []);

    return (
        <canvas id="gradient-canvas" data-js-darken-top data-transition-in />
    );
};

export { GradientBgCanvas };
