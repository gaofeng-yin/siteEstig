import React from 'react';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
 
export default () => (
    <section className="project-2 pt-115 pb-90">
        <Tabs>
        <div className="container">
            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-5.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>16/09/2022</span>
                                <h5 className="kproject-text-title"><Link href="https://www.youtube.com/watch?v=aVRtuPnN_NE&list=RDMM&index=27"><a target="_blank">Início de Aulas</a></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-6.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>00/00/00</span>
                                <h5 className="kproject-text-title"><Link href="https://www.youtube.com/watch?v=aVRtuPnN_NE&list=RDMM&index=27"><a target="_blank">Whatever</a></Link></h5>
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