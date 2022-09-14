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
                                <h5 className="section-subtitle mb-20">Fica a conhecer-nos um pouco melhor...</h5>
                                <h2 className="section-title mb-35">AEESTiG</h2>
                                <p>A AEESTiG é o órgão de representação dos alunos da Escola Superior de Tecnologia e Gestão de Bragança. Já com mais de 3 décadas de história, mas com o objetivo de sempre fazer mais pela ESTiG e pelos seus estudantes.</p>
                            </div>
                            <p className="mb-45">A ação desta associação distingue-se pela abrangência das áreas de intervenção, tendo como principal objetivo a proximidade com os alunos. Ao longo destes anos, esta associação de estudantes tem contribuído de forma notável no acompanhamento e integração dos alunos, estando sempre atenta a questões relativas à qualidade de ensino.
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