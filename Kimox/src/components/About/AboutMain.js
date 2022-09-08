import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Mission from './MissionSection';
import TeamTwo from './TeamSectionTwo';
class AboutMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Sobre Nós" />

                <Mission />

				<TeamTwo />
        	</main>
        );
    }
}

export default AboutMain;