import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    '[CTeSP] Análises Químicas e Biológicas', 
    '[CTeSP] Automação, Robótica e Eletrónica Industrial',
    '[CTeSP] Cibersegurança',
    '[CTeSP] Contabilidade',
    '[CTeSP] Construção Civil',
    '[CTeSP] Desenvolvimento de Software',
    '[CTeSP] Energias Renováveis e Infraestruturas Elétricas e de Telecomunicações',
    '[CTeSP] Energias Renováveis e Instalações Elétricas',
    '[CTeSP] Gestão de Operações e Logísitica',
    '[CTeSP] Prospeção Mineral e Geotécnica',
    '[CTeSP] Qualidade e Tratamento de Água e Efluentes',
    '[CTeSP] Tecnologia Mecânica e Veículos',
    'Contabilidade',
    'Engenharia Civil',
    'Engenharia de Energias Renováveis',
    'Engenharia Eletrónica e de Computadores',
    'Engenharia Informática',
    'Engenharia Mecânica',
    'Engenharia Química',
    'Gestão',
    'Gestão de Negócios Internacionais',
    'Informática de Gestão',
    'Tecnologia Biomédica',
    'Mestrado Tecnologia e Gestão Industrial',
    'Mestrado Contabilidade e Finanças',
    'Mestrado Empreendorismo e Inovação',
    'Mestrado Engenharia da Construção',
    'Mestrado Engenharia Industrial',
    'Mestrado Engenharia Química',
    'Mestrado Energias Renováveis e Eficiência Energética',
    'Mestrado Gestão das Organizações',
    'Mestrado Informática',
    'Mestrado Inovação de Produtos e Processos',
    'Mestrado Logística',
    'Mestrado Tecnologia Biomédica'
  ];
  const defaultOption = options[0];
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
                            <form action="https://mailthis.to/aeestig" id="contact-form" method="POST" encType="multipart/form-data">
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
                                        <input name="Telemóvel" type="number" placeholder="Telemóvel"/>
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
                                        <Dropdown className='dropdown' options={options} onChange={this._onSelect}  placeholder="Seleciona o teu curso" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input id="date" name="Data Nascimento" type="text" placeholder="Data Nascimento (13/07/96)"/>
                                    </div>
                                    
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="Telemóvel" type="number" placeholder="Número Mecanográfico"/>
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