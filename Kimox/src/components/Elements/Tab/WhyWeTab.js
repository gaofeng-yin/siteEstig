import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export default () => (
    
    <div className="why-we-tab mb-40" data-aos="fade-up-left" data-aos-duration="1000">
        <Tabs>
            <div className='why-tabs'>
                <TabList>
                    <Tab><button className="nav-link" type="button">Full satisfaction</button></Tab>
                    <Tab><button className="nav-link" type="button">Expert Team</button></Tab>
                    <Tab><button className="nav-link" type="button">Mission & Vissions</button></Tab>
                </TabList>
            </div>

            <div className='why-tabs-content'>
                <TabPanel>
                    <div className="tab-panes">
                        <p className="mb-30">Discover which SVG patterns we should avoid and which patterns are the most inclusive when comparing different combinations
                                of OSs, browsers, and screen readers.</p>
                        <div className="why-tab-wrapper">
                            <div className="why-tab-img">
                                <img src="assets/img/about/about-img-3.jpg" className="img-fluid" alt="about-img"/>
                            </div>
                            <div className="why-tab-list fix">
                                <ul>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Nsectetur cing elit</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Suspe ndisse suscipit sagittis leo</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Entum estibulum dignissim posuere</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Lorem Ipsum on the tend to repeat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-panes">
                        <p className="mb-30">There are many variations of passages of but the majority have in some form, by injected humou or
                            words which don't look even slightly believable of but the majority have suffered.</p>
                        <div className="why-tab-wrapper">
                            <div className="why-tab-img">
                                <img src="assets/img/about/about-img-8.jpg" className="img-fluid" alt="about-img"/>
                            </div>
                            <div className="why-tab-list fix">
                                <ul>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Entum estibulum dignissim posuere</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Lorem Ipsum on the tend to repeat</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Nsectetur cing elit</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Suspe ndisse suscipit sagittis leo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-panes">
                        <p className="mb-30">Mistakes. These cruel villains do not even stop at the beautiful world of software development. But although we
                                cannot avoid making mistakes, we can learn to undo them!</p>
                        <div className="why-tab-wrapper">
                            <div className="why-tab-img">
                                <img src="assets/img/about/about-img-9.jpg" className="img-fluid" alt="about-img"/>
                            </div>
                            <div className="why-tab-list fix">
                                <ul>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Suspe ndisse suscipit sagittis leo</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Nsectetur cing elit</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Entum estibulum dignissim posuere</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Lorem Ipsum on the tend to repeat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
 </div>
);