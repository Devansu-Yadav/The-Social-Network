import { UserProfileCard, UserProfilePagePosts } from "components";

const UserProfilePageContent = () => {
    return (
        <main className="flex flex-col items-center justify-between md:p-4 xxs:p-0 xxs:pb-4">
            <div className="flex flex-col md:gap-y-12 xxs:gap-y-8 xs:w-10/12 xxs:w-full">
                <UserProfileCard 
                    user={{
                        id: "",
                        firstName: "Devansu",
                        lastName: "Yadav",
                        userName: "@devansh_yadav007",
                        email: "",
                        coverImg: "https://pbs.twimg.com/profile_banners/1320254376456355840/1639311969/1080x360",
                        followers: [{}, {}, {}, {}, {}, {}, {}],
                        following: [{}],
                        bookmarks: [],
                        website: "https://devansuyadav.live/",
                        avatar: "https://devansuyadav.live/assets/Devansu_Yadav.jpg",
                        bio: "Software Engineer🚀 | Learning Full-Stack Dev ⚡ @neogcamp'22 | I tweet about Web Dev 🕸, Microsoft Tech, OSS ✨ | CS Undergrad | Gold #MSFTStudentAmbassadors ✨ |",
                        createdAt: new Date("4th July, 2022"),
                        updatedAt: new Date("5th July, 2022")
                    }}
                    isUserNative={true}
                    isFollowingUser={false}
                    userPosts={[{}]}
                />
                <UserProfilePagePosts />
            </div>
        </main>
    );
}

export { UserProfilePageContent };