import { FaCheckDouble, FaHome, FaTasks } from "react-icons/fa";
import MenuItem from "./MenuItem";


const WorkerMenu = () => {
    return (
        <>
            <MenuItem label='Home' address='/dashboard' icon={FaHome}></MenuItem>
            <MenuItem label='TaskList' address='/dashboard/tasklist' icon={FaTasks}></MenuItem>
            <MenuItem label='My Submissions' address='/dashboard/submissions' icon={FaCheckDouble}></MenuItem>
        </>
    );
};

export default WorkerMenu;