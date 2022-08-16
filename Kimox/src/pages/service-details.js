import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ServiceDetailsMain from '../components/ServiceDetails/ServiceDetailsMain';

class ServiceDetailsPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <ServiceDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetailsPage;

