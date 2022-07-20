import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { PostCard } from "components";
import { useSelector } from "react-redux";

const HomePagePosts = () => {
	const { posts } = useSelector((state) => state.post);
	const { userData, authToken } = useSelector((state) => state.auth);

	const homePagePosts = posts?.filter((post) => 
		userData?.following?.includes(post?.userId) || post?.userId === authToken);

	// Sorting posts by most no of likes
	const trendingPosts = [...posts].sort((a, b) => b.likes?.length - a.likes?.length);

	const oldestPosts = [...posts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

	return (
		<Tab.Group>
			<Tab.List className="flex space-x-1 rounded-t-lg bg-primaryColor px-4 py-2">
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none ${selected
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
							className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none    ${selected
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
							className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none    ${selected
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
						{ homePagePosts?.map((post) => {
							return (
								<PostCard 
									key={post?.id}
									post={post} />
							);
						})}
					</div>
				</Tab.Panel>
				<Tab.Panel
					as="div"
					className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
				>
					<div>
						{ trendingPosts?.map((post) => {
							return (
								<PostCard
									key={post?.id} 
									post={post} />
							);
						})}
					</div>
				</Tab.Panel>
				<Tab.Panel
					as="div"
					className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
				>
					<div>
						{ oldestPosts?.map((post) => {
							return (
								<PostCard
									key={post?.id} 
									post={post} />
							);
						})}
					</div>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export { HomePagePosts };