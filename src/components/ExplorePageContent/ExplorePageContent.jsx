import { ExplorePagePosts, ExplorePostsBanner } from "components";

const ExplorePageContent = () => {
    return (
        <main className="flex flex-col items-center justify-between p-4">
            <div className="flex flex-col gap-y-12 xs:w-10/12 xxs:w-full">
                <ExplorePostsBanner />
                <ExplorePagePosts />
            </div>
        </main>
    );
}

export { ExplorePageContent };