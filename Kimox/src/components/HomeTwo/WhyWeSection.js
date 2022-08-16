import React, { Component } from 'react';
import Link from 'next/link';
import WhyWeTab from '../Elements/Tab/WhyWeTab';

class WhyWe extends Component {

    render() {

        return (
        <section className="why-we bg-grey pt-120 pb-70 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"> 
                <div className="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6">
                        <div className="why-we-left mb-40 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">
                                <h5 className="section-subtitle mb-20">Why we are good</h5>
                                <h2 className="section-title mb-35">you can Get the best all design solutions</h2>
                                <p>There are many variations of passages of but the lipsum not free as you know majority 
                                    have in some form, by injected humou or words which don't 
                                    look even slightly believable of but the majority have suffered.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <WhyWeTab />
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default WhyWe;