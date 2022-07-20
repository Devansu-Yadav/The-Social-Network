import React from "react";
import { PostCard } from "components";
import { useSelector } from "react-redux";

const BookmarksPagePosts = () => {
	const { userData } = useSelector((state) => state.auth);

	const bookmarksPagePosts = userData?.bookmarks;

    return (
        <div className="mt-2">
            <div className="flex flex-row items-center justify-between mb-4 px-5">
                <h2 className="text-xl text-primaryColor font-bold">Bookmarks</h2>
                <p className="text-base text-gray-600 font-semibold">Showing all posts</p>
            </div>

            <div className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2">
              <div>
                { !bookmarksPagePosts.length && (
                    <div className="w-4/5 text-center gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
                        <h3 className="xs:!text-2xl xxs:text-xl text-primaryColor font-bold">No Bookmarked posts found!</h3>
                        <h3 className="xs:!text-2xl xxs:text-xl text-gray-600">Check out some interesting posts on the Explore page!</h3>
                    </div>
                )}

                { bookmarksPagePosts?.map((post) => {
                    return (
                        <PostCard key={post?.id} post={post} />
                    );
                })}
              </div>
            </div>
        </div>
    );
};

export { BookmarksPagePosts };