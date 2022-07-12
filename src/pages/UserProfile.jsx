import { useEffect } from "react";
import { NavBar, NavSideBar, RecommendationSideBar, UserProfilePageContent, NavBottomBar } from "components";

const UserProfile = () => {
    // Updating title on rendering User Profile page comp
    useEffect(() => {
        document.title = "The Social Network - Profile";
    }, []);

    return (
        <div className="flex flex-row">
            <NavSideBar active="profile" />
            <main className="xl:w-8/12 lg:w-3/5 md:w-full xs:w-full xxs:w-full">
                <div className="md:block xxs:hidden">
                    <NavBar/>
                </div>
                <UserProfilePageContent />
            </main>
            <NavBottomBar active="profile" />
            <RecommendationSideBar />
        </div>
    );
};

export { UserProfile };