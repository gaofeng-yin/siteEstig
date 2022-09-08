import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const TeamSliderDirecao = dynamic(() => import('./TeamSliderDirecao'), {
    ssr: false
  });
const TeamSliderConcelhoFiscal = dynamic(() => import('./TeamSliderConcelhoFiscal'), {
    ssr: false
  });
const TeamSliderMessaAsssembleia = dynamic(() => import('./TeamSliderMesaAssembleia'), {
    ssr: false
  });
const TeamSliderComunicacaoMedia = dynamic(() => import('./TeamSliderComunicacaoMedia'), {
    ssr: false
  });
const TeamSliderDesportivo = dynamic(() => import('./TeamSliderDesportivo'), {
    ssr: false
  });
const TeamSliderApoioEstudantes = dynamic(() => import('./TeamSliderApoioEstudantes'), {
    ssr: false
  });
const TeamSliderLogisticaEventos = dynamic(() => import('./TeamSliderLogisticaEventos'), {
    ssr: false
  });
class TeamBoardSection extends Component {

    render() {

        return (
            <section className="team-area pt-115 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center mb-50">
                            <h5 className="section-subtitle mb-20">Membros da AE Estig</h5>
                            <h2 className="section-title mb-35">Direção</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="team-active2 swiper-container">
                    <TeamSliderDirecao />
                </div>
                <div className="section-title-wrapper text-center mb-50">
                <h2 className="section-title mb-35">Conselho Fiscal</h2>
                </div>
                <div className="team-active2 swiper-container">
                    <TeamSliderConcelhoFiscal />
                </div>
                <div className="section-title-wrapper text-center mb-50">
                <h2 className="section-title mb-35">Mesa de Assembleia</h2>
                </div>
                <div className="team-active2 swiper-container">
                    <TeamSliderMessaAsssembleia />
                </div>
                <div className="section-title-wrapper text-center mb-50">
                <h2 className="section-title mb-35">Departamento de Comunicação e Muiltimédia</h2>
                </div>
                <div className="team-active2 swiper-container">
                    <TeamSliderComunicacaoMedia />
                </div>
                <div className="section-title-wrapper text-center mb-50">
                <h2 className="section-title mb-35">Departamento Desportivo</h2>
                </div>
                <div className="team-active2 swiper-container">
                    <TeamSliderDesportivo />
                </div>
                <div className="section-title-wrapper text-center mb-50">
                <h2 className="section-title mb-35">Departamento de Apoio ao Estudante</h2>
                </div>
                <div className="team-active2 swiper-container">
                    <TeamSliderApoioEstudantes />
                </div>
                <div className="section-title-wrapper text-center mb-50">
                <h2 className="section-title mb-35">Departamento de Logística e Eventos</h2>
                </div>
                <div className="team-active2 swiper-container">
                    <TeamSliderLogisticaEventos />
                </div>
            </div>
        </section>
        );
    }
}

export default TeamBoardSection;