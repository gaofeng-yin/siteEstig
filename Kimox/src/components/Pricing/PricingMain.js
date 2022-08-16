import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import Pricing from './PricingSection';


class PricingMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Pricing Plans" />
				{/* breadcrumb-end */}

                {/* pricing-start */}
                <Pricing />
				{/* pricing-end */}

                {/* pricing-start */}
                <CtaTwo />
                {/* pricing-end */}
        	</main>
        );
    }
}

export default PricingMain;