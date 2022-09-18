import React, { Component } from 'react';

class Quality extends Component {

    render() {

        return (
            <section className="quality-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <img src="assets/img/icon/service-icon-1a.png" className="img-fluid" alt="about-icon"/>
                            </div>
                            <div className="kquality-text fix">
                                <h3 className="mb-20 kquality-text-title">Cartão de Sócio...</h3>
                                <p> O WebSite serve exclusivamente para reservar e conhecer as vantagens do catão de sócio, para o adquir tem que se deslocar à Associação de Estudantes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                            <div className="kquality-img">
                                <img src="assets/img/trust/aeestig.png" className="img-fluid" alt="cta-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Quality;