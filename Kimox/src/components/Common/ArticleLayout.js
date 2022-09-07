import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleLayout = ({ postsDetails }) => {

  return (
        <div className="kblog">
            <div className="kblog-img">
                <Link href={postsDetails.url}>
                    <img src={'/'+ postsDetails.image} alt="blog image" className="img-fluid" />
                </Link>
                <span>{postsDetails.date}</span>
            </div>
            <div className="kblog-text">
                <h3 className="kblog-text-title mb-20">
                    <Link href={postsDetails.id}><a>{postsDetails.title}</a></Link>
                </h3>
                <div className="kblog-text-link">
                    <Link href={postsDetails.id}><a>{postsDetails.button}<i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                </div>
            </div>
        </div>
  );
}

export default ArticleLayout;