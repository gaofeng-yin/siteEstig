import React from 'react';
import BlogDetailsMain from '../components/BlogDetails/BlogDetailsMain';
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
                    {/* Blog Main */}
                    <BlogDetailsMain />
                    {/* Blog Main End */}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}


export default BlogDetails;

