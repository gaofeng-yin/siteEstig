import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import MapSection from './MapSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Habitação" />

				<MapSection />
        	</main>
        );
    }
}

export default FaqMain;