import { FaCheckDouble, FaDollarSign, FaHome, FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Pages/Dashboard/TaskList/Header/Header";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#1B5E20] text-white font-poppins">
                <ul className="menu p-4">
                    <li>
                   
                        <NavLink to='dashboard/tasklist'>
                        <FaHome />
                        Home
                        </NavLink>
                    </li>
                    <li>
                   
                        <NavLink to='dashboard/tasklist'>
                        <FaTasks />
                        TaskList
                        </NavLink>
                    </li>
                    <li>
                   
                        <NavLink to='dashboard/tasklist'>
                        <FaCheckDouble />
                        My Submissions
                        </NavLink>
                    </li>
                    <li>
                   
                        <NavLink to='dashboard/tasklist'>
                        <FaDollarSign />
                        Withdrawals
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
