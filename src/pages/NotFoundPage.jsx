import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, NotFoundPageContent, NavBottomBar } from "components";

const NotFoundPage = () => {
    // Updating title on rendering 404 Not Found comp
    useEffect(() => {
        document.title = "The Social Network - 404 Not Found";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <NavBar/>
                <NotFoundPageContent />
            </main>
            <NavBottomBar active="" />
            <RecommendationSideBar />
        </div>
    );
};

export { NotFoundPage };