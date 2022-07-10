import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, ExplorePageContent, NavBottomBar } from "components";

const Explore = () => {
    // Updating title on rendering Explore page comp
    useEffect(() => {
        document.title = "The Social Network - Explore";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="explore" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <NavBar/>
                <ExplorePageContent />
            </main>
            <NavBottomBar active="explore" />
            <RecommendationSideBar />
        </div>
    );
};

export { Explore };