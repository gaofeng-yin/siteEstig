import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import store from '../../redux/store';
import ReactGA from 'react-ga';
import articleDetails from '../../sample-data/blog-posts/single-post.json';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogAuthor from './BlogAuthorSection';
import BlogComment from './BlogCommentSection';
import BlogCommentForm from './BlogCommentForm';
import BlogDetailsInfo from './BlogDetailsInfo';
import BlogSidebarSearch from './BlogSidebarSearch';
import BlogSidebarPost from './BlogSidebarPost';
import BlogSidebarCat from './BlogSidebarCat';
import BlogSidebarTags from './BlogSidebarTags';

class BlogDetailsMain extends Component {

    static async getInitialProps({ query }) {
        const {slug} = query;
        return { slug }
    }

    constructor(props) {
        super(props);
    }

    getDetails() {
        store.dispatch({
            type: 'NEWS_DETAILS_SUCCESS',
            newsDetails: articleDetails
        });
    }

    componentDidMount() {
        this.getDetails();
        ReactGA.initialize('UA-168056874-1', { alwaysSendToDefaultTracker: true });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {

        const { slug, newsDetails} = this.props;

        return (

            <main>
                {newsDetails && newsDetails.map((article, num) => (
                <Head key={num}>
                    <title>{article.title}</title>
                    <meta name={article.title} />
                    <meta name="og:title" property="og:title" content={article.title}></meta>
                    <meta name="og:description" property="og:description" content={article.text}></meta>
                    <meta name="twitter:card" content={article.title}></meta>
                    <link rel="canonical" href={'https://kimox.bdevs.net'+ article.url}></link>
                    <meta property="og:image" content={article.image} />
                </Head>
                ))}

                {/* breadcrumb-area-start */}
                {newsDetails && newsDetails.map((article, num) => (
                    <Breadcrumb key={num} pageTitle={article.title} />
                ))}
                {/* breadcrumb-area-start */}

                {/* blog-area start */}
                <section className="blog-details-area  pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                                {newsDetails && newsDetails.map((article, num) => (
                                <div key={num}>
                                    <div className="kblog">
                                        <div className="kblog-img">
                                            <img src={article.image} alt={article.title} />
                                            <span>21 May</span>
                                        </div>
                                        <div className="kblog-text kblog-text2 kblog-text22">
                                            <div className="kblog-meta pb-10">
                                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> {article.user}</a></Link>
                                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> {article.comments}</a></Link>
                                            </div>
                                            <p className="mb-20">{article.text}</p>
                                            <p>{article.textTwo}</p>
                                        </div>
                                    </div>

                                    <BlogDetailsInfo />

                                    <BlogAuthor />

                                    <BlogComment />

                                    <BlogCommentForm />
                                    
                                </div>
                                ))}

                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-md-40 mt-xs-40">
                                <div className="sidebar-wrap">
                                    <BlogSidebarSearch />

                                    <BlogSidebarPost />

                                    <BlogSidebarCat />

                                    <BlogSidebarTags />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-area end */}
            </main>

        );
    }
}

const mapStateToProps = (state) => {
    const { newsDetails } = state.newsDetails;
    return { newsDetails }
};

export default connect(mapStateToProps)(BlogDetailsMain);


