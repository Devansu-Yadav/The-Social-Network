import { Navigate, useLocation, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const location = useLocation();
    const authToken = localStorage.getItem("authToken");

    return authToken ? (<Outlet />): (<Navigate to="/login" state={{ from: location }} replace />);
}

export { PrivateRoute };