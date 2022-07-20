import { UserProfileCard, UserProfilePagePosts } from "components";
import { useSelector } from "react-redux";

const UserProfilePageContent = () => {
    const currentLoggedInUserData = useSelector((state) => state.auth.userData);
    const userData = currentLoggedInUserData;

    const { posts } = useSelector((state) => state.post);
	const { authToken } = useSelector((state) => state.auth);

	const userProfilePagePosts = posts?.filter((post) => post?.userId === authToken);
    const userLikedPosts = posts?.filter((post) => post?.likes?.find((user) => user?.id === authToken));

    return (
        <main className="flex flex-col items-center justify-between md:p-4 xxs:p-0 xxs:pb-4">
            <div className="flex flex-col md:gap-y-12 xxs:gap-y-8 xs:w-10/12 xxs:w-full">
                <UserProfileCard 
                    user={userData}
                    isUserNative={true}
                    userPosts={[{}]}
                />
                <UserProfilePagePosts userPosts={userProfilePagePosts} userLikedPosts={userLikedPosts} />
            </div>
        </main>
    );
}

export { UserProfilePageContent };