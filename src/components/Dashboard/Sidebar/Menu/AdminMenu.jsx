import { FaTasks, FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
    return (
        <>
            <MenuItem label='Manger Users' address='/dashboard/manage-users' icon={FaUser}></MenuItem>
            <MenuItem label='Manger Tasks' address='/dashboard/manage-tasks' icon={FaTasks}></MenuItem>
        </>
    );
};

export default AdminMenu;