import Main from '../layout/Main.jsx';
import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/home/home/Home.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Login from '../pages/login/Login.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            }
           
        ],
    },
]);

export default router;