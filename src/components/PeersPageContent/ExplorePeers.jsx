import React, { Fragment, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { PeersCard } from "components";
import { useSelector, useDispatch } from "react-redux";
import { isFollowingUser, getFollowingUsers, getFollowedUsers, getExplorePeers } from "common/helpers";
import { getUserData, getAllUsers } from "common/services";

const FollowRecommendations = () => {
    const dispatch = useDispatch();
    const { userData, allUsers, authToken } = useSelector((state) => state.auth);

    useEffect(() => {
      dispatch(getUserData(authToken));
      dispatch(getAllUsers());
    }, [authToken]);

    const followingUsers = getFollowingUsers(allUsers, userData);
    const followedUsers = getFollowedUsers(allUsers, userData);
    const explorePeers = getExplorePeers(allUsers, userData);

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
                { !followingUsers?.length && (<div className="w-4/5 text-center gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
                    <h3 className="xs:!text-2xl xxs:text-xl text-primaryColor font-bold">Not following anyone</h3>
                    <h3 className="xs:!text-2xl xxs:text-xl text-gray-600">Check out the Explore section to make new friends!</h3>
                </div>)}

                { followingUsers?.map((user) => {
                  return (
                    <PeersCard
                        key={user?.id}
                        user={user}
                        isFollowed={isFollowingUser(user, userData)}
                    />);
                })}
              </div>
            </Tab.Panel>
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 mb-16 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
              <div className="flex flex-row items-center justify-between gap-x-2 gap-y-8 flex-wrap">
              { !followedUsers?.length && (<div className="w-4/5 gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
                    <h3 className="xs:!text-3xl xxs:text-xl text-primaryColor">No one follows you :(</h3>
                    <img className="w-4/5" src="https://c.tenor.com/E0LNlLSwLUAAAAAC/disney-marvel.gif" alt="Not followed by anyone" />
                </div>)}

                { followedUsers?.map((user) => {
                  return (
                    <PeersCard 
                        key={user?.id}
                        user={user}
                        isFollowed={isFollowingUser(user, userData)}
                    />);
                })}
              </div>
            </Tab.Panel>
            <Tab.Panel
              as="div"
              className="rounded-xl bg-white p-3 mb-16 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
            >
                <div className="flex flex-row items-center justify-between gap-x-2 gap-y-8 flex-wrap">
                  { !explorePeers?.length && (<div className="w-4/5 text-center gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
                    <h3 className="xs:!text-2xl xxs:text-xl text-primaryColor font-bold">Woahhh you follow a lot of people!</h3>
                    <h3 className="xs:!text-2xl xxs:text-xl text-gray-600">Check back here after sometime to explore more peers :)</h3>
                  </div> )}

                  { explorePeers?.map((user) => {
                    return (
                      <PeersCard
                        key={user?.id}
                        user={user}
                        isFollowed={isFollowingUser(user, userData)}
                    />);
                  })}
                </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
    );
};

export { FollowRecommendations };