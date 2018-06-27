import React, { Component } from 'react';
import logo from './images/tictac.png'


const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search;
    const liClassName = (props.path === pageURI) ? "is-active" : "";
    return(
        <li className= {liClassName}>
            <a href= {props.path} className={props.aClass}>
                {props.name} bruh
            </a>

        </li>
            
    );
}


class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="" href="../"><img src={logo} alt="Logo" width = "50" height="50" ></img></a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul>
                                        <NavItem path="/Home" name="Home" aClass="" />
                                        <NavItem path="/AltBody" name="Examples" aClass="" />
                                        <NavItem path="/Game" name="Game" aClass="" />
                                        <NavItem path="#%" name="Team" aClass="" />                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
      </div>
    );
  }
}

export default Navbar;
