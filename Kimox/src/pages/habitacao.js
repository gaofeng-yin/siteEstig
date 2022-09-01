import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import FaqMain from '../components/Habitacao/HabitacaoMain';

class HabitacaoPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <FaqMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default HabitacaoPage;

