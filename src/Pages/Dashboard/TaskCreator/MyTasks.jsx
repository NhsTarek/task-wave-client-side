import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyTasksRows from "../TableRows/MyTasksRows";
import Swal from "sweetalert2";


const MyTasks = () => {

  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();
  

  const { data: tasks = [], isLoading, refetch } = useQuery({
    queryKey: ['my-tasks', user?.email],
    queryFn: async () => {
        const { data } = await axiosSecure.get(`/my-tasks/${user?.email}`)
        console.log(data);
        return data;
    },

});

// Handle Delete


const {mutateAsync} = useMutation({
  mutationFn : async id =>{
    const {data} = await axiosSecure.delete(`/task/${id}`);
    return data;
  },
  onSuccess: data =>{
    console.log(data);
    refetch();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Task deleted successfully",
      showConfirmButton: false,
      timer: 1500,
  });
  }
})

const handleDelete = async id =>{
  console.log(id);
  try{
    await mutateAsync(id)
  }catch(err){
    console.log(err);
  }

}

if(isLoading) return <span className="loading loading-dots loading-lg"></span>
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Quantity
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Payable Amount
                    </th>
                    
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tasks.map(task => 
                    <MyTasksRows 
                    key={task._id}
                    task={task}
                    handleDelete={handleDelete}
                    
                    ></MyTasksRows>)
                  }
                  


               
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyTasks;