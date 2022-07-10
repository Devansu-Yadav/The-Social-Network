import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { PeersCard } from "components";

const FollowRecommendations = () => {
    return (
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-t-lg bg-primaryColor px-4 py-2 sm:w-11/12 xxs:w-full">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none ${
                    selected
                      ? "bg-white shadow text-primaryColor"
                      : "text-whiteColor hover:bg-gray-200/30 hover:text-whiteColor"
                  }`}
                >
                  Following
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
                  Followers
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
                  Explore
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2 sm:w-11/12 xxs:w-full">
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 mb-16 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
              <div className="flex flex-row items-center justify-between gap-x-2 gap-y-8 flex-wrap">
                <PeersCard 
                    user={{
                        id: "",
                        firstName: "Johnrao",
                        lastName: "Doekar",
                        userName: "john.doekar1291",
                        email: "",
                        followers: [],
                        following: [],
                        bookmarks: [],
                        website: "",
                        avatar: "https://res.cloudinary.com/bluekart/image/upload/v1656953201/social-media-app/male-avatar_oz6l8t.png",
                        bio: "404 Not Found",
                        createdAt: new Date("4th July, 2022"),
                        updatedAt: new Date("5th July, 2022")
                    }}
                    isFollowed={true}
                />

                <PeersCard 
                    user={{
                        id: "",
                        firstName: "Johnrao",
                        lastName: "Doekar",
                        userName: "john.doekar1291",
                        email: "",
                        followers: [],
                        following: [],
                        bookmarks: [],
                        website: "",
                        avatar: "https://res.cloudinary.com/bluekart/image/upload/v1656953201/social-media-app/male-avatar_oz6l8t.png",
                        bio: "404 Not Found",
                        createdAt: new Date("4th July, 2022"),
                        updatedAt: new Date("5th July, 2022")
                    }}
                    isFollowed={false}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 mb-16 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
              <div className="flex flex-row items-center justify-between gap-x-2 gap-y-8 flex-wrap">
                <PeersCard 
                    user={{
                        id: "",
                        firstName: "Johnrao",
                        lastName: "Doekar",
                        userName: "john.doekar1291",
                        email: "",
                        followers: [],
                        following: [],
                        bookmarks: [],
                        website: "",
                        avatar: "https://res.cloudinary.com/bluekart/image/upload/v1656953201/social-media-app/male-avatar_oz6l8t.png",
                        bio: "404 Not Found",
                        createdAt: new Date("4th July, 2022"),
                        updatedAt: new Date("5th July, 2022")
                    }}
                    isFollowed={false}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 mb-16 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
                <div className="flex flex-row items-center justify-between gap-x-2 gap-y-8 flex-wrap">
                <PeersCard 
                    user={{
                        id: "",
                        firstName: "Johnrao",
                        lastName: "Doekar",
                        userName: "john.doekar1291",
                        email: "",
                        followers: [],
                        following: [],
                        bookmarks: [],
                        website: "",
                        avatar: "https://res.cloudinary.com/bluekart/image/upload/v1656953201/social-media-app/male-avatar_oz6l8t.png",
                        bio: "404 Not Found",
                        createdAt: new Date("4th July, 2022"),
                        updatedAt: new Date("5th July, 2022")
                    }}
                    isFollowed={false}
                />
                </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
    );
};

export { FollowRecommendations };