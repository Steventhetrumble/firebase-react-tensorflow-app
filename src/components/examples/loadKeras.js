import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import PForm from './PredictForm/PForm';

import '../../App.css';


class LoadKeras extends Component {
  constructor(props){
    super(props);
    this.state={
      predictedOutput: 0,
      projects:[],
      inputs: Array.apply(null, Array(9)).map(Number.prototype.valueOf,0),
    };
  };
  async componentDidMount(){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/projects');
      const projects = await res.json();
      this.setState({
          projects
      });
    } catch (e) {
        console.log(e);
    }
   
  }
  handleChange(event) {
    this.setState({inputs: event.target.value})
  }
  async predictOutput(ModelPath){
    try{
      const model = await tf.loadModel(tf.io.browserHTTPRequest('http://127.0.0.1:8000/give/test/model.json'));

      const output = model.predict(tf.tensor([0.7,1.0,1.0,1.0,0.0,1.0,0.0,1.0,0.8], [1,9]) );
      const prediction = Array.from(output.dataSync())[0]
      // these values come from the original scaling --> will need to be stored in django model
      
      this.setState({predictedOutput: (prediction + 0.1159) / 0.0000036968 })
      console.log(this.state.predictedOutput)
      
    } catch (e) {
      console.log(e);
    }
  }
  


  render() {
    return(
    <div className="Body">
        <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-12">
                            <h1 className="title is-2">
                                Project Models on Django
                            </h1>
                            {this.state.projects.map(item => (
                                <div key={item.id}>

                                    <h2 className="subtitle is-4">{item.Name}</h2>
                                    <br></br>
                                    <p className="has-text-centered">{item.ModelDescription}</p>
                                    <br/>
                                    <a className="button is-primary is-outlined" onClick={() => this.predictOutput(item.model)}>Predict</a>
                                </div>                            
                            ))}  
                        </div>
                    </div> 
                    <PForm 
                      formChangedHandler={this.formChangedHandler}
                      predictOutput={this.predictOutput}
                      resetModel={this.resetModel}
                      firstInput={this.state.inputs[0]}
                      secondInput={this.state.inputs[1]}
                      thirdInput={this.state.inputs[2]}
                      fourthInput={this.state.inputs[3]}
                      fifthInput={this.state.inputs[4]}
                      sixthInput={this.state.inputs[5]}
                      seventhInput={this.state.inputs[6]}
                      eighthInput={this.state.inputs[7]}
                      ninthInput={this.state.inputs[8]}
                      predictedOutput={this.state.predictedOutput}/> 
                </div>
            </div>
        </div>
    );
  }
}


export default LoadKeras;
