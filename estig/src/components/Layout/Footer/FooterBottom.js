import React from 'react';
import Link from 'next/link';

let year = new Date().getFullYear();

const FooterBottom = () => {
    return (
        <div className="copyright-area">
            <div className="container">
               <div className="copyright-bg">
                     <div className="row align-items-center">
                        <div className="col-md-6">
                           <div className="copyright">
                                 <span>Copyright ©{year} JoYi Labs All Rights Reserved</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="privacy-text text-center text-md-end"> 
                                 <ul>
                                    <li>
                                       <Link href="https://drive.google.com/file/d/1fKLzxufbaDbJU23-1XK0LW4gRVjaktrF/view?usp=sharing" ><a target="_blank">Terms & Condition</a></Link>
                                    </li>
                                 </ul>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
    );
}

export default FooterBottom;