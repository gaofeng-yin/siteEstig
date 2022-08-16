import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Service extends Component {

    render() {

        return (
            <section className="service-area pt-120 pb-130" style={{ backgroundImage:`url(${'assets/img/service/service-bg.jpg'})`}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-5 col-lg-6">
                            <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                                <h5 className="kservice-text-subtitle mb-15">All Categories List</h5>
                                <h2 className="kservice-text-title mb-40">The Services <br/>We’re Offering</h2>
                                <p className="mb-45">There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour.</p>
                                <div className="kservice-author">
                                    <div className="kservice-author-img mr-30">
                                        <img src="assets/img/service/service-author.png" className="img-fluid" alt="author-img"/>
                                    </div>
                                    <div className="kservice-author-sign">
                                        <span>Jessica Brown</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6">
                            <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'edit']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Website <br/>Development</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'chart-line']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Graphic <br/>Designing</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'chart-bar']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>SEO & Content <br/>writting</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'american-sign-language-interpreting']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Digital <br/>marketing</a></Link></h5>
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

export default Service;