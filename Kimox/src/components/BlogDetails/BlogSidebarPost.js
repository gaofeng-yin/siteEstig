import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogSidebarPost extends Component {

    render() {

        return (
            <div className="widget_-latest-posts mb-30">
                <h4 className="bs-widget-title mb-25"> Latest Posts </h4>
                <div className="sidebar__widget-content">
                    <div className="rc-post d-flex mb-15">
                        <div className="rc-thumb">
                            <Link href="/blog-details"><a><img src="assets/img/blog/sidebar-post-img1.jpg" alt="blog-img"/></a></Link>
                        </div>
                        <div className="rc-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> By Admin</a></Link>
                            </div>
                            <h5>
                                <Link href="/blog-details"><a>experiences that connect us</a></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="rc-post d-flex mb-15">
                        <div className="rc-thumb">
                            <Link href="/blog-details"><a><img src="assets/img/blog/sidebar-post-img2.jpg" alt="blog-img"/></a></Link>
                        </div>
                        <div className="rc-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> By Admin</a></Link>
                            </div>
                            <h5>
                                <Link href="/blog-details"><a>From banking and insurance to</a></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="rc-post d-flex">
                        <div className="rc-thumb">
                            <Link href="/blog-details"><a><img src="assets/img/blog/sidebar-post-img3.jpg" alt="blog-img"/></a></Link>
                        </div>
                        <div className="rc-text">
                            <div className="kblog-meta">
                                <Link href="/blog-details"><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> By Admin</a></Link>
                            </div>
                            <h5>
                                <Link href="/blog-details"><a>We work with you to business</a></Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSidebarPost;