import React from 'react';
import NewsDetailsMain from '../components/NewsDetails/NewsDetailsMain';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

class BlogDetails extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <NewsDetailsMain />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}


export default BlogDetails;

