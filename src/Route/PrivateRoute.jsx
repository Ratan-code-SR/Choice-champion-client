import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/provider/ContextProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <>
            <div className="flex justify-center my-52">
                <span className="loading loading-spinner text-neutral"></span>
            </div>
        </>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>

};

export default PrivateRoute;