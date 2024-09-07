import { Link } from "react-router-dom";


const TaskCard = ({ task }) => {
    const { task_title,creator_name, completion_date, payable_amount,task_quantity,_id  } = task;
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {/* Image Section */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" className="w-full h-32 object-contain p-4" />

            {/* Vacancy Badge */}
            <div className="px-4 py-2 bg-blue-50 flex justify-between items-center">
                <span className="text-xs font-bold text-red-600 flex items-center">
                   
                    Task Available
                </span>
                <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                {task_quantity}
                </span>
            </div>

            {/* Task Description */}
            <div className="px-4 py-2">
                <h3 className="text-gray-700 text-lg font-semibold">{task_title}</h3>
                <p className="text-gray-500 text-sm mt-1">Created by : {creator_name}</p>
                <p className="text-gray-500 text-sm mt-1">Completion Date :</p>
                <p className="text-gray-500 text-sm">{completion_date}</p>
            </div>

            {/* Price and Apply Button */}
            <div className="px-4 py-2 flex justify-between items-center border-t border-gray-200">
                <span className="text-red-500 text-lg font-bold">${payable_amount}</span>
                <button className="bg-red-500 text-white text-xs font-semibold py-1 px-4 rounded-full hover:bg-red-600 transition-colors">
                    <Link to={`taskdetails/${_id}`}>View Details</Link>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;