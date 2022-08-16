import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebarTags extends Component {

    render() {

        return (
            <div className="widget_tag_cloud">
                <h4 className="bs-widget-title mb-25"> Tags </h4>
                <div className="tagcloud">
                    <Link href="/blog-details"><a className="tag-cloud-link">Graphics</a></Link>
                    <Link href="/blog-details"><a className="tag-cloud-link">Design</a></Link>
                    <Link href="/blog-details"><a className="tag-cloud-link">Business</a></Link>
                    <Link href="/blog-details"><a className="tag-cloud-link">Development</a></Link>
                    <Link href="/blog-details"><a className="tag-cloud-link">Technology</a></Link>
                    <Link href="/blog-details"><a className="tag-cloud-link">Content</a></Link>
                </div>
            </div>
        );
    }
}

export default BlogSidebarTags;