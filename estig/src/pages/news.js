import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import NewsMain from '../components/News/NewsMain';

class BlogPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <NewsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default BlogPage;

