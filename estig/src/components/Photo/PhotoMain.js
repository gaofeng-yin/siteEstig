import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import PhotoSection from './PhotoSection';


class PhotoMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Fotos" />

                <PhotoSection />
        	</main>
        );
    }
}

export default PhotoMain;