import React, { Component } from 'react';

class ServiceFour extends Component {
    setType(){
        this.type = 'date';
    }

    render() {

        return (
            <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">Adere ao sócio</h5>
                            <h2 className="section-title">Preenche o formulário</h2>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="contact-form">
                            <form action="https://mailthis.to/aeee" id="contact-form" method="POST" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="primeiro nome" type="text" placeholder="Primeiro Nome" required />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="ultimo nome" type="text" placeholder="Último Nome" required />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Email" type="email" placeholder="Email" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Telemovel" type="number" placeholder="Telemóvel"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Localidade" type="text" placeholder="Localidade" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Codigo Postal" type="number" placeholder="Código Postal"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="NIF" type="number" placeholder="Nº Identificação Fiscal" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Pais" type="text" placeholder="País"/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                        <select className="dropdown" name="Curso" placeholder="Seleciona o teu curso">
                                            <option value="[CTeSP] Análises Químicas e Biológicas">[CTeSP] Análises Químicas e Biológicas</option>
                                            <option value="[CTeSP] Automação, Robótica e Eletrónica Industrial">[CTeSP] Automação, Robótica e Eletrónica Industrial</option>
                                            <option value="[CTeSP] Cibersegurança">[CTeSP] Cibersegurança</option>
                                            <option value="[CTeSP] Contabilidade">[CTeSP] Contabilidade</option>
                                            <option value="[CTeSP] Construção Civil">[CTeSP] Construção Civil</option>
                                            <option value="[CTeSP] Desenvolvimento de Software">[CTeSP] Desenvolvimento de Software</option>
                                            <option value="[CTeSP] Energias Renováveis e Infraestruturas Elétricas e de Telecomunicações">[CTeSP] Energias Renováveis e Infraestruturas Elétricas e de Telecomunicações</option>
                                            <option value="[CTeSP] Energias Renováveis e Instalações Elétricas">[CTeSP] Energias Renováveis e Instalações Elétricas</option>
                                            <option value="[CTeSP] Gestão de Operações e Logísitica">[CTeSP] Gestão de Operações e Logísitica</option>
                                            <option value="[CTeSP] Prospeção Mineral e Geotécnica">[CTeSP] Prospeção Mineral e Geotécnica</option>
                                            <option value="[CTeSP] Qualidade e Tratamento de Água e Efluentes">[CTeSP] Qualidade e Tratamento de Água e Efluentes</option>
                                            <option value="[CTeSP] Tecnologia Mecânica e Veículos">[CTeSP] Tecnologia Mecânica e Veículos</option>
                                            <option value="Contabilidade">Contabilidade</option>
                                            <option value="Engenharia Civil">Engenharia Civil</option>
                                            <option value="Engenharia de Energias Renováveis">Engenharia de Energias Renováveis</option>
                                            <option value="Engenharia Eletrónica e de Computadores">Engenharia Eletrónica e de Computadores</option>
                                            <option value="Engenharia Informática">Engenharia Informática</option>
                                            <option value="Engenharia Mecânica">Engenharia Mecânica</option>
                                            <option value="Engenharia Química">Engenharia Química</option>
                                            <option value="Gestão">Gestão</option>
                                            <option value="Gestão de Negócios Internacionais">Gestão de Negócios Internacionais</option>
                                            <option value="Informática de Gestão">Informática de Gestão</option>
                                            <option value="Tecnologia Biomédica">Tecnologia Biomédica</option>
                                            <option value="Mestrado Tecnologia e Gestão Industrial">Mestrado Tecnologia e Gestão Industrial</option>
                                            <option value="Mestrado Contabilidade e Finanças">Mestrado Contabilidade e Finanças</option>
                                            <option value="Mestrado Empreendorismo e Inovação">Mestrado Empreendorismo e Inovação</option>
                                            <option value="Mestrado Engenharia da Construção">Mestrado Engenharia da Construção</option>
                                            <option value="Mestrado Engenharia Industrial">Mestrado Engenharia Industrial</option>
                                            <option value="Mestrado Engenharia Química">Mestrado Engenharia Química</option>
                                            <option value="Mestrado Energias Renováveis e Eficiência Energética">Mestrado Energias Renováveis e Eficiência Energética</option>
                                            <option value="Mestrado Gestão das Organizações">Mestrado Gestão das Organizações</option>
                                            <option value="Mestrado Informática">Mestrado Informática</option>
                                            <option value="Mestrado Inovação de Produtos e Processos">Mestrado Inovação de Produtos e Processos</option>
                                            <option value="Mestrado Logística">Mestrado Logística</option>
                                            <option value="Mestrado Tecnologia Biomédica">Mestrado Tecnologia Biomédica</option>
                                        </select>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Data Nascimento" type="text" placeholder="Data Nascimento (13/07/96)"/>
                                    </div>
                                    
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Numero mecanografico" type="number" placeholder="Número Mecanográfico"/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Aderir</button>
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

export default ServiceFour;