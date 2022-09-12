import React, { Component } from 'react';
import Video from './VideoSection';
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
const NewsSlider = dynamic(() => import('./NewsSliderSection'), {
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

				<NewsSlider />

        	</main>
        );
    }
}

export default HomeMain;