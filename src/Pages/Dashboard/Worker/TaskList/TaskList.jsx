import { useQuery } from "@tanstack/react-query";

import TaskCard from "./TaskCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const TaskList = () => {

    const axiosSecure = useAxiosSecure();

    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/tasks')
            console.log(data);
            return data;
        },

    });

    if(isLoading) return <span className="loading loading-dots loading-lg"></span>

    
    return (
        <section>
            <div className='text-center font-poppins space-y-3 mt-5 mb-10'>
                <h1 className='text-4xl text-[#333333]'>Browse Jobs</h1>
                <h4 className='text-2xl text-[#9D9D9D]'>Find the best & suitable jobs from our categories</h4>
                <div className='bg-[#EBEBEB] w-[300px] md:w-[700px] mx-auto px-2 py-2 rounded-md text-[#939393]'>
                    <p>Once you select a job click view details, read requirements carefully & get started!</p>
                </div>
            </div>
           <div className=" grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-10">
             {
                tasks.map(task =>(
                    <TaskCard
                    key={task._id}
                    task={task}
                    
                    ></TaskCard>
                ))
             }
           </div>

        </section>
    );
};

export default TaskList;