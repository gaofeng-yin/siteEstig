import React from 'react';
import Header from '../components/Layout/Header/Header';
import FooterTwo from '../components/Layout/Footer/FooterTwo';
import FaqMain from '../components/Faq/FaqMain';

class FaqPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <FaqMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default FaqPage;

