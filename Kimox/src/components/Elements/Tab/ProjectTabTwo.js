import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
 
export default () => (
    <section className="project-2 pt-115 pb-90">
        <Tabs>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="aportfolio-menu aportfolio-menu2 text-center mb-50">
                        <TabList>
                            <Tab><button className="nav-link" type="button">All</button></Tab>
                            <Tab><button className="nav-link" type="button">Branding</button></Tab>
                            <Tab><button className="nav-link" type="button">illustration</button></Tab>
                            <Tab><button className="nav-link" type="button">Photography</button></Tab>
                            <Tab><button className="nav-link" type="button">Web Design</button></Tab>
                        </TabList>
                    </div>
                </div>
            </div>
            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-5.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphic</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-6.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-7.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Development</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-8.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Networking</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-9.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphics</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-10.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-11.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-12.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-13.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>
            
            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-7.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Development</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-8.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Networking</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-9.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphics</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-11.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-12.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-13.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-10.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-8.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Networking</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-11.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-12.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-13.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-9.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphics</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-10.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-5.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphic</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-6.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-8.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Networking</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-9.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphics</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-10.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-7.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Development</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-8.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Networking</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-9.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Graphics</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-10.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-11.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-12.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-13.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>Design</span>
                                <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>
        </div>
        </Tabs>
    </section>
);