import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleLayout = ({ post }) => {

  return (
        <div className="kblog">
            <div className="kblog-img">
                <Link href={post.url}>
                    <img src={'/'+ post.image} alt="blog image" className="img-fluid" />
                </Link>
                <span>{post.date}</span>
            </div>
            <div className="kblog-text">
                <h3 className="kblog-text-title mb-20">
                    <Link href={post.url}><a>{post.title}</a></Link>
                </h3>
                <div className="kblog-text-link">
                    <Link href={post.url}><a>{post.button} <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                </div>
            </div>
        </div>
  );
}

export default ArticleLayout;