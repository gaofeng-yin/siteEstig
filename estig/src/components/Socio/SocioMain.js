import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Quality from '../Home/QualitySection';
import ServiceFour from './ServiceSectionFour';
import WhyWeThree from './WhyWeThree';
import BrandSection from './BrandSection';


class ServiceMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Sócio" />

                <WhyWeThree />

				<ServiceFour />

                <BrandSection />

                <Quality />
        	</main>
        );
    }
}

export default ServiceMain;