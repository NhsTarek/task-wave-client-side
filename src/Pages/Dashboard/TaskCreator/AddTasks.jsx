

const AddTasks = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Add New Task</h2>
            <form className="space-y-4">
                {/* Task Title */}
                <div className="flex flex-col">
                    <label htmlFor="task_title" className="font-medium">
                        Task Title
                    </label>
                    <input
                        type="text"
                        id="task_title"
                        name="task_title"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Task Detail */}
                <div className="flex flex-col">
                    <label htmlFor="task_detail" className="font-medium">
                        Task Detail
                    </label>
                    <textarea
                        id="task_detail"
                        name="task_detail"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    ></textarea>
                </div>

                {/* Task Quantity */}
                <div className="flex flex-col">
                    <label htmlFor="task_quantity" className="font-medium">
                        Task Quantity
                    </label>
                    <input
                        type="number"
                        id="task_quantity"
                        name="task_quantity"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        min="1"
                        required
                    />
                </div>

                {/* Payable Amount */}
                <div className="flex flex-col">
                    <label htmlFor="payable_amount" className="font-medium">
                        Payable Amount (per Task)
                    </label>
                    <input
                        type="number"
                        id="payable_amount"
                        name="payable_amount"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        min="0"
                        required
                    />
                </div>

                {/* Completion Date */}
                <div className="flex flex-col">
                    <label htmlFor="completion_date" className="font-medium">
                        Completion Date
                    </label>
                    <input
                        type="date"
                        id="completion_date"
                        name="completion_date"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Submission Info */}
                <div className="flex flex-col">
                    <label htmlFor="submission_info" className="font-medium">
                        Submission Info
                    </label>
                    <textarea
                        id="submission_info"
                        name="submission_info"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    ></textarea>
                </div>

                {/* Task Image URL */}
                <div className="flex flex-col">
                    <label htmlFor="task_image_url" className="font-medium">
                        Task Image URL
                    </label>
                    <input
                        type="text"
                        id="task_image_url"
                        name="task_image_url"
                        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Add Task Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTasks;