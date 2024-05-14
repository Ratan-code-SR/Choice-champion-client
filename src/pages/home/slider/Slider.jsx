import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import slide1 from '../../../assets/slideer-image/slider1.jpg'
import slide2 from '../../../assets/slideer-image/slider2.webp'
import slide3 from '../../../assets/slideer-image/slider3.jpeg'
import slide4 from '../../../assets/slideer-image/slider4.jpeg'
import slide5 from '../../../assets/slideer-image/slider5.jpg'

const Slider = () => {
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
                <SwiperSlide>
                    <Slide image={slide1}  />

                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide2}  />

                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide3}  />

                </SwiperSlide>
              
                <SwiperSlide>
                    <Slide image={slide4} />

                </SwiperSlide>
              
                <SwiperSlide>
                    <Slide image={slide5} />
                </SwiperSlide>
              

            </Swiper>

        </div>
    );
};

export default Slider;
