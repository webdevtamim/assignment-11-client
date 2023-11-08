import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import avatar from '../../assets/avatar.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li><NavLink to={'/'} id="nav-item" className="hover:bg-transparent hover:text-[#F03737] duration-300">Home</NavLink></li>
        <li><NavLink to={'/alljobs'} id="nav-item" className="hover:bg-transparent hover:text-[#F03737] duration-300">All Jobs</NavLink></li>
        {
            user && <li><NavLink to={'/appliedjobs'} id="nav-item" className="hover:bg-transparent hover:text-[#F03737] duration-300">Applied Jobs</NavLink></li>
        }
        {
            user && <li><NavLink to={'/addjob'} id="nav-item" className="hover:bg-transparent hover:text-[#F03737] duration-300">Add a Job</NavLink></li>
        }
        {
            user && <li><NavLink to={'/myjobs'} id="nav-item" className="hover:bg-transparent hover:text-[#F03737] duration-300">My Jobs</NavLink></li>
        }
        <li><NavLink to={'/blogs'} id="nav-item" className="hover:bg-transparent hover:text-[#F03737] duration-300">Blogs</NavLink></li>
    </>

    return (
        <div className="shadow-md sticky top-0 z-50 bg-white">
            <div className="navbar max-w-[1400px] mx-auto px-5 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn md:hidden text-xl text-[#222] bg-transparent border-0 hover:bg-transparent hover:text-[#F03737]">
                            <FaAlignLeft></FaAlignLeft>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-[#212529] rounded-box w-52 text-white">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="hidden md:flex text-xl justify-start">
                        <img className="lg:w-3/4 w-full" src="logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="hidden md:flex menu menu-horizontal px-1 text-[#222] lg:text-base text-sm font-medium">
                        {navItems}
                    </ul>
                    <Link to={'/'} className="md:hidden text-xl">
                        <img className="w-1/2 mx-auto" src="logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} className="w-10 mb-2 cursor-pointer">
                                    {
                                        user.photoURL ? (
                                            <img className="rounded-full" src={user.photoURL} alt="Profile" />
                                        ) : (
                                            <img className="rounded-full" src={avatar} alt="Profile" />
                                        )
                                    }
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow bg-white rounded-lg text-right font-semibold space-y-1">
                                    {
                                        user.displayName ? (
                                            <li className='text-[#010f1c] text-center'>{user.displayName}</li>
                                        ) : (
                                            <li className='text-[#010f1c] text-center'>User Name</li>
                                        )
                                    }
                                    <li className='text-[#010f1c] pb-1 text-center'>{user.email}</li>
                                    <li><button className='bg-[#eb0029] text-white text-xs hover:text-white hover:bg-[#010f1c] w-full active:scale-90 justify-center' onClick={handleSignOut}>SIGN OUT</button></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to={'/login'} className="px-4 py-2 rounded-md lg:py-3 lg:px-5 bg-[#F03737] border-2 border-transparent text-white hover:bg-transparent hover:border-2 hover:border-[#F03737] hover:text-[#F03737] lg:font-extrabold font-medium duration-500 lg:text-sm text-xs">Login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;