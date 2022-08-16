import React, { Component } from 'react';

class Fact extends Component {

    render() {

        return (
        <section className="fact-area pb-165" style={{ backgroundImage:`url(${'assets/img/bg/fact-bg.jpg'})`}}>
            <div className="container">
                <div className="fun-fact text-center pb-80">
                    <span>Our fun facts</span>
                </div>
            </div>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-1.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">3456</h2>
                            <span>Project completed</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-2.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">2842</h2>
                            <span>Happy Client</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".9s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-3.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">3178</h2>
                            <span>Total Project</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact kfact-last-child text-center mb-30 wow fadeInUp" data-wow-duration="1s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-4.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">1845</h2>
                            <span>Our Employee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Fact;