import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Mission from './MissionSection';
import FactTwo from './FactSectionTwo';
import WhyWeTwo from './WhyWeSectionTwo';
import TeamTwo from './TeamSectionTwo';
const BrandThree = dynamic(() => import('../Elements/Brand/BrandSectionThree'), {
    ssr: false
  })
const Testimonial = dynamic(() => import('../Elements/Testimonials/TestimonialsSection'), {
    ssr: false
  })


class AboutMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="About" />
				{/* breadcrumb-end */}

                {/* mission-start */}
                <Mission />
				{/* mission-end */}

                {/* testimonial-start */}
                <div className='mt--30'>
                    <Testimonial />
                </div>
				{/* testimonial-end */}

                {/* fact-start */}
				<FactTwo />
				{/* fact-end */}

                {/* why-we-start */}
				<WhyWeTwo />
				{/* why-we-end */}

                {/* team-start */}
				<TeamTwo />
				{/* team-end */}

                {/* brand-start */}
				<BrandThree />
				{/* brand-end */}

        	</main>
        );
    }
}

export default AboutMain;