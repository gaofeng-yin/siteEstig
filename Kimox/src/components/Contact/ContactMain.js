import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Contact from './ContactSection';


class ContactMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Contacto" />

                <Contact />
        	</main>
        );
    }
}

export default ContactMain;