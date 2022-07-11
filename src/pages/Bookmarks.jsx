import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, BookmarksPageContent, NavBottomBar } from "components";

const Bookmarks = () => {
    // Updating title on rendering Bookmarks page comp
    useEffect(() => {
        document.title = "The Social Network - Bookmarks";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="bookmarks" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <NavBar/>
                <BookmarksPageContent />
            </main>
            <NavBottomBar active="bookmarks" />
            <RecommendationSideBar />
        </div>
    );
};

export { Bookmarks };