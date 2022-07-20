import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { PostCard } from "components";

const UserProfilePagePosts = ({ userPosts, userLikedPosts }) => {
	return (
		<Tab.Group>
			<Tab.List className="flex space-x-1 rounded-t-lg bg-primaryColor px-4 py-2 md:mx-0 xxs:mx-4">
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={`w-full rounded-lg py-2.5 font-medium leading-5 focus:outline-none ${selected
									? "bg-white shadow text-primaryColor"
									: "text-whiteColor hover:bg-gray-200/30 hover:text-whiteColor"
								}`}
						>
							Posts
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
							Likes
						</button>
					)}
				</Tab>{" "}
			</Tab.List>
			<Tab.Panels className="mt-2 md:mx-0 xxs:mx-4">
				<Tab.Panel
					as="div"
					className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
				>
					<div>
						{ !userPosts.length && (
							<div className="w-4/5 text-center gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
								<h3 className="xs:!text-2xl xxs:text-xl text-primaryColor font-bold">No Posts created so far :(</h3>
							</div>
						)}

						{ userPosts?.map((post) => {
							return (
								<PostCard key={post?.id} post={post} />
							);
						})}
					</div>
				</Tab.Panel>
				<Tab.Panel
					as="div"
					className="rounded-xl bg-white p-3 pb-10 ring-white ring-opacity-60 ring-offset-2 ring-offset-tertiaryColor focus:outline-none focus:ring-2"
				>
					<div>
						{ !userLikedPosts.length && (
							<div className="w-4/5 text-center gap-y-8 mt-10 mx-auto mb-12 flex flex-col items-center justify-center">
								<h3 className="xs:!text-2xl xxs:text-xl text-primaryColor font-bold">No Liked posts!</h3>
								<h3 className="xs:!text-2xl xxs:text-xl text-gray-600">Check out some interesting posts you may like on the Explore page!</h3>
							</div>
						)}

						{ userLikedPosts?.map((post) => {
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

export { UserProfilePagePosts };