import React, { Component } from 'react';
import TeamSlider from '../Elements/Slider/TeamSliderSection';

class Team extends Component {

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
            <div className="container-fluid">
                <div className="team-space">
                    <TeamSlider />
                </div>
            </div>
        </section>
        );
    }
}

export default Team;