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
                                <img src="assets/img/team/Jorge.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Jorge Rodrigues</a></h4>
                                <span className="uppercase">Presidente</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/rafa.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Rafael Gomes</a></h4>
                                <span className="uppercase">Vice-Presidente</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/choupina.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Manuel Choupina</a></h4>
                                <span className="uppercase">1ºTesoureiro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/goncalo.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Gonçalo Teixeira</a></h4>
                                <span className="uppercase">2ºTesoureiro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/claudia.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Claudia Peixoto</a></h4>
                                <span className="uppercase">Secretária</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ines.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Inês Reimão</a></h4>
                                <span className="uppercase">1ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/joao.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>João Rebelo</a></h4>
                                <span className="uppercase">2ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/sara.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Sara Xavier</a></h4>
                                <span className="uppercase">3ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/catia.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Cátia Ferreira</a></h4>
                                <span className="uppercase">4ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ribeiro2.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Diogo Ribeiro</a></h4>
                                <span className="uppercase">5ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/gaspar.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Rita Gaspar</a></h4>
                                <span className="uppercase">5ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ja.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>João Araujo</a></h4>
                                <span className="uppercase">7ºVogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/pa.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><a>Paulo Rodrigues</a></h4>
                                <span className="uppercase">8ºVogal</span>
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