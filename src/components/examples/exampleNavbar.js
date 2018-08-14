import React, { Component } from 'react';


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


class ExampleNavbar extends Component {
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
                <nav className="navbar" >
                    <div className="container">
                        <div className={"navbar-menu " + this.state.active}>
                            <div className="navbar-end">
                                <div className="tabs is-centered">
                                    <ul>
                                        <NavItem path="/Examples" name="Description" aClass=""/>
                                        <NavItem path="/Examples/trainDisplay" name="TrainDisplay" aClass="" />
                                        <NavItem path="/Examples/LoadKeras" name="LoadKeras" aClass="" />                          
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

export default ExampleNavbar;
