import React, {useState,useEffect} from 'react'
import Navlink from './Navlink';
import {logo,menu} from '../data/data';



const Navbar = (props) => {
    
  const [themenu, setThemenu] = useState(menu);


  return (
   <section className="nav-section" id="nav-section">
        <header className="bg-white shadow-box fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <a href={logo.href} className="logo-brand"><img src={logo.src}
                                alt={logo.alt} 
                                className="logo" /></a>
                        <nav className="navbar navbar-expand-lg navigation navigation-b" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                            
                            {menu.map((link) => {
                            const { href, title } = link;
                            return (
                              <Navlink title={title} href={href} />
                            );
                            })}
                                
                               
                            </ul>
                        </nav>
                        <nav className="navbar navigation navigation-s" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <p className="selection"> من نحن</p>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="dropdown">
                                        <a className="dropdown-item" href="#banner-section">من نحن</a>
                                        <a className="dropdown-item" href="#map-section">فروعنا</a>
                                        <a className="dropdown-item" href="#info-section">الهيموفيليا</a>
                                        <a className="dropdown-item" href="#join-section">كيف تنضم</a>
                                        <a className="dropdown-item" href="#section-footer">إتصل بنا</a>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Navbar