import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class BlogSlider extends Component {

    render() {

        return (
            <section className="blog-area pt-120 fix" style={{ backgroundImage:`url(${'assets/img/blog/blog-bg-1.jpg'})`}}>
                <div className="container pb-120">
                    <div className="blog-border">
                        <div className='row'>
                            <div className='col-xl-4'>
                                <div className="blog-text pt-60" data-aos="zoom-in">
                                    <div className="section-title-wrapper pr-25 mb-50">
                                        <h5 className="section-subtitle mb-20">recent blog posts</h5>
                                        <h2 className="section-title mb-35">Latest News & Articles</h2>
                                        <p className="pr-50">Lorem ipsum onts persp unde omnis iste natus errluptatem acc usantium demque laudantium totam.</p>
                                    </div>
                                    <div className="kblog-arrow">
                                        <div className="blog-button-prev slide-prev"><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} /></i></div>
                                        <div className="blog-button-next slide-next"><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></div> 
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-8'>
                                <div className="blog-active swiper-container">
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
                                                    slidesPerView: 1,
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
                                            navigation={{
                                                clickable: true,
                                                nextEl: '.blog-button-next',
                                                prevEl: '.blog-button-prev',
                                        }}
                                            // pagination={{ clickable: true }}
                                            // scrollbar={{ draggable: true }}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogSlider;