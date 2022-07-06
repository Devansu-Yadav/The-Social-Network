import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const location = useLocation();
    const { authToken } = useSelector((store) => store.auth);

    return authToken ? (<Outlet />): (<Navigate to="/login" state={{ from: location }} replace />);
}

export { PrivateRoute };