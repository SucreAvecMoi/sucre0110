
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import Slide1 from '../components/Slides/Slide1';
import Slide2 from '../components/Slides/Slide2';
import { Button } from 'antd';
import './Index.css';
const Index = () => {

    const prevOnClick = ()=> {
        document.getElementById('mySwiper').swiper.slidePrev();
    }

    const nextOnClick = ()=> {
        document.getElementById('mySwiper').swiper.slideNext();
    }
    return (
        <div>
            <Swiper id="mySwiper" slidesPerView={1} mousewheel={true} pagination={true} direction={'vertical'} style={{height: 'calc(100vh - 60px)'}} modules={[Pagination, Mousewheel, Navigation]}>
                <SwiperSlide><div style={{height: 'calc(100vh - 60px)', backgroundColor: 'lightcoral'}}><Slide1 /></div></SwiperSlide>
                <SwiperSlide><div style={{height: 'calc(100vh - 60px)', backgroundColor: 'lightblue'}}><Slide2 /></div></SwiperSlide>
                <SwiperSlide><div style={{height: 'calc(100vh - 60px)', backgroundColor: 'lightgreen'}}>Slide 3</div></SwiperSlide>
            </Swiper>
            <Button type="text" className="swiper-switch-button" onClick={nextOnClick}>Next</Button>
            <Button type="text" className="swiper-switch-button previous" onClick={prevOnClick}>Previous</Button>
        </div>
    );
};

export default Index;