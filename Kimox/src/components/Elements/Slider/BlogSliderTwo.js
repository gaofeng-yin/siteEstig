import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle'
import Link from 'next/link';

class BlogSliderTwo extends Component {

    render() {

        return (
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
                            slidesPerView: 2,
                        },
                        1400: {
                            slidesPerView: 3
                        }
                    }}
                    autoplay= {{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // navigation={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className="kblog swiper-slide">
                        <div className="kblog-img">
                            <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-1.jpg" className="img-fluid" alt="blog-img"/></a></Link>
                            <span>20 May</span>
                        </div>
                        <div className="kblog-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> by Admin</a></Link>
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> 2 Comments</a></Link>
                            </div>
                            <h3 className="kblog-text-title mb-20">
                                <Link href="/blog-details"><a>Our Strategy Create Business Growth</a></Link>
                            </h3>
                            <div className="kblog-text-link">
                                <Link href="/blog-details"><a>Read more <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="kblog swiper-slide">
                        <div className="kblog-img">
                            <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-2.jpg" className="img-fluid" alt="blog-img"/></a></Link>
                            <span>21 May</span>
                        </div>
                        <div className="kblog-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> by Admin</a></Link>
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> 2 Comments</a></Link>
                            </div>
                            <h3 className="kblog-text-title mb-20">
                                <Link href="/blog-details"><a>We work with change oriented executives</a></Link>
                            </h3>
                            <div className="kblog-text-link">
                                <Link href="/blog-details"><a>Read more <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="kblog swiper-slide">
                        <div className="kblog-img">
                            <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-3.jpg" className="img-fluid" alt="blog-img"/></a></Link>
                            <span>22 May</span>
                        </div>
                        <div className="kblog-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> by Admin</a></Link>
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> 2 Comments</a></Link>
                            </div>
                            <h3 className="kblog-text-title mb-20">
                                <Link href="/blog-details"><a>From banking and insurance to wealth</a></Link>
                            </h3>
                            <div className="kblog-text-link">
                                <Link href="/blog-details"><a>Read more <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="kblog swiper-slide">
                        <div className="kblog-img">
                            <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-4.jpg" className="img-fluid" alt="blog-img"/></a></Link>
                            <span>24 May</span>
                        </div>
                        <div className="kblog-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> by Admin</a></Link>
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> 2 Comments</a></Link>
                            </div>
                            <h3 className="kblog-text-title mb-20">
                                <Link href="/blog-details"><a>Our Strategy Create Business Growth</a></Link>
                            </h3>
                            <div className="kblog-text-link">
                                <Link href="/blog-details"><a>Read more <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="kblog swiper-slide">
                        <div className="kblog-img">
                            <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-5.jpg" className="img-fluid" alt="blog-img"/></a></Link>
                            <span>25 May</span>
                        </div>
                        <div className="kblog-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> by Admin</a></Link>
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> 2 Comments</a></Link>
                            </div>
                            <h3 className="kblog-text-title mb-20">
                                <Link href="/blog-details"><a>We work with change oriented executives</a></Link>
                            </h3>
                            <div className="kblog-text-link">
                                <Link href="/blog-details"><a>Read more <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        );
    }
}

export default BlogSliderTwo;