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
                        <img src="assets/img/project/codigo.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <h5 className="kproject-text-title"><Link href="https://drive.google.com/file/d/194qOrYorKOS8RPvec22eIKhEvGPVV-tV/view?usp=sharing"><a target="_blank">Código de Praxe</a></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/capote.jpg" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <h5 className="kproject-text-title"><Link href="https://drive.google.com/file/d/1-XqOJ9DngH2r49dnKDLBdQq2EhSX8fe2/view?usp=sharing"><a target="_blank">Código de Traje Académico</a></Link></h5>
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