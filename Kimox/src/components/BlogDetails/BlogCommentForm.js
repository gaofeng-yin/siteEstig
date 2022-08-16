import React, { Component } from 'react';


class BlogCommentForm extends Component {

    render() {

        return (
            <div className="blog-comment-form">
                <div className="comment-title2">
                    <h3 className="comment-box-title">Leave a Comment</h3>
                </div>
                <form action="mail.php" id="contact-form" method="POST">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-20">
                            <input name="name" type="text" placeholder="Your Name"/>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-20">
                            <input name="email" type="text" placeholder="Your Email"/>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mb-20">
                            <textarea name="message" placeholder="Write Massage"></textarea>
                        </div>
                        <div className="col-xxl-12 col-xl-12 mb-20">
                            <button type="submit" className="theme-btn border-btn">Submit comment</button>
                        </div>
                    </div>
                </form>
                <p className="ajax-response"></p>
            </div>
        );
    }
}

export default BlogCommentForm;