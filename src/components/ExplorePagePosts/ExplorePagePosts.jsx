import React from "react";
import { PostCard } from "components";
import { useSelector } from "react-redux";

const ExplorePagePosts = () => {
    const { posts } = useSelector((state) => state.post);
	const { authToken } = useSelector((state) => state.auth);

	const explorePagePosts = posts?.filter((post) => post?.userId !== authToken);
    
    return (
        <div className="mt-2">
            <div className="flex flex-row items-center justify-between mb-4 px-5">
                <h2 className="text-xl text-primaryColor font-bold">Explore</h2>
                <p className="text-base text-gray-600 font-semibold">Showing latest posts</p>
            </div>

            <div className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2">
              <div>
                { explorePagePosts?.map((post) => {
                    return (
                        <PostCard 
                            key={post?.id} 
                            post={post} />
                    );
                })}
              </div>
            </div>
        </div>
    );
};

export { ExplorePagePosts };