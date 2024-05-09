import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const navLink = <>
        <li><Link>Home </Link></li>
        <li><Link>Queries </Link></li>
    </>
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
                <a className="btn btn-primary">LogIn</a>
            </div>
        </div>
    );
};

export default Navbar;