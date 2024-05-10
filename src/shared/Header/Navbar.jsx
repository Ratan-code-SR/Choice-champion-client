import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../components/provider/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const navLink = <>
        <li><NavLink to='/'>Home </NavLink></li>
        <li><NavLink to='/queries'>Queries </NavLink></li>
        {
            user ? <>
                <li><NavLink to='recommendations_me'>RecommendationsFor Me</NavLink></li>
                <li><NavLink to='recommendations_me'>My Queries</NavLink></li>
                <li><NavLink to='recommendations_me'>My recommendations</NavLink></li>
            </> :
            <></>
        }
    </>
    const handleLogout = () => {
        logOutUser()
            .then(result => {
                toast.success('Logout successful!')
                navigate("/login")

            })
    }

    return (
        <div className="navbar bg-[#84b685]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <ToastContainer />
                <div className='flex items-center'>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <a className="text-xl">ChoiceChampion</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex z-10">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
               
                {
                    user ? <>
                        <button onClick={handleLogout} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
                    </> : <>
                        <Link to='/login'> <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;