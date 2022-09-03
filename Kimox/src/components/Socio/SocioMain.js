import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Quality from '../Home/QualitySection';
import ServiceFour from './ServiceSectionFour';
import ServiceThree from './ServiceSectionThree';
import WhyWeThree from './WhyWeThree';
import dynamic from 'next/dynamic';
const BrandFour = dynamic(() => import('../Elements/Brand/BrandSectionFour'), {
    ssr: false
  })


class ServiceMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Sócio" />

               <ServiceThree />

                <WhyWeThree />

				<ServiceFour />

                <BrandFour />

                <Quality />
        	</main>
        );
    }
}

export default ServiceMain;