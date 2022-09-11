import React, { Component } from 'react';
import Video from '../Elements/Video/VideoSection';
import About from './AboutSection';
import Cta from './CtaSection';
import Service from './ServiceSection';
import dynamic from 'next/dynamic';
const HomeSlider = dynamic(() => import('../Elements/Slider/HomeSliderSection'), {
    ssr: false
  })
const Sponsor = dynamic(() => import('./SponsorSection'), {
    ssr: false
})
import Socio from './SocioSection';
import Photo from './FotoEscola';
const BlogSlider = dynamic(() => import('../Elements/Slider/BlogSliderSection'), {
    ssr: false
})

class HomeMain extends Component {

    render() {

        return (
            <main>
				<HomeSlider />

				<Service />

				<Cta />

				<About />

				<Photo />

				<Video />

				<Sponsor />

				<Socio />

				<BlogSlider />

        	</main>
        );
    }
}

export default HomeMain;