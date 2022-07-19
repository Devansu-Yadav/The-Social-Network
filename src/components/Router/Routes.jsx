import React from "react";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { Home, Explore, Login, Signup, NotFoundPage, Peers, Bookmarks, UserProfile, OtherUserProfile, SinglePost } from "pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/peers" element={<Peers />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/profile/:userId" element={<OtherUserProfile />} />
                <Route path="/post/:postId" element={<SinglePost />} />
            </Route>
            {/* Add routes for Login, Signup and 404 pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export { AppRoutes };