import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import FaqAccordion from './FaqAccordion';


class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Habitação" />
				{/* breadcrumb-end */}

                {/* faq-start */}
                <FaqAccordion />
				{/* faq-end */}
        	</main>
        );
    }
}

export default FaqMain;