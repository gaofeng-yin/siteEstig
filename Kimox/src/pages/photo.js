import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import PhotoMain from '../components/Photo/PhotoMain';

class ProjectPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <PhotoMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default ProjectPage;

