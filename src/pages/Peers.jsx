import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, PeersPageContent, NavBottomBar } from "components";

const Peers = () => {
    // Updating title on rendering Peers page comp
    useEffect(() => {
        document.title = "The Social Network - Find Peers";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="peers" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <NavBar/>
                <PeersPageContent />
            </main>
            <NavBottomBar active="peers" />
            <RecommendationSideBar />
        </div>
    );
};

export { Peers };