import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { Navigate, useLocation } from "react-router-dom";

function RequredAuth({ children }) {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequredAuth;
