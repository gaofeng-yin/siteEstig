import React, { Component } from 'react';

class FaqAccordion extends Component {

    render() {

        return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row">
                <h2 className="section-title mb-35">Vantagens</h2>
                    <div className="col-lg-6">
                        <div className="faq-wrapper">
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Terra Fria
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>15% de desconto em qualquer serviço</p>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                NH
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>compra de 10 emblemas oferta de 2 e 5% de desconto em toda a loja</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Papelart
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>5% de desconto em compras igual ou superior a 10€ e 5% de desconto em copias/impressões superiores a 75 cópias</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Lavandaria Moderna
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>20% de desconto em qualquer serviço</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Corpus Ginásio
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>10% de desconto na mensalidade</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive5" aria-expanded="false" aria-controls="collapseFive5">
                                                Kapa negra
                                            </button>
                                        </h2>
                                        <div id="collapseFive5" className="accordion-collapse collapse" aria-labelledby="headingFive5" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>5% de desconto fora trajes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="true" aria-controls="collapseSix">
                                                Express Glass
                                            </button>
                                        </h2>
                                        <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>desconto de 50% no vidro</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapseSeven">
                                                Prio
                                            </button>
                                        </h2>
                                        <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Desconto de 0.02€/L</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTen">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapseTen">
                                                True Shape Salon
                                            </button>
                                        </h2>
                                        <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p> 2€ de desconto no corte de cabelo e 2€ de desconto no corte e barba  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-wrapper">
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample2">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                Guerin
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>aluguer de carros desde 30€/dia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                BA
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>oferta do café em cada refeição</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                Brifitness
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>10% de desconto em suplementacao enquanto cliente do ginásio e manter a mensalidade antiga de 29,99€</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                Carla José Cabeleireiros
                                            </button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>oferta de busso ou sobrancelhas no corte de cabelo e oferta de barba no corte de cabelo para homem</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTen">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                Publifogo
                                            </button>
                                        </h2>
                                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p> 10% de desconto em loja aos associados, em compras superiores a 25€,  exceto nos artigos abaixo:
                                                    Trajes académicos (completo ou parcial)
                                                    Kits académicos
                                                    Botas Magnum
                                                    Equipamentos de segurança ( tipo extintores, detectores de incêndio...)  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEleven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                Cruzeiro
                                            </button>
                                        </h2>
                                        <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>oferta do livro </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapseEight">
                                                BP
                                            </button>
                                        </h2>
                                        <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Desconto de 0.05€/L</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapseNine">
                                                FirstStop
                                            </button>
                                        </h2>
                                        <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>25% de desconto em serviços e acessórios</p>
                                            </div>
                                        </div>
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

export default FaqAccordion;