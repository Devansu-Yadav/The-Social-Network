import { SinglePost } from "components";

const SinglePostPageContent = () => {
    return (
        <main className="flex flex-col items-center justify-between p-4 sm:px-4 xxs:px-1">
            <div className="flex flex-col gap-y-12 xs:w-10/12 xxs:w-full">
                <SinglePost post={{
                    id: "", 
                    userName: "@devansh.yadav007", 
                    displayName: "Devansu. Y", 
                    imageUrl: "",
                    avatar: "https://devansuyadav.live/assets/Devansu_Yadav.jpg",
                    content: "Hi, I'm Devansu Yadav, creator of The Social Network. The social network of the future is here, for everyone! Stay closer to your friends, family, and acquaintances like never before on The Social Network app 🙌🌐",
                    comments: [],
                    likes: [],
                    createdAt: new Date("7th July, 2022")
                }} />
            </div>
        </main>
    );
}

export { SinglePostPageContent };