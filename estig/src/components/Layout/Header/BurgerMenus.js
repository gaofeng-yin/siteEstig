import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [courses, setcourses] = useState(false)
      const [blog, setBlog] = useState(false)
      const [pages, setPages] = useState(false)
      const [project, setProject] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(false)
        }
        else if( menu == 'courses'){
          setHome(false)
          setcourses(!courses)
          setBlog(false)
          setPages(false)
          setProject(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setcourses(false)
          setBlog(!blog)
          setPages(false)
          setProject(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setProject(false)
          setPages(!pages)
        }
        else if( menu == 'project'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(!project)
        }
      }; 

      return (
      <div className="fix">
        <div className={menuOpen ? "side-info info-open": "side-info"}>
            <button className="side-info-close" onClick={() => setMenuOpen(false)}><i><FontAwesomeIcon icon={['fas', 'times']}/></i></button>
            <div className="side-info-content">
                <div className="mm-menu">
                  <ul>
                    <li><Link href="/about"><a>Sobre Nós</a></Link></li>
                    <li><Link href="/news"><a>Notícias</a></Link></li>
                    <li><Link href="/socio"><a>Sócio</a></Link></li>
                    <li><Link href="/document"><a>Documento</a></Link></li>
                    <li><Link href="/photo"><a>Foto</a></Link></li>
                    <li><Link href="/contact"><a>Contacto</a></Link></li>
                </ul>
              </div>
                <div className="contact-infos mb-30">
                    <div className="contact-list mb-30">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><img src="assets/img/icon/sidebar-icon-1.svg" className="img-fluid" alt="icon-img"/>86 broklyn street road, New York</li>
                            <li><img src="assets/img/icon/footer-icon-1.svg" className="img-fluid" alt="icon-img"/><a href="mailto:info@sycho24.com">needhelp@company.com</a></li>
                        </ul>
                        <div className="sidebar__menu--social">
                            <a href="https://www.facebook.com/aeestigipb" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                            <a href="https://www.instagram.com/aeestig/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          
    )
}

export default BurgerMenus;