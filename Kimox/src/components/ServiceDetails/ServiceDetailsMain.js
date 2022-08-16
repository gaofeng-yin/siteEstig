import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ServiceDetails from './ServiceDetails';


class ServiceDetailsMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Services Details" />
				{/* breadcrumb-end */}

                {/* service-start */}
                <ServiceDetails />
				{/* service-end */}

        	</main>
        );
    }
}

export default ServiceDetailsMain;