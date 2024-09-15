import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import UserDataRow from "../TableRows/UserData";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";


const ManageUsers = () => {
   

    const axiosSecure = useAxiosSecure();
    
  
    const { data: users = [], isLoading, refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const { data } = await axiosSecure(`/users`)
          console.log(data);
          return data;
      },
  
  });



  console.log(users);

  // Handle Delete


const {mutateAsync} = useMutation({
    mutationFn : async id =>{
      const {data} = await axiosSecure.delete(`/user/${id}`);
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
  if(isLoading){
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center text-4xl">
                <FaSpinner className="animate-spin" style={{ fontSize: '3rem' }} />
            </div>
        </div>
    );
}
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>Manage Users | Dashboard</title>
                </Helmet>
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
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Photo
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Coin
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Remove
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Update Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    
                                    
                                {users
                    .filter((user) => user.role === "worker")
                    .map((user) => (
                     <UserDataRow 
                     key={user._id}
                     user={user}
                     refetch={refetch}
                     handleDelete={handleDelete}
                     
                     
                     
                     >

                     </UserDataRow>
                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageUsers;