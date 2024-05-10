import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import slide1 from '../../../assets/slideer-image/slide1.jpg'
import slide2 from '../../../assets/slideer-image/slide2.jpg'
import slide3 from '../../../assets/slideer-image/slide3.png'
import slide4 from '../../../assets/slideer-image/slide4.webp'
import slide5 from '../../../assets/slideer-image/slide5.jpg'

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
                    <Slide image={slide1} text="hello" />

                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide2} text="hello" />

                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide3} text="hello" />

                </SwiperSlide>
              
                <SwiperSlide>
                    <Slide image={slide4} text="hello" />

                </SwiperSlide>
              
                <SwiperSlide>
                    <Slide image={slide5} text="hello" />
                </SwiperSlide>
              

            </Swiper>

        </div>
    );
};

export default Slider;
