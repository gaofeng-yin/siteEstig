import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Map from './MapSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Habitação" />
				{/* breadcrumb-end */}

                {/* faq-start */}
				<Map />
				{/* faq-end */}
        	</main>
        );
    }
}

export default FaqMain;