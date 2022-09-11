import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import AboutMain from '../components/About/AboutMain';

class AboutPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <AboutMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default AboutPage;

