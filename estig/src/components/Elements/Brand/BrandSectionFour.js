import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'

class BrandFour extends Component {

    render() {

        return (
            <div className="brand-area3 pt-100 pb-100">
                <div className="container">
                    <div className="brand-active swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2}
                                autoplaydisableoninteraction={"false"}
                                loop={true}
                                breakpoints={{
                                    550: {
                                        slidesPerView: 3,
                                      },
                                      768: {
                                        slidesPerView: 4,
                                      },
                                      1200: {
                                        slidesPerView: 5,
                                      }
                                }}
                                autoplay= {{
                                    delay: 2000,
                                    disableOnInteraction: true
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".3s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/brand-1.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".6s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/brand-2.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".9s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/brand-3.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.2s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/brand-4.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.5s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/brand-5.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/brand-1.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandFour;