import React, { Component } from 'react';
import Link from 'next/link';

class Mission extends Component {

    render() {

        return (
        <section className="mission-area pt-120 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">
                                <h5 className="section-subtitle mb-20">get to know us</h5>
                                <h2 className="section-title mb-35">Our Mission is to
                                    become the best
                                    agency</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing available in the market for free uses.</p>
                            </div>
                            <p className="mb-45">Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo
                                sit met entum is not estibulum dignissim posuere cubilia durae. Leo sit met entum cubilia crae.
                                but also the leap into electronic typesetting. 
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <img src="assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Mission;