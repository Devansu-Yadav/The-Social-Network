import { createSlice } from "@reduxjs/toolkit";
import { getExplorePosts } from "common/services";

const initialState = {
    postStatus: "idle",
    post: {},
    posts: [],
    sortBy: "trending"
};

const PostSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload;
        },
        setAllPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getExplorePosts.pending, (state) => {
            state.postStatus = "pending";
        })
        .addCase(getExplorePosts.fulfilled, (state, action) => {
            state.postStatus = "fulfilled";
            state.posts = action.payload;
        })
        .addCase(getExplorePosts.rejected, (state) => {
            state.postStatus = "rejected";
        });
    }
});

export const { setPost, setAllPosts } = PostSlice.actions;
export default PostSlice.reducer;