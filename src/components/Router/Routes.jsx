import React from "react";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
            </Route>
            {/* Add routes for Login, Signup and 404 pages */}
        </Routes>
    );
}

export { AppRoutes };