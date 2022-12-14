import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'

class Sponsor extends Component {

    render() {

        return (
            <div className="brand-area pt-100 pb-100">
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
                                    delay: 1500,
                                    disableOnInteraction: true
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".3s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/urban.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".6s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/metro.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".9s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/via.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.2s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/john.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.5s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/felix.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/dux.png" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/kopus.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/lot.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp"data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/under.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/taberna.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/ba.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/bo.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/porta.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/havana.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/la.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/lagoa.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/mc.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/moda.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/munivel.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/opium.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/merc.png" className="img-fluid" alt="img"/></a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="brand-wrapper swiper-slide wow fadeInUp" data-animation="fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                        <a href="#"><img src="assets/img/brand/espaco.png" className="img-fluid" alt="img"/></a>
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

export default Sponsor;