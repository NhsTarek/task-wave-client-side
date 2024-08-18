import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';


import user1 from "../../../../assets/Users/user1.jpg"
import user2 from "../../../../assets/Users/user2.jfif"
import user3 from "../../../../assets/Users/user3.jfif"
import user4 from "../../../../assets/Users/user4.jfif"
import user5 from "../../../../assets/Users/user5.jfif"
import user6 from "../../../../assets/Users/user6.jfif"





const Reviews = () => {
    return (
        <section className='bg-[#F7F7F7] p-5 my-5'>
           <div className='text-center font-poppins space-y-3 my-10'>
             <h1 className='text-4xl text-[#333333]'>Testimonials!</h1>
             <h4 className='text-2xl text-[#9D9D9D]'>See how our platform has helped people just like you achieve their goals.</h4>
             <div className='bg-[#EBEBEB] w-[300px] md:w-[700px] mx-auto px-2 py-2 rounded-md text-[#939393]'>
             <p>Hear from our community of users who have found success through our platform.</p>
             </div>
           </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                        <img
                            src={user1}
                            alt="Jane Doe"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">Jane Doe</h3>
                        <p className="mt-2 text-sm sm:text-base flex-grow">This platform has been a game-changer for me. I can easily earn extra money in my free time!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                        <img
                            src={user2}
                            alt="John Smith"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">John Smith</h3>
                        <p className="mt-2 text-sm sm:text-base flex-grow">The tasks are simple and straightforward, and the payout is quick. Highly recommended!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                        <img
                            src={user3}
                            alt="Alice Johnson"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">Alice Johnson</h3>
                        <p className="mt-2 text-sm sm:text-base flex-grow">I love the flexibility this platform offers. I can work whenever I want, and the tasks are always varied.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                        <img
                            src={user5}
                            alt="Michael Brown"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">Michael Brown</h3>
                        <p className="mt-2 text-sm sm:text-base flex-grow">A fantastic way to earn some extra cash on the side. The interface is user-friendly and intuitive.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                        <img
                            src={user4}
                            alt="Emily Davis"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">Emily Davis</h3>
                        <p className="mt-2 text-sm sm:text-base flex-grow">I’ve been using this platform for months and it’s been a great experience. The support team is very responsive too!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                        <img
                            src={user6}
                            alt="Daniel Garcia"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">Daniel Garcia</h3>
                        <p className="mt-2 text-sm sm:text-base flex-grow">An excellent platform with a lot of earning potential. The tasks are interesting and the rewards are fair.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Reviews;
