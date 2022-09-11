import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {

    render() {

        return (
            <section className="about-area pt-120 pb-70 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="kabout-img mb-50 mr-70" data-aos="zoom-out-up" data-swiper-autoplay="10000">
                                <div className="kabout-img-shape"></div>
                                <img src="assets/img/about/about-img-1.jpg" className="img-fluid z-index" alt="about-img"/>
                                <div className="kabout-img-small">
                                    <img src="assets/img/about/about-img-2.jpg" className="img-fluid" alt="about-img"/>
                                    <div className="kabout-img-small-icon play_btn">
                                        <span>
                                            <img src="assets/img/icon/about-icon.png" className="img-fluid" alt="about-icon"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="kabout mb-50" data-aos="zoom-out-down" data-swiper-autoplay="10000">
                                <div className="section-title-wrapper mb-45">
                                    <h5 className="section-subtitle mb-20">get to know us</h5>
                                    <h2 className="section-title mb-35">Bem-Vindo <br/>agency</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised.</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">The Best Services</h4>
                                            <p>Lorem ipsum dolor sited amet, consectetur notted.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Expert Designers</h4>
                                            <p>Lorem ipsum dolor sited amet, consectetur notted.</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mt-20 mb-55">
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Entum estibulum dignissim posuere.</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> If you are going to use a passage.</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lorem Ipsum generators on the tend to repeat.</li>
                                </ul>
                                <div className="kabout-btn">
                                    <Link href="/service"><a className="theme-btn border-btn">Discover more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;