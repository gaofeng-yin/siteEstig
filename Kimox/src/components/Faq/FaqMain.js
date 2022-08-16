import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Faq" />
				{/* breadcrumb-end */}

                {/* faq-start */}
                <FaqAccordion />
				{/* faq-end */}

                {/* form-start */}
                <FaqForm />
				{/* form-end */}

                {/* pricing-start */}
                <CtaTwo />
                {/* pricing-end */}
        	</main>
        );
    }
}

export default FaqMain;