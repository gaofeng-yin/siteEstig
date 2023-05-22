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
                        <img src="assets/img/project/PORTESTIG.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>18/09/2022</span>
                                <h5 className="kproject-text-title"><Link href="https://drive.google.com/drive/folders/1bE8GrXLMuUqv3wdOFhwyut2_R49R11r8?usp=sharing"><a target="_blank">Fotos da ESTiG</a></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/batismo.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>04/12/2022</span>
                                <h5 className="kproject-text-title"><Link href="https://drive.google.com/drive/folders/1fssmGYbufw6nGWEM_mNBkqIfjL8DtNRg"><a target="_blank">Batismo Caloiros</a></Link></h5>
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