import { FaRegStar } from "react-icons/fa";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonial = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className=" p-2">
                    <section className="my-6 font-[sans-serif] text-[#333] p-10">

                        <div className="grid md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
                            <div className="bg-blue-100 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden ">
                            </div>

                            <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-xl md:border-none border shadow-xl mx-auto bg-white relative">
                                <img src="https://readymadeui.com/profile_3.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7" />
                                <div className="flex space-x-1 mt-4 justify-center">
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>

                                </div>
                                <div className="mt-4">
                                    <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                    <h4 className="text-base whitespace-nowrap font-extrabold mt-4">Mark Adair</h4>
                                    <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className=" p-2">
                    <section className="my-6 font-[sans-serif] text-[#333] p-10">

                        <div className="grid md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
                            <div className="bg-blue-100 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden ">
                            </div>

                            <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-xl md:border-none border shadow-xl mx-auto bg-white relative">
                                <img src="https://readymadeui.com/profile_3.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7" />
                                <div className="flex space-x-1 mt-4 justify-center">
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>

                                </div>
                                <div className="mt-4">
                                    <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                    <h4 className="text-base whitespace-nowrap font-extrabold mt-4">Mark Adair</h4>
                                    <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className=" p-2">
                    <section className="my-6 font-[sans-serif] text-[#333] p-10">

                        <div className="grid md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
                            <div className="bg-blue-100 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden ">
                            </div>

                            <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-xl md:border-none border shadow-xl mx-auto bg-white relative">
                                <img src="https://readymadeui.com/profile_3.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7" />
                                <div className="flex space-x-1 mt-4 justify-center">
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>
                                    <p className="w-4 text-[#facc15]">
                                        <FaRegStar />
                                    </p>

                                </div>
                                <div className="mt-4">
                                    <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                    <h4 className="text-base whitespace-nowrap font-extrabold mt-4">Mark Adair</h4>
                                    <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>


            </Swiper>

        </div >
    );
};

export default Testimonial;