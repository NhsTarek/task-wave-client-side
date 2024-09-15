import { useState } from "react";
import UserDeleteModal from "../../../components/Modal/UserDeleteModal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";


const UserDataRow = ({ user, refetch, handleDelete }) => {
    console.log(user);


    const axiosSecure = useAxiosSecure();

    // Mutation to update the role
    const { mutateAsync: updateRole } = useMutation({
        mutationFn: async ({ id, role }) => {
            const { data } = await axiosSecure.put(`/user/role/${id}`, { role });
            return data;
        },
        onSuccess: () => {
            refetch(); // refetch user data after successful role update
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User role updated successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });

    // Handle Role Change
    const handleRoleChange = async (e) => {
        const newRole = e.target.value;
        try {
            await updateRole({ id: user._id, role: newRole });
        } catch (err) {
            console.log(err);
        }
    };


    //    Modal for delete operation

    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () =>{
        setIsOpen(false)
    }


  return (
    <tr>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.display_name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={user?.photo_url}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
         
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.coin}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Delete</span>
                </button>
                {/* Delete modal */}
               <UserDeleteModal isOpen={isOpen} closeModal={closeModal} handleDelete={handleDelete} id={user._id}></UserDeleteModal>
            </td>
    


            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <select
                    onChange={handleRoleChange}
                    value={user?.role}
                    className="bg-gray-100 border border-gray-300 rounded px-3 py-2"
                >
                    <option value="admin">Admin</option>
                    <option value="taskCreator">Task Creator</option>
                    <option value="worker">Worker</option>
                </select>
            </td>
    </tr>
  )
}



export default UserDataRow