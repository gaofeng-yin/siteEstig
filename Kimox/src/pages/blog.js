import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import BlogMain from '../components/Blog/BlogMain';

class BlogPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <BlogMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default BlogPage;

