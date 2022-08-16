import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const BlogSliderTwo = dynamic(() => import('../Elements/Slider/BlogSliderTwo'), {
    ssr: false
  })

class BlogTwo extends Component {

    render() {

        return (
            <section className="blog-2 pt-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrapper text-center mb-50">
                                <h5 className="section-subtitle mb-20">recent blog posts</h5>
                                <h2 className="section-title">News & Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="blog-active swiper-container mb-120">
                        <BlogSliderTwo />
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogTwo;