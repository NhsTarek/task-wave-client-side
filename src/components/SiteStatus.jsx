import { FaSuitcase } from "react-icons/fa";
import { FaFileLines, FaPeopleGroup } from "react-icons/fa6";


const SiteStatus = () => {
    return (
        <div className="bg-gradient-to-b lg:py-20 from-gray-100 to-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-1 md:p-5">
            <div className="card bg-[#E0F7FA] w-96 shadow-lg shadow-blue-200">
                <figure className="px-10 pt-10">
                    <FaSuitcase className="text-6xl text-[#007BFF]"/>
                </figure>
                <div className="card-body items-center text-center font-poppins">
                    <h2 className="card-title text-[#003B73] font-extrabold">40K+</h2>
                    <p className="text-[#003B73]">TOTAL JOB POSTS</p>
                    
                </div>
            </div>
            <div className="card bg-[#E8F5E9] w-96 shadow-lg shadow-blue-200">
                <figure className="px-10 pt-10">
                    <FaFileLines  className="text-6xl text-[#28A745]"/>
                </figure>
                <div className="card-body items-center text-center font-poppins">
                    <h2 className="card-title text-[#155724] font-extrabold">15K+</h2>
                    <p className="text-[#155724]">COMPLETED PROJECTS</p>
                    
                </div>
            </div>
            <div className="card bg-[#FFFDE7] w-96 shadow-lg shadow-blue-200">
                <figure className="px-10 pt-10">
                    <FaPeopleGroup className="text-6xl text-[#FFC107]"/>
                </figure>
                <div className="card-body items-center text-center font-poppins">
                    <h2 className="card-title text-[#795548] font-extrabold">60K+</h2>
                    <p className="text-[#795548]">REGISTERED WORKERS</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SiteStatus;