import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import posts from '../../sample-data/blog-posts/posts.json';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';


class BlogMain extends Component {

    render() {

        return (
            <main>

                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Notícias" />
				{/* breadcrumb-end */}

                <section className="blog-2 pt-120 pb-115">
                    <div className="container">
                        <div className='row'>
                            {posts && posts.map((post, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
                                <ArticleLayout post={post} />
                            </div>
                            ))}
                        </div>
                       {/* <PaginationSection /> */}
                    </div>
                </section>
        	</main>
        );
    }
}

export default BlogMain;