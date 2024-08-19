import { TiTick } from "react-icons/ti";
import img from "../../src/assets/Team/team2.jpg"

const PostYourJob = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={img} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex bg-[#195A22] text-white font-poppins flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        
                        <h3 className="text-3xl my-2">Post your first task in seconds</h3>
                        <p className=" dark:text-gray-600 my-2">Save yourself hours and get your to-do list completed</p>
                        
                        <div className="flex items-center gap-2 my-1">
                        <TiTick />
                        <p>Describe what you need done</p>
                        </div>
                        <div className="flex items-center gap-2 my-1">
                        <TiTick />
                        <p>Set your budget</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1 mb-5">
                        <TiTick />
                        <p>Receive quotes and pick the best Tasker</p>
                        </div>
                        <button  className="self-start btn">Get Started</button>
                    </div>
                </div>
             
            </div>
            
        </section>
    );
};

export default PostYourJob;