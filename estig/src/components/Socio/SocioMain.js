import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Quality from '../Home/QualitySection';
import SubscribeSection from './SubscribeSection';
import CardDescriptionSection from './CardDescriptionSection';
import SponsorAccordionSection from './SponsorAccordionSection';


class ServiceMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Sócio" />

                <CardDescriptionSection />

				<SubscribeSection />

                <SponsorAccordionSection />

                <Quality />
        	</main>
        );
    }
}

export default ServiceMain;