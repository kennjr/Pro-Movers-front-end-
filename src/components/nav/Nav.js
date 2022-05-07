/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../static/css/nav.css';

let Nav = ()=>{

    

    let [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return(
        <>
            <section className="header">
                <nav className="header-nav">
                    <article className="header-nav-container">
                        <div className="header-nav-logo">
                            <h1>Pro Movers</h1>
                            <div  className={isActive ? 'active header-nav-logo-hamburger hamburger': 'header-nav-logo-hamburger hamburger'} onClick={toggleClass}>
                                <span className="header-nav-logo-hamburger-bar bar"></span>
                                <span className="header-nav-logo-hamburger-bar bar"></span>
                                <span className="header-nav-logo-hamburger-bar bar"></span>
                            </div>
                        </div>
                        <div  className={isActive ? 'active header-nav-links': 'header-nav-links'}>
                            <ul className="header-nav-links-ul">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="movers">Movers</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to='movers/logs'>Contact</NavLink></li>
                                <li><NavLink to="/login">LOGIN</NavLink></li>
                                 

                            </ul>
                        </div>
                    </article>
                </nav>
            </section>
        </>
    ) 

};




export default Nav;



