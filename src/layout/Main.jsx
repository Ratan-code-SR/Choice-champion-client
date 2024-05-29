
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes("dashboard") 
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
             <Footer></Footer>
        </div>
    );
};

export default Main;