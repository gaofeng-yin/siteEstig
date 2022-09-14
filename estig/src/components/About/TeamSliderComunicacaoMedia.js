import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle'
import Link from 'next/link';

class TeamSliderTwo extends Component {

    render() {

        return (
            <div className="team-active swiper-container">
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
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay= {{
                        delay: 4000,
                        disableOnInteraction: true
                    }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // navigation={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/major.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Sérgio Major</a></Link></h4>
                                <span className="uppercase">Coordenador</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/miguel.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>Hugo Miguel</a></Link></h4>
                                <span className="uppercase">Membro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/tatiana.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Tatiana Silva</a></Link></h4>
                                <span className="uppercase">Membro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/alves.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Rafael Alves</a></Link></h4>
                                <span className="uppercase">Membro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/sala.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>João Sala</a></Link></h4>
                                <span className="uppercase">Membro</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        );
    }
}

export default TeamSliderTwo;