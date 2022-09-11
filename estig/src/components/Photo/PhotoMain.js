import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import PhotoTab from '../Elements/Tab/PhotoTab';


class PhotoMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Fotos" />

                <PhotoTab />
        	</main>
        );
    }
}

export default PhotoMain;