import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Mission from './MissionSection';
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
				<Breadcrumb pageTitle="Sobre Nós" />
				{/* breadcrumb-end */}

                {/* mission-start */}
                <Mission />
				{/* mission-end */}

                {/* team-start */}
				<TeamTwo />
				{/* team-end */}
        	</main>
        );
    }
}

export default AboutMain;