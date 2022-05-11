import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/LogoMakr.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <img src={require('../src/images/LogoMakr.png')} />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;



/* eslint-disable react-hooks/rules-of-hooks */
// import React,{useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import '../../static/css/nav.css';

// let Nav = ()=>{

    

//     let [isActive, setActive] = useState(false);

//     const toggleClass = () => {
//         setActive(!isActive);
//     };

//     return(
//         <>
//             <section className="header">
//                 <nav className="header-nav">
//                     <article className="header-nav-container">
//                         <div className="header-nav-logo">
//                             <h1>Pro Movers</h1>
//                             <div  className={isActive ? 'active header-nav-logo-hamburger hamburger': 'header-nav-logo-hamburger hamburger'} onClick={toggleClass}>
//                                 <span className="header-nav-logo-hamburger-bar bar"></span>
//                                 <span className="header-nav-logo-hamburger-bar bar"></span>
//                                 <span className="header-nav-logo-hamburger-bar bar"></span>
//                             </div>
//                         </div>
//                         <div  className={isActive ? 'active header-nav-links': 'header-nav-links'}>
//                             <ul className="header-nav-links-ul">
//                                 <li><NavLink to="">Home</NavLink></li>
//                                 <li><NavLink to="">Services</NavLink></li>
//                                 <li><NavLink to="">About</NavLink></li>
//                                 <li><NavLink to="/contact">Contact</NavLink></li>
//                                 <li><NavLink to="login">LOGIN</NavLink></li>
//                             </ul>
//                         </div>
//                     </article>
//                 </nav>
//             </section>
//         </>
//     ) 

// };




// export default Nav;