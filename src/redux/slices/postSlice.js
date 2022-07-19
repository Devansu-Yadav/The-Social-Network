import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: {

    }
});

export default PostSlice.reducer;
export const { setPost, setAllPosts } = PostSlice.actions;