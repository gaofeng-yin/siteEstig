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
                                <img src="assets/img/about/escola.png" className="img-fluid z-index" alt="about-img"/>
                                <div className="kabout-img-small">
                                    <img src="assets/img/about/estig2.png" className="img-fluid" alt="about-img"/>
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
                                    <h5 className="section-subtitle mb-20">A escola...</h5>
                                    <h2 className="section-title mb-35">ESTiG <br/></h2>
                                    <p>A Escola Superior de Tecnologia e Gestão de Bragança (ESTiG) é uma das cinco escolas que integram o Instituto Politécnico de Bragança e inclui na sua oferta formativa cursos nas áreas das engenharias e das ciências empresariais. A ESTiG dispõe de instalações no Campus de Santa Apolónia que engloba uma área total de 14000 m2.</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Diversidade e qualidade de ensino</h4>
                                            <p>6 cursos de especialização tecnológica, 11 licenciaturas, 9 mestrados</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Qualidade e baixo custo de vida</h4>
                                            <p>Bragança é uma das cidades europeias com melhor qualidade de vida, com um baixo custo de vida</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mt-20 mb-55">
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Qualidade das instalações e equipamentos</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Interculturalidade e Internacionalização</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Ação social e apoio aos estudantes</li>
                                </ul>
                                <div className="kabout-btn">
                                    <Link href="https://estig.ipb.pt/"><a className="theme-btn border-btn">Conhece a Escola</a></Link>
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