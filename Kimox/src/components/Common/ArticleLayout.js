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
                <div className="kblog-meta">
                    <Link href={post.url}><a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> {post.user}</a></Link>
                    <Link href={post.url}><a><i><FontAwesomeIcon icon={['fas', 'comments']} /></i> {post.comments}</a></Link>
                </div>
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