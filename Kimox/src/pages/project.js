import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ProjectMain from '../components/Project/ProjectMain';

class ProjectPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <ProjectMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default ProjectPage;

