import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, HomePageContent, NavBottomBar } from "components";

const Home = () => {
    // Updating title on rendering Home page comp
    useEffect(() => {
        document.title = "The Social Network - Home";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="home" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <NavBar/>
                <HomePageContent />
            </main>
            <NavBottomBar active="home" />
            <RecommendationSideBar />
        </div>
    );
};

export { Home };