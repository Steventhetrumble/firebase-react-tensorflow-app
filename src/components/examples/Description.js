import React, { Component } from 'react';
import '../../App.css';


class ExamplesDescription extends Component {
    constructor(props){
        super(props);
        this.state={
            projects: [],
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

    render() {
    return (
        <div className="Body">
        <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        
                        <div className="column is-12">
                            <h1 className="title is-2">
                                Training and Details
                            </h1>
                            <h2 className="subtitle is-4">
                                Simple example of training and displying the details
                            </h2>
                            <p className="has-text-centered"> maybe this will be usefull for later</p>

                            <p></p>
                        </div>
                    </div>
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
                                </div>                            
                            ))}
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </div>
    );
    }
}

export default ExamplesDescription;
