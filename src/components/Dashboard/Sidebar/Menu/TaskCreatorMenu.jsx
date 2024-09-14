import { FaPlus, FaTasks } from "react-icons/fa";
import MenuItem from "./MenuItem";


const TaskCreatorMenu = () => {
    return (
        <>
            <MenuItem label='Add New Task' address='/dashboard/add-task' icon={FaPlus}></MenuItem>
            <MenuItem label='My Tasks' address='/dashboard/my-tasks' icon={FaTasks}></MenuItem>
        </>
    );
};

export default TaskCreatorMenu;