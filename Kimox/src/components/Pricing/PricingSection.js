import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Pricing extends Component {

    render() {

        return (
            <section className="pricing-area pt-120 pb-90 fix">
                <div className="container">
                    <nav className="text-center wow fadeInUp mb-40" data-wow-delay=".4s">
                        <div className="nav tp-pricing-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                        </div>
                    </nav> 
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><i><FontAwesomeIcon icon={['fas', 'star']} /></i></span>
                                        </div>
                                        <div className="pricing-price mb-25">
                                            <h5 className="pricing-subtitle">Star Plan</h5>
                                            <h3 className="pricing-title">$25.00</h3>
                                        </div>
                                        <div className="pricing-list-bg">
                                            <div className="pricing-list mb-45">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Extra features</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lifetime free support</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Upgrate options</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Full access</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact"><a className="theme-btn">Choose a plan</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></span>
                                        </div>
                                        <div className="pricing-price mb-25">
                                            <h5 className="pricing-subtitle">Heart plan</h5>
                                            <h3 className="pricing-title">$35.00</h3>
                                        </div>
                                        <div className="pricing-list-bg">
                                            <div className="pricing-list mb-45">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Extra features</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lifetime free support</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Upgrate options</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Full access</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact"><a className="theme-btn">Choose a plan</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><i><FontAwesomeIcon icon={['fas', 'gem']} /></i></span>
                                        </div>
                                        <div className="pricing-price mb-25">
                                            <h5 className="pricing-subtitle">Diamond Plan</h5>
                                            <h3 className="pricing-title">$45.00</h3>
                                        </div>
                                        <div className="pricing-list-bg">
                                            <div className="pricing-list mb-45">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Extra features</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lifetime free support</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Upgrate options</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Full access</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact"><a className="theme-btn">Choose a plan</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><i><FontAwesomeIcon icon={['fas', 'star']} /></i></span>
                                        </div>
                                        <div className="pricing-price mb-25">
                                            <h5 className="pricing-subtitle">Star Plan</h5>
                                            <h3 className="pricing-title">$45.00</h3>
                                        </div>
                                        <div className="pricing-list-bg">
                                            <div className="pricing-list mb-45">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Extra features</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lifetime free support</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Upgrate options</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Full access</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact"><a className="theme-btn">Choose a plan</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></span>
                                        </div>
                                        <div className="pricing-price mb-25">
                                            <h5 className="pricing-subtitle">Heart plan</h5>
                                            <h3 className="pricing-title">$65.00</h3>
                                        </div>
                                        <div className="pricing-list-bg">
                                            <div className="pricing-list mb-45">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Extra features</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lifetime free support</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Upgrate options</li>
                                                    <li><i className='cross-icon'><FontAwesomeIcon icon={['fas', 'check']} /></i> Full access</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact"><a className="theme-btn">Choose a plan</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><i><FontAwesomeIcon icon={['fas', 'gem']} /></i></span>
                                        </div>
                                        <div className="pricing-price mb-25">
                                            <h5 className="pricing-subtitle">Diamond Plan</h5>
                                            <h3 className="pricing-title">$85.00</h3>
                                        </div>
                                        <div className="pricing-list-bg">
                                            <div className="pricing-list mb-45">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Extra features</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Lifetime free support</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Upgrate options</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Full access</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact"><a className="theme-btn">Choose a plan</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;