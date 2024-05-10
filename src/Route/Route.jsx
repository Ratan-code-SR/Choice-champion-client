import Main from '../layout/Main.jsx';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/home/Home.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Login from '../pages/login/Login.jsx';
import Register from '../pages/register/Register.jsx';
import My_Queries from '../pages/my-queries/My_Queries.jsx';
import Add_Queries from '../pages/my-queries/Add_Queries.jsx';
import Queries from '../pages/Queries/Queries.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/my_queries',
                element: <My_Queries />
            },
            {
                path: '/add-queries',
                element: <Add_Queries />
            },
            {
                path:"/queries",
                element:<Queries/>,
                loader:()=> fetch("http://localhost:5000/query")
            }


        ],
    },
]);

export default router;