import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();

  const { data: task = {}, isLoading } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/task/${id}`);
      console.log(data);
      return data;
    },
  });

  if (isLoading)
    return <span className="loading loading-dots loading-lg"></span>;
  console.log(task);
  return (
    <div className="container mx-auto p-6 font-poppins">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={task.task_image_url}
          alt="Banner"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
        />
        
        <div className="absolute inset-0 flex items-center justify-center rounded-lg">
          <h1 className="text-gray-800 text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Task Details
          </h1>
        </div>
      </div>

      {/* Title and Description */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          {task.task_title}
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {task.task_detail}
        </p>
      </div>

      {/* Unordered List with Task Details */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 md:p-8">
        <ul className="list-inside space-y-4 text-gray-700 text-left md:text-center">
          <li className="flex items-center">
            <span className="text-blue-500 font-semibold mr-2">•</span> Task Quantity: {task.task_count}
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-semibold mr-2">•</span> Payable
            Amount: ${task.payable_amount}
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-semibold mr-2">•</span> Creator
            Name: {task.taskCreator.creator_name}
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-semibold mr-2">•</span> Creator
            Email: {task.taskCreator.creator_email}
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-semibold mr-2">•</span> Submission Info: {task.submission_info}
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-semibold mr-2">•</span>  Completion Date: {task.completion_date}
          </li>
        </ul>
      </div>

      {/* Textarea for Submission */}
      <div className="mt-8">
        <form className="bg-gradient-to-r from-blue-50 to-green-50 p-6 md:p-8 rounded-lg shadow-lg">
          <label
            htmlFor="submissionDetails"
            className="block text-gray-800 text-lg font-semibold mb-2"
          >
            Submission Details
          </label>
          <textarea
            id="submissionDetails"
            rows="5"
            className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Enter your submission details here..."
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
