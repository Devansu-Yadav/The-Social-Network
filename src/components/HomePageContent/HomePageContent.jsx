import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CreatePostCard, HomePagePosts } from "components";

const HomePageContent = () => {
    return (
        <main className="flex flex-col items-center justify-between p-4">
            <div className="flex flex-col gap-y-12 xs:w-10/12 xxs:w-11/12">
                <CreatePostCard />
                <HomePagePosts />
            </div>
        </main>
    );
}

export { HomePageContent };