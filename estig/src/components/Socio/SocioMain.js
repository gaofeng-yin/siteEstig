import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Quality from '../Home/QualitySection';
import SubscribeSection from './SubscribeSection';
import CardDescriptionSection from './CardDescriptionSection';
import BrandSection from './BrandSection';


class ServiceMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Sócio" />

                <CardDescriptionSection />

				<SubscribeSection />

                <BrandSection />

                <Quality />
        	</main>
        );
    }
}

export default ServiceMain;