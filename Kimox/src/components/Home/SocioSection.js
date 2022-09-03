import React, { Component } from 'react';
import Link from 'next/link';

class Trust extends Component {

    render() {
        //need to refactor redirection
        return (
            <section className="trust-area pt-105 pb-120">
                <div className="trust-bg" style={{ backgroundImage:`url(${'assets/img/trust/trust-bg.jpg'})`}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="ktrust text-center z-index">
                                    <h2 className="ktrust-title mb-45 wow fadeInUp" data-wow-delay=".2s">Torna-te sócio</h2>
                                    <div className="ktrust-btn">
                                        <Link href="/service"><a className="theme-btn">Quero ser sócio</a></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trust;