import { UserProfileCard, UserProfilePagePosts } from "components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setOtherUser } from "redux/slices/authSlice";

const OtherUserProfilePage = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const { allUsers, otherUserData } = useSelector((state) => state.auth);
    const user = otherUserData;

    const { posts } = useSelector((state) => state.post);
    const userProfilePagePosts = posts?.filter((post) => post?.userId === userId);

    useEffect(() => {
        const findUser = allUsers?.find((user) => user?.id === userId);
        dispatch(setOtherUser(findUser));
    }, [userId, allUsers]);

    return (
        <main className="flex flex-col items-center justify-between md:p-4 xxs:p-0 xxs:pb-4">
            <div className="flex flex-col md:gap-y-12 xxs:gap-y-8 xs:w-10/12 xxs:w-full">
                <UserProfileCard 
                    user={user}
                    isUserNative={false}
                    userPosts={[{}]}
                />
                <UserProfilePagePosts userPosts={userProfilePagePosts} />
            </div>
        </main>
    );
}

export { OtherUserProfilePage };