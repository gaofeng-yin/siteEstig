import React, { Component } from 'react';

class Benefits extends Component {

    render() {

        return (
        <section className="benefits-area position-relative pt-120">
            <div className="benefit-img mb-30 wow slideInLeft" data-wow-duration=".5s">
                <img src="assets/img/about/about-img-5.jpg" className="img-fluid" alt="benefit-img"/>
                <div className="benefit-img-level">
                    <span>3600 Projects are completed</span>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="benefit-text mb-30 wow slideInRight" data-wow-duration=".5s">
                            <div className="section-title-wrapper mb-45">
                                <h5 className="section-subtitle mb-20">our benefits</h5>
                                <h2 className="section-title">We’re here to grow your business</h2>
                            </div>
                            <h5 className="benefit-subtitle">Outsourced digital Businesses</h5>
                            <p className="mb-45">Lorem Ipsum is simply free text available in your not dummy text of the printing and typesetting industry.</p>
                            <div className="row mt-40">
                                <div className="col-md-6">
                                    <div className='progress_circle mb-10'>
                                        <div className="progress blue">
                                            <span className="progress-left">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <div className="progress-value">90%</div>
                                        </div>
                                        <h5 className="afford">Quality of <br/>Work</h5>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='progress_circle mb-10'>
                                        <div className="progress yellow">
                                            <span className="progress-left">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <div className="progress-value">37.5%</div>
                                        </div>
                                        <h5 className="afford">Affordable <br/>Cost</h5>
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

export default Benefits;