import Main from '../layout/Main.jsx';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/home/Home.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Login from '../pages/login/Login.jsx';
import Register from '../pages/register/Register.jsx';
import My_Queries from '../pages/my-queries/My_Queries.jsx';
import Add_Queries from '../pages/my-queries/Add_Queries.jsx';
import Queries from '../pages/Queries/Queries.jsx';
import View_Details from '../pages/view_details/View_Details.jsx';
import All_Recommendation from '../pages/all_recommendation/All_Recommendation.jsx';
import My_Recommendation from '../pages/my_recommendation/My_Recommendation.jsx';
import Recommended_Me from '../pages/my_recommendation/Recommended_Me.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Update_Queries from '../pages/my-queries/Update_Queries.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';

const router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage />,
    },
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
                path: "/queries",
                element: <Queries />,
                // loader:()=>fetch(`${import.meta.env.VITE_API_URL}/queryCount`)
            },
            {
                path: "/viewDetails/:id",
                element: <PrivateRoute><View_Details /></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/query`)
            },
            {
                path: "/update/:id",
                element: <Update_Queries />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/query/id/${params.id}`)
            },
            {
                path: "/allRecommend/:id",
                element: <All_Recommendation />,

            },

            {
                path: "dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        path: '/dashboard/my_queries',
                        element: <PrivateRoute><My_Queries /></PrivateRoute>
                    },
                    {
                        path: "dashboard/my_recommendation",
                        element: <My_Recommendation />
                    },
                    {
                        path: "dashboard/recommended_me",
                        element: <Recommended_Me />
                    },
                    {
                        path: 'dashboard/add_queries',
                        element: <PrivateRoute> <Add_Queries /></PrivateRoute>
                    },
                ]
            }
        ],
    },
]);

export default router;