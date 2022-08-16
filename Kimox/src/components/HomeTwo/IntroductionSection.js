import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Introduction extends Component {

    render() {

        return (
        <section className="intro-area z-index fix">
            <img src="assets/img/about/intro-bg.png" className="intro-bg img-fluid" alt="intro-bg"/>
            <div className="intro-space pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-img mb-40" data-aos="fade-right" data-aos-duration="1000">
                                <img src="assets/img/about/about-img-4.jpg" className="img-fluid" alt="about-img"/>
                                <div className="kintro-img-text">
                                    <div className="kintro-img-text-icon mr-20">
                                        <i><FontAwesomeIcon icon={['fas', 'thumbs-up']} /></i>
                                    </div>
                                    <h5>Trusted by <br/>8800 Clients</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-text ml-70" data-aos="fade-left" data-aos-duration="1000">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">Our introduction</h5>
                                    <h2 className="section-title mb-35">largest business <br/>experts</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing available in the market for free uses.</p>
                                </div>
                                <p className="mb-45">Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised. </p>
                                <div className="skill--content">
                                    <div className="skill__wrapper mb-20">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Web Design</h5>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                    <div className="skill__wrapper mb-60">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Web Development</h5>
                                            <span>68%</span>
                                        </div>
                                        <div className="progress progress-two">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="kservice-author">
                                    <div className="kservice-author-img mr-30">
                                        <img src="assets/img/service/service-author.png" className="img-fluid" alt="author-img"/>
                                    </div>
                                    <div className="kservice-author-sign kservice-author-sign-2">
                                        <span>Jessica Brown</span>
                                    </div>
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

export default Introduction;