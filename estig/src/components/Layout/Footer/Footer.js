import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {

    return (
      <footer style={{ backgroundColor: "#434343" }} className="pt-95 position-relative">
         <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
         </div>
         <div className="footer-area pb-60">
            <div className="container">
               <div className="row">
                     <div className="col-lg-4 col-sm-6">
                        <div className="widget mb-30">
                           <div className="footer-logo mb-25">
                                 <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="footer-logo"/></a></Link>
                           </div>
                           <p className="mb-20 pr-35">Já com mais de 3 décadas de história, mas com o objetivo de sempre fazer mais pela ESTiG e pelos seus estudantes.</p>
                           <div className="footer-social">
                              <a href="https://www.facebook.com/aeestigipb" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                              <a href="https://www.instagram.com/aeestig/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-sm-6">
                        <div className="widget mb-30">
                           <h4 className="widget-title mb-35">Links</h4>
                           <ul>
                                 <li><Link href="/socio"><a>Sócio</a></Link></li>
                                 <li><Link href="/news"><a>Notícias</a></Link></li>
                                 <li><Link href="/about"><a>Sobre Nós</a></Link></li>
                                 <li><Link href="/contact"><a>Contacto</a></Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="widget widget-contact mb-30">
                           <h4 className="widget-title mb-35">Contacto</h4>
                           <ul>
                                 <li><img src="assets/img/icon/footer-icon-1.svg" className="img-fluid" alt="icon-img"/><a href="mailto:aeestig.alunos@gmail.com">aeestig.alunos@gmail.com</a></li>
                           </ul>
                        </div>
                     </div>

               </div>
            </div>
         </div>
         <FooterBottom />
      </footer>
    );
}

export default Footer;