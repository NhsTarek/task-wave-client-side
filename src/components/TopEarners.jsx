import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const TopEarners = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <section className='my-20'>
            <div className='text-center font-poppins space-y-3 my-10'>
                <h1 className='text-4xl text-[#333333]'>Top Earners</h1>
                <h4 className='text-2xl text-[#9D9D9D]'>
                    Meet the talents, those who have earned maximum coins with their hard work & dedication.
                </h4>
                <div className='bg-[#EBEBEB] w-[300px] md:w-[500px] mx-auto px-2 py-2 rounded-md text-[#939393]'>
                    <p>Celebrating the Achievements of Our Highest Performers!</p>
                </div>
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="flex justify-center">
                    <div className="card bg-[#F4F4F4] w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-lg p-6 text-center shadow-[#007BFF]/30">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="John Doe"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-poppins font-bold text-[#003B73]">John Doe</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-[#FFC107]">50,000</p>
                                <p className="text-sm font-poppins text-gray-600">Coins Earned</p>
                            </div>
                            <div className="text-center mt-4 md:mt-0">
                                <p className="text-2xl font-extrabold text-[#28A745]">150</p>
                                <p className="text-sm font-poppins text-gray-600">Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <div className="card bg-[#F4F4F4] w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-lg p-6 text-center shadow-[#007BFF]/30">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Jane Smith"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-poppins font-bold text-[#003B73]">Jane Smith</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-[#FFC107]">45,000</p>
                                <p className="text-sm font-poppins text-gray-600">Coins Earned</p>
                            </div>
                            <div className="text-center mt-4 md:mt-0">
                                <p className="text-2xl font-extrabold text-[#28A745]">140</p>
                                <p className="text-sm font-poppins text-gray-600">Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <div className="card bg-[#F4F4F4] w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-lg p-6 text-center shadow-[#007BFF]/30">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Alice Brown"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-poppins font-bold text-[#003B73]">Alice Brown</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-[#FFC107]">40,000</p>
                                <p className="text-sm font-poppins text-gray-600">Coins Earned</p>
                            </div>
                            <div className="text-center mt-4 md:mt-0">
                                <p className="text-2xl font-extrabold text-[#28A745]">130</p>
                                <p className="text-sm font-poppins text-gray-600">Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <div className="card bg-[#F4F4F4] w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-lg p-6 text-center shadow-[#007BFF]/30">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Robert Johnson"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-poppins font-bold text-[#003B73]">Robert Johnson</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-[#FFC107]">35,000</p>
                                <p className="text-sm font-poppins text-gray-600">Coins Earned</p>
                            </div>
                            <div className="text-center mt-4 md:mt-0">
                                <p className="text-2xl font-extrabold text-[#28A745]">120</p>
                                <p className="text-sm font-poppins text-gray-600">Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <div className="card bg-[#F4F4F4] w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-lg p-6 text-center shadow-[#007BFF]/30">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Emily Davis"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-poppins font-bold text-[#003B73]">Emily Davis</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-[#FFC107]">30,000</p>
                                <p className="text-sm font-poppins text-gray-600">Coins Earned</p>
                            </div>
                            <div className="text-center mt-4 md:mt-0">
                                <p className="text-2xl font-extrabold text-[#28A745]">110</p>
                                <p className="text-sm font-poppins text-gray-600">Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <div className="card bg-[#F4F4F4] w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-lg p-6 text-center shadow-[#007BFF]/30">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Michael Lee"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-poppins font-bold text-[#003B73]">Michael Lee</h3>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-[#FFC107]">25,000</p>
                                <p className="text-sm font-poppins text-gray-600">Coins Earned</p>
                            </div>
                            <div className="text-center mt-4 md:mt-0">
                                <p className="text-2xl font-extrabold text-[#28A745]">100</p>
                                <p className="text-sm font-poppins text-gray-600">Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default TopEarners;
