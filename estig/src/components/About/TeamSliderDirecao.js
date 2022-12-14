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
                                <h4 className="kteam-title"><Link href="/team-details"><a>Jorge Rodrigues</a></Link></h4>
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
                                <h4 className="kteam-title"><Link href="/team-details"><a>Rafael Gomes</a></Link></h4>
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
                                <h4 className="kteam-title"><Link href="/team-details"><a>Manuel Choupina</a></Link></h4>
                                <span className="uppercase">1??Tesoureiro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/goncalo.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Gon??alo Teixeira</a></Link></h4>
                                <span className="uppercase">2??Tesoureiro</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/claudia.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Claudia Peixoto</a></Link></h4>
                                <span className="uppercase">Secret??ria</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ines.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>In??s Reim??o</a></Link></h4>
                                <span className="uppercase">1??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/joao.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Jo??o Rebelo</a></Link></h4>
                                <span className="uppercase">2??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/sara.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Sara Xavier</a></Link></h4>
                                <span className="uppercase">3??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/catia.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>C??tia Ferreira</a></Link></h4>
                                <span className="uppercase">4??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ribeiro2.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Diogo Ribeiro</a></Link></h4>
                                <span className="uppercase">5??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/gaspar.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Rita Gaspar</a></Link></h4>
                                <span className="uppercase">5??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ja.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Jo??o Araujo</a></Link></h4>
                                <span className="uppercase">7??Vogal</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/pa.png" className="img-fluid" alt="team-img"/>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>Paulo Rodrigues</a></Link></h4>
                                <span className="uppercase">8??Vogal</span>
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