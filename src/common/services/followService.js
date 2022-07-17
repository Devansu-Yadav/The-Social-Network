import { db } from "firebase-config";
import { toast } from "react-toastify";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { setOtherUser } from "redux/slices/authSlice";
import { getUserData, getAllUsers } from "common/services";

const followUser = async (userId, user, otherUserData, otherUserId, dispatch) => {
    try {
        const userDoc = doc(db, "users", userId);
        const otherUserDoc = doc(db, "users", otherUserId);

        const userResponse = await updateDoc(userDoc, { following: arrayUnion(otherUserId) });
        const otherUserResponse = await updateDoc(otherUserDoc, { followers: arrayUnion(userId) });

        dispatch(getUserData(userId));
        dispatch(getAllUsers());
        dispatch(setOtherUser({ ...otherUserData }));
        toast.success(`You followed ${otherUserData?.userName}`);
    } catch(error) {
        console.log(error);
        toast.error("Something went wrong. Try again!");
    }
};

const unfollowUser = async (userId, user, otherUserData, otherUserId, dispatch) => {
    try {
        const userDoc = doc(db, "users", userId);
        const otherUserDoc = doc(db, "users", otherUserId);

        const userResponse = await updateDoc(userDoc, { following: arrayRemove(otherUserId) });
        const otherUserResponse = await updateDoc(otherUserDoc, { followers: arrayRemove(userId) });

        dispatch(getUserData(userId));
        dispatch(getAllUsers());
        toast.success(`You unfollowed ${otherUserData?.userName}`);
    } catch(error) {
        console.log(error);
        toast.error("Something went wrong. Try again!");
    }
};

export { followUser, unfollowUser };