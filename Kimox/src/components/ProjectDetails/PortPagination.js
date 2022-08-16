import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PortPagination extends Component {

    render() {

        return (
            <div className="portfolio__pagination-wrapper">
                <div className="container">
                    <div className="pagination-border pt-40 pb-40">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="portfolio__pagination">
                                    <a href="#" className="link-btn-2">
                                        <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} /></i>
                                        Next
                                    </a>
                                </div>
                            </div>
                                
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="portfolio__pagination text-end">
                                    <a href="#" className="link-btn-2">
                                        Prev
                                        <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortPagination;