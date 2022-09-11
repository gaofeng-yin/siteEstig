import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cta extends Component {

    render() {

        return (
            <section className="cta-area mt--60 z-index" data-aos="fade-up">
                <div className="container">
                    <div className="cta-bg bg-theme">
                        <div className="cta-number">
                            <div className="cta-number-icon mr-30">
                                <a href="https://www.instagram.com/aeestig/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                            </div>
                            <div className="cta-number-text fix">
                                <span className="uppercase">Segue-nos no Instagram</span>
                                <h3><a href="https://www.instagram.com/aeestig/" target="_blank">@aeestig</a></h3>
                            </div>
                        </div>
                        <div className="cta-description">
                            <p>Lorem ipsum dolor sit amet nsectetur
                                cing elituspe ndisse suscipit.</p>
                        </div>
                        <div className="cta-btn text-lg-end text-start">
                            <Link href="/contact"><a className="theme-btn black-btn">Fala Connosco</a></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;