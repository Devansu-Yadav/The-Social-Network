import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    addDoc,
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    serverTimestamp
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "firebase-config";
import { setPost } from "redux/slices/postSlice";
import { getUserData } from "common/services";

const addPost = async (postData, dispatch) => {
    const postRef = collection(db, "posts");

    try {
        const newPost = await addDoc(postRef, { ...postData, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
        await updateDoc(doc(postRef, newPost?.id), { id: newPost?.id });
        dispatch(setPost({ ...postData, id: newPost?.id }));
        dispatch(getExplorePosts());
        toast.success("Post created!");
    } catch(error) {
        console.log(error);
        toast.error("Failed to create post!");
    }
};

const editPost = async (id, updatedPostData, dispatch) => {
    try {
        const postRef = doc(db, "posts", id);
        await updateDoc(postRef, { content: updatedPostData?.content, imageUrl: updatedPostData?.imageUrl, updatedAt: serverTimestamp() });
        toast.success("Post updated!");
        dispatch(getExplorePosts());
    } catch(error) {
        console.log(error);
        toast.error("Failed to update post");
    }
};

const deletePost = async (id, dispatch) => {
    try {
        const postRef = doc(db, "posts", id);
        await deleteDoc(postRef);
        dispatch(getExplorePosts());
        toast.success("Post deleted!");
    } catch(error) {
        console.log(error);
        toast.error("Failed to delete post");
    }
};

const getExplorePosts = createAsyncThunk("posts/getExplorePosts", async () => {
    const posts = [];
    const postRef = doc(db, "posts");

    try {
        const q = query(postRef, orderBy("createdAt", "desc"));
        const postSnap = await getDocs(q);

        postSnap.forEach((doc) => {
            posts?.push(doc.data());
        });

        return posts;
    } catch (error) {
        console.log(error);
        toast.error("Couldn't fetch all posts!");
    }
});

const likePost = async (postId, userId, userData, dispatch) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            likes: arrayUnion({
                id: userId,
                userName: userData?.userName
            })
        });
        dispatch(getExplorePosts());
    } catch(error) {
        console.log(error);
        toast.error("Failed to like post!");
    }
};

const dislikePost = async (postId, userId, userData, dispatch) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            likes: arrayRemove({
                id: userId,
                userName: userData?.userName
            })
        });
        dispatch(getExplorePosts());
    } catch(error) {
        console.log(error);
        toast.error("Failed to dislike post!");
    }
};

const postComment = async (postId, comment, dispatch) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            comments: arrayUnion(comment),
        });
        dispatch(getExplorePosts());
    } catch(error) {
        console.log(error);
        toast.error("Couldn't post your comment.");
    }
};

const deleteComment = async (postId, comment, dispatch) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            comments: arrayRemove(comment),
        });
        dispatch(getExplorePosts());
    } catch(error) {
        console.log(error);
        toast.error("Couldn't delete your comment.");
    }
};

const bookmarkPost = async (userId, post, dispatch) => {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
            bookmarks: arrayUnion(post),
        });

        dispatch(getUserData(userId));
        dispatch(getExplorePosts());
        toast.success("Post added to bookmarks");
    } catch(error) {
        console.log(error);
        toast.error("Couldn't bookmark post");
    }
};

const removePostFromBookmarks = async (userId, post, dispatch) => {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
            bookmarks: arrayRemove(post),
        });

        dispatch(getUserData(userId));
        dispatch(getExplorePosts());
        toast.success("Post removed from bookmarks!");
    } catch(error) {
        console.log(error);
        toast.error("Couldn't remove post from bookmarks");
    }
};

export { 
    addPost, 
    editPost, 
    deletePost, 
    getExplorePosts, 
    likePost, 
    dislikePost, 
    postComment, 
    deleteComment,
    bookmarkPost,
    removePostFromBookmarks
};
