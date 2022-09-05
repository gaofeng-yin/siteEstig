import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import posts from '../../data/news-posts/posts.json';
import Breadcrumb from '../Common/Breadcrumb';

class NewsMain extends Component {

    render() {

        return (
            <main>
				<Breadcrumb pageTitle="Notícias" />

                <section className="blog-2 pt-120 pb-115">
                    <div className="container">
                        <div className='row'>
                            {posts && posts.map((post, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
                                <ArticleLayout post={post} />
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