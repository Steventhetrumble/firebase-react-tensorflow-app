import React, { Component } from 'react';
import './App.css';


class Body extends Component {
 
  render() {
    return (
      <div className="Body">
        <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-5">
                            <figure className="image is-4by3"><img src="https://picsum.photos/800/600/?random" alt="Description"></img></figure>
                        </div>
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-2">
                                Superhero Scaffolding
                            </h1>
                            <h2 className="subtitle is-4">
                                Let this cover page describe a product or service.
                            </h2>
                            <br></br>
                            <p className="has-text-centered"></p>
                                <a className="button is-medium is-info is-outlined">
                    Learn more
                  </a>
                            <p></p>
                        </div>
                    </div>
                </div>
          </div>
       
      </div>
    );
  }
}

export default Body;
