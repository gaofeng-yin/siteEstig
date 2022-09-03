import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SocioMain from '../components/Socio/SocioMain';

class ServicePage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <SocioMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default ServicePage;

