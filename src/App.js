import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navbar from './navbar';
import FooterData from './footerData';
import Body from './body';
import AltBody from './altBody';
import Game from './tictac';
import Footer from './footer';


class App extends Component {
  componentDidMount(){
    const pageURI = window.location.pathname+window.location.search;
    if('/' === pageURI){
      window.location = '/Home'
    }
  }
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight is-default is-bold">
          <Navbar />
          {/* this next section loads the middle of the page */}
           
            <Route path="/Home" component={Body}/>
            <Route path="/AltBody" component={AltBody}/>
            <Route path="/Game" component={Game}/>

          
          {/* this section is for anything from the Database we need to display
              for testing purposes */}
            <div className="container">
              <h1 className="title is-2"> Database Info </h1>
              <hr/>
              <FooterData />
              <hr/>
              <Footer />
            </div>
        </section>
      </div>
    );
  }
}

export default App;
