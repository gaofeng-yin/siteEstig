import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Mission from './MissionSection';
import TeamBoard from './TeamBoardSection';
class AboutMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Sobre Nós" />

                <Mission />

				<TeamBoard />
        	</main>
        );
    }
}

export default AboutMain;