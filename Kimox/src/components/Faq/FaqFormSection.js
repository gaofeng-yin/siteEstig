import React, { Component } from 'react';

class FaqForm extends Component {

    render() {

        return (
            <section className="faq-form pt-110 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-form-title-wrapper text-center">
                                <h3 className="faq-form-title">Still stuck ask directly</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form">
                                <form action="mail.php" id="contact-form" method="POST">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                            <input name="name" type="text" placeholder="Your Name"/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                            <input name="email" type="email" placeholder="Email Adress"/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                            <input name="phone" type="text" placeholder="Phone"/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                            <input name="subject" type="text" placeholder="Subject"/>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12 col-md-12 mb-20">
                                            <textarea placeholder="Write Massage" name="massage" cols="30" rows="9"></textarea>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12 mb-20">
                                            <button type="submit" className="theme-btn border-btn">Send a message</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqForm;