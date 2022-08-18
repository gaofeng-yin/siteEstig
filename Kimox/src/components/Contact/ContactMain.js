import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Map from '../Home/MapSection';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import Contact from './ContactSection';


class ContactMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Contacto" />
				{/* breadcrumb-end */}

                {/* contact-start */}
                <Contact />
				{/* contact-end */}

                {/* cta-start */}
                {/* <CtaTwo /> */}
				{/* cta-end */}

                {/* map-start */}
                {/*  <Map /> */}
                {/* map-end */}
        	</main>
        );
    }
}

export default ContactMain;