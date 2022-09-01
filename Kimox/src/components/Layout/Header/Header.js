import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';

const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [searchOpen, setSearchOpen] = useState(false)

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => {
      setPath(router.pathname)
   }, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });

   const sticky = (e) => {
      const header = document.querySelector('.transparent-header');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
   };
   // Sticky Menu Area End

   return (
      <React.Fragment>
         <Head>
            <title>AE ESTIG</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
         </Head>
         <header>
            <div className="transparent-header">
               <div className="container-fluid">
                  <div className="header-space">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-8">
                           <div className="header-logo">
                              <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="logo-img" /></a></Link>
                           </div>
                        </div>
                        <div className="col-xl-6 col-4">
                           <div className="main-menu d-xl-block d-none">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="menu-item-has-children"><Link href="/"><a>Home</a></Link>
                                    </li>
                                    <li><Link href="/about"><a>Sobre Nós</a></Link></li>
                                    <li className="menu-item-has-children"><Link href="/blog"><a>Notícias</a></Link>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="/service"><a>Sócio</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/service"><a>Services</a></Link></li>
                                          <li><Link href="/service-details"><a>Services Details</a></Link></li>
                                       </ul>
                                    </li>
                                    <li><Link href="/habitacao"><a>Habitação</a></Link></li>
                                    <li className="menu-item-has-children"><Link href="/project"><a>Foto</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/project"><a>Projects</a></Link></li>
                                          <li><Link href="/project-details"><a>Projects Details</a></Link></li>
                                       </ul>
                                    </li>
                                    {/*<li><a href="#">Pages</a>
                                       <ul className="sub-menu">
                                          <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                          <li><Link href="/about"><a>About</a></Link></li>
                                          <li><Link href="/project"><a>Project</a></Link></li>
                                          <li><Link href="/project-details"><a>Project Details</a></Link></li>
                                       </ul>
                                    </li>*/}
                                    <li><Link href="/contact"><a>Contacto</a></Link></li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="side-menu-icon d-xl-none text-end">
                              <button className="side-toggle" onClick={() => { setMenuOpen(!menuOpen) }}><i><FontAwesomeIcon icon={['fas', 'bars']} /></i></button>
                           </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                           <div className="header-right text-end">
                              <div className="header-social">
                                 <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                 <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

         </header>
      </React.Fragment>
   );
}

export default Header;