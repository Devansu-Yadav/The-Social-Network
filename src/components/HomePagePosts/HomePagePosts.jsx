import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { PostCard } from "components";

const HomePagePosts = () => {
    return (
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-t-lg bg-primaryColor px-4 py-2">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none ${
                    selected
                      ? "bg-white shadow text-primaryColor"
                      : "text-whiteColor hover:bg-gray-200/30 hover:text-whiteColor"
                  }`}
                >
                  Latest
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none    ${
                    selected
                      ? "bg-white shadow text-primaryColor"
                      : "text-whiteColor hover:bg-gray-200/30 hover:text-whiteColor"
                  }`}
                >
                  Trending
                </button>
              )}
            </Tab>{" "}
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none    ${
                    selected
                      ? "bg-white shadow text-primaryColor"
                      : "text-whiteColor hover:bg-gray-200/30 hover:text-whiteColor"
                  }`}
                >
                  Oldest
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
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
            </Tab.Panel>
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
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
              </div>
            </Tab.Panel>
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
              <div>
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
    );
};

export { HomePagePosts };