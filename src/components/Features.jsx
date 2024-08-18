import { FaCoins, FaTasks } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";


const Features = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto flex flex-col p-6">
                <h2 className="py-4 text-4xl font-bold text-center font-poppins text-[#333333]">Key Features</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                        <FaCoins className="text-6xl text-[#FFD700]" />

                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left font-poppins text-[#9D9D9D]">
                           
                            <span className="text-xl font-bold md:text-2xl">Earn Coins by Completing Tasks</span>
                            <span className="mt-4 dark:text-gray-700">Unlock the potential to earn rewards by completing simple tasks on our platform. Whether it's filling out surveys, testing products, or engaging in creative challenges, every task you complete earns you coins. These coins can be redeemed for a variety of rewards, giving you the freedom to earn while you explore exciting opportunities. Join now and start turning your efforts into tangible benefits!</span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                        <FaTasks className="text-6xl text-[#28A745]" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left font-poppins text-[#9D9D9D]">
                           
                            <span className="text-xl font-bold md:text-2xl">Create and Manage Tasks</span>
                            <span className="mt-4 dark:text-gray-700">Take control of your project by creating and managing tasks effortlessly. Our platform allows you to assign tasks, set deadlines, and track progress in real time. Whether you’re organizing a team or working solo, our intuitive tools make task management a breeze. Keep everything on track and achieve your goals with ease—start creating and managing tasks today!</span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                        <FaMoneyBillTransfer className="text-6xl text-[#007BFF]" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left font-poppins text-[#9D9D9D]">
                            
                            <span className="text-xl font-bold md:text-2xl">Secure Payments</span>
                            <span className="mt-4 dark:bg-gray-100 dark:text-gray-700">Rest assured that your earnings are safe with our secure payment system. We prioritize your financial security, ensuring that all transactions are encrypted and protected. Whether you're receiving payments for completed tasks or making a purchase, our platform guarantees a seamless and secure experience. Trust us to handle your payments with the highest level of security and reliability.</span>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
    );
};

export default Features;