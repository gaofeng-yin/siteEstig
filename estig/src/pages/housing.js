import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HousingMain from '../components/Housing/HousingMain';

class HousingPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <HousingMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default HousingPage;

