import React, { Component } from 'react';
import Link from 'next/link';

class BlogAuthor extends Component {

    render() {

        return (
            <div className="row pr-15 pl-15">
                <div className="blog-author bg-grey text-md-start text-center">
                    <div className="blog-author-img f-left">
                        <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-author.jpg" alt="blog-img"/></a></Link>
                    </div>
                    <div className="blog-author-text fixed">
                        <h4>Christive eve</h4>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogAuthor;