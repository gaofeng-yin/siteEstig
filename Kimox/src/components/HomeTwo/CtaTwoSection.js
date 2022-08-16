import React, { Component } from 'react';
import Link from 'next/link';

class CtaTwo extends Component {

    render() {

        return (
            <section className="cta-area mb--60 z-index">
                <div className="container">
                    <div className="cta-bg bg-theme">
                        <div className="cta-number">
                            <div className="cta-number-icon mr-30">
                                <i><img src="assets/img/icon/quality-icon.png" className="img-fluid" alt="quality-img"/></i>
                            </div>
                            <div className="cta-number-text fix">
                                <span className="uppercase">Get a Free Consultation</span>
                                <h3><a href="tell:6668880000">666 888 0000</a></h3>
                            </div>
                        </div>
                        <div className="cta-description">
                            <p>Lorem ipsum dolor sit amet nsectetur
                                cing elituspe ndisse suscipit.</p>
                        </div>
                        <div className="cta-btn text-lg-end text-start">
                            <Link href="/service"><a className="theme-btn black-btn">Discover more</a></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CtaTwo;