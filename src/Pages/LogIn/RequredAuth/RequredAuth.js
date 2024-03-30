import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Home/Sheared/Loading/Loading";

function RequredAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading />;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequredAuth;
