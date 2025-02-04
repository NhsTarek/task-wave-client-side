import { Link } from "react-router-dom";
import logo from "../../../assets/taskwave2.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/secret">Secrets</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            {!user && <li><Link to="/">Watch Demo</Link></li>}
        </>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl font-poppins">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost w-28 md:w-36 lg:w-40 ">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div className="flex gap-2 items-center">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar tooltip"
                                data-tip={user?.displayName || 'User name not found'}
                            >
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="User Profile" />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-ghost">
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="btn btn-ghost">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-ghost">Register</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
