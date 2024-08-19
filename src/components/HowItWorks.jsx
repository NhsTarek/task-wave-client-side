import { FaGift, FaTasks, FaUserPlus } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <section className='bg-[#F7F7F7] p-5 my-20'>
            <div className='text-center font-poppins space-y-3 my-10'>
                <h1 className='text-4xl text-[#333333]'>How It Works?</h1>
                <h4 className='text-2xl text-[#9D9D9D]'>Source the best providers at your own pace</h4>
                <div className='bg-[#EBEBEB] w-[300px] md:w-[400px] mx-auto px-2 py-2 rounded-md text-[#939393]'>
                    <p>Work with creative experts you can trust! 🙂​</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-green-50 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                <div className="card bg-white shadow-lg shadow-blue-100 rounded-lg p-6">
                    <figure className="px-4 pt-4">
                        <FaUserPlus className="text-5xl text-blue-600" />
                    </figure>
                    <div className="card-body text-center font-poppins">
                        <h2 className=" text-xl font-bold text-gray-800 text-center">Register</h2>
                        <p className="text-gray-600 mt-2">Create your account to get started. It only takes a few minutes to join our community.</p>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-square transition-colors duration-300 hover:bg-green-600">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="card bg-white shadow-lg shadow-blue-100 rounded-lg p-6">
                    <figure className="px-4 pt-4">
                        <FaTasks className="text-5xl text-green-600" />
                    </figure>
                    <div className="card-body text-center font-poppins">
                        <h2 className=" text-xl font-bold text-gray-800 text-center">Complete Tasks</h2>
                        <p className="text-gray-600 mt-2">Choose from a variety of tasks that match your skills and interests.</p>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-square transition-colors duration-300 hover:bg-green-600">
                            Start Now
                        </button>
                    </div>
                </div>

                <div className="card bg-white shadow-lg shadow-blue-100 rounded-lg p-6 md:col-span-1 md:mx-auto lg:col-span-1">
                    <figure className="px-4 pt-4">
                        <FaGift className="text-5xl text-yellow-500" />
                    </figure>
                    <div className="card-body text-center font-poppins">
                        <h2 className=" text-xl font-bold text-gray-800 text-center">Earn Rewards</h2>
                        <p className="text-gray-600 mt-2">Receive your rewards as soon as you complete tasks, with fast and secure payments.</p>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-square transition-colors duration-300 hover:bg-green-600">
                            Claim Rewards
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;