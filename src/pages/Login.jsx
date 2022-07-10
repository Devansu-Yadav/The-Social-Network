import { useEffect } from "react";
import { GradientBgCanvas, LoginForm, Hero } from "components";

const Login = () => {

    // Updating title on rendering Login page comp
    useEffect(() => {
        document.title = "The Social Network - Login";
    }, []);

    return (
        <div className="m-0 p-0">
            <GradientBgCanvas />

            <div className="fixed top-0 xl:overflow-hidden xxs:overflow-auto h-screen w-full">
                <div className="flex xl:flex-row xxs:flex-col-reverse items-center gap-x-8 justify-center">
                    <div className="flex h-screen flex-col items-center justify-center">
                        <LoginForm />
                    </div>

                    <Hero />
                </div>
            </div>
        </div>
    );
};

export { Login };