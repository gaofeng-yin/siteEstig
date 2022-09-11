import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import DocumentSection from './DocumentSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Documentos" />

				<DocumentSection />
        	</main>
        );
    }
}

export default FaqMain;