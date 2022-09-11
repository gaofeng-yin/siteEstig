import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class ProjectSlider extends Component {

    render() {

        return (
            <div className="project-active swiper-container">
                <div className="swiper-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}
                    autoplay= {{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{
                        clickable: true,
                        nextEl: '.project-button-next',
                        prevEl: '.project-button-prev',
                   }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/foto4edit.png" className="img-fluid" alt="project_img"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/foto13edit.png" className="img-fluid" alt="project_img"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/foto18edit.png" className="img-fluid" alt="project_img"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/foto3edit.png" className="img-fluid" alt="project_img"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/foto15edit.png" className="img-fluid" alt="project_img"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/foto40edit.jpg" className="img-fluid" alt="project_img"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-3.jpg" className="img-fluid" alt="project_img"/>
                           {/* <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Web Devolopment</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        );
    }
}

export default ProjectSlider;