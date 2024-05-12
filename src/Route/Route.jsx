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
import Update from '../pages/update/Update.jsx';
import All_Recommendation from '../pages/all_recommendation/All_Recommendation.jsx';
import My_Recommendation from '../pages/my_recommendation/My_Recommendation.jsx';

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
                path:"/my_recommendation",
                element:<My_Recommendation/>
            },
            {
                path: "/queries",
                element: <Queries />,
            },
            {
                path: "/viewDetails/:id",
                element: <View_Details />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/query`)
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/query/id/${params.id}`)
            },
            {
                path: "/allRecommend/:id",
                element: <All_Recommendation />,

            }


        ],
    },
]);

export default router;