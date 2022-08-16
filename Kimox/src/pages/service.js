import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ServiceMain from '../components/Service/ServiceMain';

class ServicePage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <ServiceMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default ServicePage;

