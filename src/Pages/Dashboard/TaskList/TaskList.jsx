import { useQuery } from "@tanstack/react-query";


const TaskList = () => {


    const {data, isLoading} = useQuery({
        queryKey:['task'],
        queryFn: async () => {},
    });
    return (
        <section>
            <div className='text-center font-poppins space-y-3 mt-5 mb-10'>
                <h1 className='text-4xl text-[#333333]'>Browse Jobs</h1>
                <h4 className='text-2xl text-[#9D9D9D]'>Find the best & suitable jobs from our categories</h4>
                <div className='bg-[#EBEBEB] w-[300px] md:w-[700px] mx-auto px-2 py-2 rounded-md text-[#939393]'>
                    <p>Once you select a job click view details, read requirements carefully & get started!</p>
                </div>
            </div>

            
        </section>
    );
};

export default TaskList;