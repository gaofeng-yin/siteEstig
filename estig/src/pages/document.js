import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import DocumentMain from '../components/Documents/DocumentMain';

class HousingPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <DocumentMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default HousingPage;

