import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {

    render() {

        return (
            <section className="cta-area mt--60 z-index" data-aos="fade-up">
                <div className="container">
                    <div className="cta-bg bg-theme">
                        <div className="cta-number">
                            <div className="cta-number-icon mr-30">
                                <img src="assets/img/icon/cta-icon.png" className="img-fluid" alt="cta-icon"/>
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

export default Cta;