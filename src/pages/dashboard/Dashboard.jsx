
import { NavLink, Outlet} from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdQueryStats } from "react-icons/md";
import {MdOutlineAddBox} from "react-icons/md";
import { MdOutlineRecommend } from "react-icons/md";

const Dashboard = () => {


    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-[300px] min-h-screen bg-[#04a29f]">
                <ul className="menu p-4">

                    {
                   <>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/'><span className="text-2xl"><IoMdHome /></span> Home</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/my_queries'><span className="text-2xl"><MdQueryStats /></span>My Queries</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='dashboard/add_queries'><span className="text-2xl"><MdOutlineAddBox /></span>Add Query</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='dashboard/my_recommendation'><span className="text-2xl"><MdOutlineRecommend /></span>My Recommendations</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='dashboard/recommended_me'><span className="text-2xl"><MdOutlineRecommend /></span> RecommendationsFor Me</NavLink>
                            </li>
                           
                        </>
                    }

                
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
           <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;