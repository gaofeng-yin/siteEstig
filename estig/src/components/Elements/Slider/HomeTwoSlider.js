import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class HomeTwoSlider extends Component {

    render() {

        return (
            <section className="slider-area fix position-relative">
                <div className="slider-active slider-active-2 swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1,
                                }
                            }}
                            pagination={{
                                clickable: true,
                                el: '.slider-paginations',
                           }}
                           autoplay= {{
                               delay: 3000,
                               disableOnInteraction: true
                           }}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            // navigation={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                        <div className="single-slider slider-height-2 swiper-slide d-flex align-items-center" data-swiper-autoplay="10000">
                            <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-3.jpg'})`}}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="kslider kslider-2 z-index text-center">
                                            <h4 className="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">Welcome to digital agency</h4>
                                            <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">Digital Marketing <br/>Business</h2>
                                            <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                <Link href="/service"><a className="theme-btn">Discover more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="common-shape-wrapper common-shape-wrapper2">
                                <div className="common-shape-inner common-shape-inner2"></div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="single-slider slider-height-2 swiper-slide d-flex align-items-center" data-swiper-autoplay="10000">
                            <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-2.jpg'})`}}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="kslider kslider-2 z-index text-center">
                                            <h4 className="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">Welcome to digital agency</h4>
                                            <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">Digital Marketing <br/>Business</h2>
                                            <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                <Link href="/service"><a className="theme-btn">Discover more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="common-shape-wrapper common-shape-wrapper2">
                                <div className="common-shape-inner common-shape-inner2"></div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="single-slider slider-height-2 swiper-slide d-flex align-items-center" data-swiper-autoplay="10000">
                            <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-1.jpg'})`}}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="kslider kslider-2 z-index text-center">
                                            <h4 className="kslider--subtitle__two mb-15" data-animation="fadeInUp" data-delay="0.3s">Welcome to digital agency</h4>
                                            <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">Digital Marketing <br/>Business</h2>
                                            <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                <Link href="/service"><a className="theme-btn">Discover more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="common-shape-wrapper common-shape-wrapper2">
                                <div className="common-shape-inner common-shape-inner2"></div>
                            </div>
                        </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>
                    
                    <div className="slider-paginations slide-dots"></div>
                </div>
            </section>
        );
    }
}

export default HomeTwoSlider;