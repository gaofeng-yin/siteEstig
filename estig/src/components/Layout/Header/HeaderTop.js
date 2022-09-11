import React, { Component } from 'react';

class HeaderTop extends Component {

    render() {

        return (
            <div className="header-top bg-heading d-none d-md-block">
                <div className="container-fluid">
                    <div className="header-top-space">
                        <div className="row">
                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="welcome-text">
                                    <span>Welcome to the Digital Marketing Agency</span>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="header-top-info">
                                    <ul>
                                        <li><img src="assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon_img"/>86 broklyn street road, New York</li>
                                        <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                        <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:926668880000">92 666 888 0000</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;