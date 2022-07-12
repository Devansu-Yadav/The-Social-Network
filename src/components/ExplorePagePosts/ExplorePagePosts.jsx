import React from "react";
import { PostCard } from "components";

const ExplorePagePosts = () => {
    return (
        <div className="mt-2">
            <div className="flex flex-row items-center justify-between mb-4 px-5">
                <h2 className="text-xl text-primaryColor font-bold">Explore</h2>
                <p className="text-base text-gray-600 font-semibold">Showing latest posts</p>
            </div>

            <div className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2">
              <div>
                <PostCard post={{ 
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

                <PostCard post={{ 
                    id: "", 
                    userName: "@john.doekar015", 
                    displayName: "John. D",
                    imageUrl: "", 
                    avatar: "https://res.cloudinary.com/bluekart/image/upload/v1656953201/social-media-app/male-avatar_oz6l8t.png",
                    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                    comments: [],
                    likes: [],
                    createdAt: new Date("5th July, 2022")
                }} />

                <PostCard post={{ 
                    id: "", 
                    userName: "@john.doekar015", 
                    displayName: "John. D", 
                    imageUrl: "https://res.cloudinary.com/bluekart/image/upload/v1657193750/social-media-app/undraw_Social_networking_re_i1ex_f3qguw.png",
                    avatar: "https://res.cloudinary.com/bluekart/image/upload/v1656953201/social-media-app/male-avatar_oz6l8t.png",
                    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                    comments: [],
                    likes: [],
                    createdAt: new Date("1st July, 2022")
                }} />
              </div>
            </div>
        </div>
    );
};

export { ExplorePagePosts };