import Main from '../layout/Main.jsx';
import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/home/home/Home.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'

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
           
        ],
    },
]);

export default router;