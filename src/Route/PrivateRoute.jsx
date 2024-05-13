import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/provider/ContextProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <>
             <div className="w-16 my-56 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>

};

export default PrivateRoute;