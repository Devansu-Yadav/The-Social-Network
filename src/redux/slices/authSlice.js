import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import { getUserData, getAllUsers, signupUser, loginUser } from "common/services";

const initialState = {
    authToken: localStorage.getItem("authToken") ?? "",
    authStatus: "idle",
    userData: {},
    otherUserData: {},
    allUsers: [{
        id: "vmrU3VIKYZCbzjcEMWS4",
        firstName: "Johnrao",
        lastName: "Doekar",
        userName: "john.doekar1291",
        email: "john_doekar@gmail.com",
        bookmarks: [],
        followers: [],
        following: [],
        website: "https://www.google.com/",
        coverImg: ""
    }]
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        storeUserCredentials: (state, action) => {
            state.userData = action.payload;
        },
        setOtherUser: (state, action) => {
            state.otherUserData = action.payload;
        },
        logout: (state) => {
            state.authToken = "";
            state.userData = {};
            state.authStatus = "idle";
            localStorage.removeItem("authToken");
            toast.success("User logged out successfully!");
        }
    },
    extraReducers: {
        // get a user's data 
        [getUserData.pending]: (state) => {
            state.authStatus = "loading";
        },
        [getUserData.fulfilled]: (state, action) => {
            state.authStatus = "fulfilled";
            state.userData = action.payload;
            state.authToken = localStorage.getItem("authToken");
        },
        [getUserData.rejected]: (state) => {
            state.authStatus = "rejected";
        },

        // get all users data
        [getAllUsers.pending]: (state) => {
            state.authStatus = "pending";
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.authStatus = "fulfilled";
            state.allUsers = action.payload;
        },
        [getAllUsers.rejected]: (state) => {
            state.authStatus = "rejected";
        },

        // signup user
        [signupUser.pending]: (state) => {
            state.authStatus = "pending";
        },
        [signupUser.fulfilled]: (state) => {
            state.authStatus = "fulfilled";
        },
        [signupUser.rejected]: (state) => {
            state.authStatus = "rejected";
        },

        // login user
        [loginUser.pending]: (state) => {
            state.authStatus = "pending";
        },
        [loginUser.fulfilled]: (state) => {
            state.authStatus = "fulfilled";
        },
        [loginUser.rejected]: (state) => {
            state.authStatus = "rejected";
        }
    }
});

export const { storeUserCredentials, logout, setOtherUser } = authSlice.actions;
export default authSlice.reducer;