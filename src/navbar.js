import React, { Component } from 'react';
import logo from './images/tictac.png'


const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search;
    const liClassName = (pageURI.match(props.path) != null) ? "is-active" : "";
    return(
        <li className= {liClassName}>
            <a href= {props.path} className={props.aClass}>
                {props.name} bruh
            </a>
        </li>   
    );
}


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            hamburger: true,
            active: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            hamburger: !prevState.hamburger
            
        }));
        if(this.state.hamburger){
            this.setState({
                active: "is-active"
            });
        }
        else{
            this.setState({
                active: ""
            })
        }
    }
    
       
  render() {
    return (
        <div className="Navbar">
            <div className="hero-head">
                <nav className="navbar" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="" href="../"><img src={logo} alt="Logo" width = "50" height="50" ></img></a>
                            <a onClick={this.handleClick} role="button" className={"navbar-burger burger " + this.state.active.toString()} >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        <div id="navbarMenu" className={"navbar-menu " + this.state.active}>
                            <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul>
                                        <NavItem path="/Home" name="Home" aClass="" />
                                        <NavItem path="/Examples" name="Examples" aClass="" />
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
