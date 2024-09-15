import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import { FaSpinner } from "react-icons/fa";


const taskCreatorRoutes = ({children}) => {
    const [role, isLoading] = useRole();
    if(isLoading){
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center text-4xl">
                    <FaSpinner className="animate-spin" style={{ fontSize: '3rem' }} />
                </div>
            </div>
        );
    }
    if(role === 'taskCreator') return children;
    return <Navigate to='/dashboard'></Navigate>
};

export default taskCreatorRoutes;