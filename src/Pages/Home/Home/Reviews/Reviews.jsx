import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const Reviews = () => {
    return (
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
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[350px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-poppins">
                    <img
                        src="https://via.placeholder.com/150"
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
                        src="https://via.placeholder.com/150"
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
                        src="https://via.placeholder.com/150"
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
                        src="https://via.placeholder.com/150"
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
                        src="https://via.placeholder.com/150"
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
                        src="https://via.placeholder.com/150"
                        alt="Daniel Garcia"
                        className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold">Daniel Garcia</h3>
                    <p className="mt-2 text-sm sm:text-base flex-grow">An excellent platform with a lot of earning potential. The tasks are interesting and the rewards are fair.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Reviews;
