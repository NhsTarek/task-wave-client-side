// import { useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // Main style file for the calendar
// import 'react-date-range/dist/theme/default.css'; // Theme CSS file for the calendar
import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../../api/utils';
import { useMutation } from '@tanstack/react-query';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const AddTasks = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // State for the date range selection
    // const [dates, setDates] = useState({

    //         startDate: new Date(),
    //         endDate: null,
    //         key: 'selection',

    // });


    // const handleDates = item =>{
    //     console.log(item);
    //     setDates(item.selection)
    // }



    const { mutateAsync } = useMutation({
        mutationFn: async (taskData) => {
            const { data } = await axiosSecure.post('/task', taskData);
            return data;
        },
        onSuccess: () => {
            
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Task Added Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
            setLoading(false);
            navigate('/dashboard/my-tasks')
        }
    })

    // Form Handler

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const task_title = form.task_title.value;
        const submission_info = form.submission_info.value;
        const task_detail = form.task_detail.value;
        const image = form.task_image.files[0];
        const task_count = parseInt(form.task_count.value);
        const payable_amount = parseInt(form.payable_amount.value);
        const completion_date = form.completion_date.value;
        const current_time = new Date().toISOString();
        const taskCreator = {
            creator_email: user?.email,
            image: user?.photoURL,
            creator_name: user?.displayName,
        }


        try {
            const image_url = await imageUpload(image);
            console.log(image_url);

            const taskData = {
                task_title,
                submission_info,
                task_detail,
                task_image_url: image_url,
                task_count,
                payable_amount,
                completion_date,
                current_time,
                taskCreator,

            }

            console.table(taskData);

            //  post request to the server
            await mutateAsync(taskData);

        } catch (err) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: {err},
                showConfirmButton: false,
                timer: 1500,
            });
            console.log(err);
            setLoading(false);
        }

    }



    return (

        <section>
            <Helmet>
                <title>Add New Task | Dashboard</title>
            </Helmet>
            <div className='text-center font-poppins space-y-3 mt-5 mb-10'>
                <h1 className='text-4xl text-[#333333]'>Add New Tasks</h1>
                <h4 className='text-2xl text-[#9D9D9D]'>Create Detailed Tasks, Set Rewards, and Start Engaging Users</h4>
                <div className='bg-[#EBEBEB] w-[300px] md:w-[700px] mx-auto px-2 py-2 rounded-md text-[#939393]'>
                    <p>Set Task Details, Requirements, and Get Started in Minutes</p>
                </div>
            </div>
            <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Task Title */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="task_title" className="block text-gray-600">
                                    Task Title
                                </label>
                                <input
                                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                                    name="task_title"
                                    id="task_title"
                                    type="text"
                                    placeholder="Task Title"
                                    required
                                />
                            </div>

                            {/* Task Detail */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="task_detail" className="block text-gray-600">
                                    Task Detail
                                </label>
                                <textarea
                                    className="w-full h-32 px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                                    name="task_detail"
                                    id="task_detail"
                                    placeholder="Task Detail"
                                    required
                                ></textarea>
                            </div>

                            {/* Task Quantity */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="task_quantity" className="block text-gray-600">
                                    Task Quantity
                                </label>
                                <input
                                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                                    name="task_count"
                                    id="task_quantity"
                                    type="number"
                                    placeholder="Task Quantity"
                                    min="1"
                                    required
                                />
                            </div>

                            {/* File Upload for Task Image */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="task_image" className="block text-gray-600">
                                    Upload a Picture
                                </label>
                                <input
                                    type="file"
                                    id="task_image"
                                    name="task_image"
                                    className="file-input file-input-bordered file-input-info w-full max-w-xs"
                                    accept="image/*"
                                    required
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Payable Amount */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="payable_amount" className="block text-gray-600">
                                    Payable Amount (per Task)
                                </label>
                                <input
                                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                                    name="payable_amount"
                                    id="payable_amount"
                                    type="number"
                                    placeholder="Payable Amount"
                                    min="0"
                                    required
                                />
                            </div>

                     
                            <div className="space-y-1 text-sm">
                                <label htmlFor="task_title" className="block text-gray-600">
                                    Completion Date
                                </label>
                                <input
                                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                                    name="completion_date"
                                    id="completion_date"
                                    type="date"
                                    placeholder="Task Title"
                                    required
                                />
                            </div>

                            {/* Submission Info */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="submission_info" className="block text-gray-600">
                                    Submission Info
                                </label>
                                <textarea
                                    className="w-full h-32 px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                                    name="submission_info"
                                    id="submission_info"
                                    placeholder="Submission Info"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Add Task Button */}
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600"
                    >
                        {loading ? (
                            <TbFidgetSpinner className="animate-spin m-auto" />
                        ) : (
                            'Add Task'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddTasks;
