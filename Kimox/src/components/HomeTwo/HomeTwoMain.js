import React, { Component } from 'react';
import ProjectTab from '../Elements/Tab/ProjectTab';
import Trust from '../Home/TrustSection';
import Introduction from './IntroductionSection';
import ServiceTwo from './ServiceSectionTwo';
import WhyWe from './WhyWeSection';
import dynamic from 'next/dynamic';
import Fact from './FactSection';
import Benefits from './BenefitsSection';
import BlogTwo from './BlogSectionTwo';
import CtaTwo from './CtaTwoSection';
const HomeTwoSlider = dynamic(() => import('../Elements/Slider/HomeTwoSlider'), {
    ssr: false
  })
const BrandTwo = dynamic(() => import('../Elements/Brand/BrandSectionTwo'), {
    ssr: false
})
const Team = dynamic(() => import('./TeamSection'), {
    ssr: false
})


class HomeTwoMain extends Component {

    render() {

        return (
            <main>
	            {/* slider-start */}
				<HomeTwoSlider />
				{/* slider-end */}

                {/* brand-start */}
				<BrandTwo />
				{/* brand-end */}

                {/* introduction-start */}
                <Introduction />
				{/* introduction-end */}

                {/* service-start */}
                <ServiceTwo />
				{/* service-end */}

                {/* trust-start */}
                <Trust />
				{/* trust-end */}

                {/* team-start */}
                <Team />
				{/* team-end */}

                {/* brand-start */}
                <WhyWe />
				{/* brand-end */}

                {/* project-start */}
                <ProjectTab />
				{/* project-end */}

                {/* fact-start */}
                <Fact />
				{/* fact-end */}

                {/* benefits-start */}
                <Benefits />
				{/* benefits-end */}

                {/* blog-start */}
                <BlogTwo />
                {/* blog-end */}

                {/* cta-start */}
                <CtaTwo />
                {/* cta-end */}

        	</main>
        );
    }
}

export default HomeTwoMain;