import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, SinglePostPageContent, NavBottomBar } from "components";

const SinglePost = () => {
    // Updating title on rendering Single Post page comp
    useEffect(() => {
        document.title = "The Social Network - Single Post";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <NavBar/>
                <SinglePostPageContent />
            </main>
            <NavBottomBar active="" />
            <RecommendationSideBar />
        </div>
    );
};

export { SinglePost };