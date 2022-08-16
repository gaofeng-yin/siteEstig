import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const TeamSliderTwo = dynamic(() => import('../Elements/Slider/TeamSliderTwo'), {
    ssr: false
  })

class TeamTwo extends Component {

    render() {

        return (
            <section className="team-area pt-115 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center mb-50">
                            <h5 className="section-subtitle mb-20">professional people</h5>
                            <h2 className="section-title mb-35">Meet the team</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="team-active2 swiper-container">
                    <TeamSliderTwo />
                </div>
            </div>
        </section>
        );
    }
}

export default TeamTwo;