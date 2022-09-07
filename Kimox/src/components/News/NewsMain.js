import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import postsDetails from '../../data/news-posts/postsDetails.json';
import Breadcrumb from '../Common/Breadcrumb';

class NewsMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Notícias" />

                <section className="blog-2 pt-120 pb-115">
                    <div className="container">
                        <div className='row'>
                            {postsDetails && postsDetails.map((postsDetails, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
                                <ArticleLayout postsDetails={postsDetails} />
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
        	</main>
        );
    }
}

export default NewsMain;