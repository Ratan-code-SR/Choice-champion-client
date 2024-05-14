import { FaRegStar } from "react-icons/fa";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from "react";
import axios from "axios";
const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => {
                setReviews(res.data)
            })
    }, [])

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

                {
                    reviews.map((review,index) =>

                        <SwiperSlide key={index} className=" p-2">

                        <section className="my-6 font-[sans-serif] text-[#333] p-10">
    
                            <div className="grid md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
                                <div className="bg-blue-100 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden ">
                                </div>
    
                                <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-xl md:border-none border shadow-xl mx-auto bg-white relative">
                                    <img src={review.image} className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7" />
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
                                        <p className="text-sm leading-relaxed">"{review.description}"</p>
                                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">{review.name}</h4>
                                        <p className="mt-1 text-xs text-gray-400">{review.country}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
    
                     )
                }
        


            </Swiper>

        </div >
    );
};

export default Testimonial;