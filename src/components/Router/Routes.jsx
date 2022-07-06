import React from "react";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                {/* Add routes for Home, and other pages */}
            </Route>
            {/* Add routes for Login, Signup and 404 pages */}
        </Routes>
    );
}

export { AppRoutes };