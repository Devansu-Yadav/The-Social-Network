import { PeersPageBanner, FollowRecommendations } from "components";

const PeersPageContent = () => {
    return (
        <main className="flex flex-col items-center justify-between p-4">
            <div className="flex flex-col items-center gap-y-12 xs:w-10/12 xxs:w-full">
                <PeersPageBanner />
                <FollowRecommendations />
            </div>
        </main>
    );
}

export { PeersPageContent };