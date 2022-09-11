import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {

    render() {

        return (
            <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">Entre em contacto connosco</h5>
                            <h2 className="section-title">Fala com um dos nossos membros</h2>
                        </div>
                        <div className="contact-info mr-50 mr-xs-0  mr-md-0">
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="https://www.facebook.com/aeestigipb" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                </div>
                                <div className="contact-info-icon">
                                    <a href="https://www.instagram.com/aeestig/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="contact-form">
                            <form action="https://mailthis.to/aeestig" id="contact-form" method="POST" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Nome" type="text" placeholder="Nome" required />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Email" type="email" placeholder="Email" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Telemóvel" type="number" placeholder="Telemóvel"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Assunto" type="text" placeholder="Assunto" required/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                        <textarea placeholder="Escreve a tua mensagem" name="Mensagem" required></textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Enviar</button>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Contact;