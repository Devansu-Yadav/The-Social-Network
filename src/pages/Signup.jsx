import { useEffect } from "react";
import { GradientBgCanvas, SignupForm, Hero } from "components";

const Signup = () => {

    // Updating title on rendering Signup page comp
    useEffect(() => {
        document.title = "The Social Network - Signup";
    }, []);

    return (
        <div className="m-0 p-0">
            <GradientBgCanvas />

            <div className="fixed top-0 xl:overflow-hidden xxs:overflow-auto h-screen w-full">
                <div className="flex xl:flex-row xxs:flex-col-reverse items-center gap-x-8 justify-center">
                    <div className="flex h-screen flex-col items-center justify-center">
                        <SignupForm />
                    </div>

                    <Hero />
                </div>
            </div>
        </div>
    );
};

export { Signup };