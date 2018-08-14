import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../App.css';
import ExampleNavbar from './exampleNavbar'
import TrainDisplay from './trainDisplay'
import LoadKeras from './loadKeras'
import ExamplesDescription from './Description'

class Examples extends Component {
 
  render() {
    return (
      <div className="Body">
        <div className="hero-body">
        
                <div className="container has-text-centered">
                <ExampleNavbar/>
                    <div className="columns is-vcentered">
                        <Route exact path="/Examples" component={ExamplesDescription}/>
                        <Route path="/Examples/trainDisplay" component={TrainDisplay}/>
                        <Route path="/Examples/LoadKeras" component={LoadKeras}/>
                    </div>
                </div>
          </div>
       
      </div>
    );
  }
}

export default Examples;
