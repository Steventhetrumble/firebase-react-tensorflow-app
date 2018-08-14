import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';



class FooterData extends Component {
  constructor(props){
    super(props);
    this.ref = firebase.firestore().collection("react").doc("speed");
    this.unsubscribe = null;

    this.state={
      speed1: 10,
      speed2: 15,
      todos: [], 
    };
  };


  async componentDidMount() {
     this.ref.get().then((doc) => {
      if(doc.exists){
        let data = doc.data().speed;
        this.setState({speed2: data});
      }
      else {
        this.setState({speed2: null});

      }
    });

    this.unsubscribe = this.ref.onSnapshot(this.oncollectionupdate)

    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
    
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  oncollectionupdate = (querySnapshot) => {
    const data = querySnapshot.data().speed;
    this.setState({speed1: data});
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns  is-multiline">
            <div className="column is-12 is-centered">
              <h1 className="subtitle is-3">Table for styling example</h1>
              <hr/>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th><abbr title="Position">Pos</abbr></th>
                    <th>Team</th>
                    <th><abbr title="Played">Pld</abbr></th>
                    <th><abbr title="Won">W</abbr></th>
                    <th><abbr title="Drawn">D</abbr></th>
                    <th><abbr title="Lost">L</abbr></th>
                    <th><abbr title="Goals for">GF</abbr></th>
                    <th><abbr title="Goals against">GA</abbr></th>
                    <th><abbr title="Goal difference">GD</abbr></th>
                    <th><abbr title="Points">Pts</abbr></th>
                    <th>Qualification or relegation</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th><abbr title="Position">Pos</abbr></th>
                    <th>Team</th>
                    <th><abbr title="Played">Pld</abbr></th>
                    <th><abbr title="Won">W</abbr></th>
                    <th><abbr title="Drawn">D</abbr></th>
                    <th><abbr title="Lost">L</abbr></th>
                    <th><abbr title="Goals for">GF</abbr></th>
                    <th><abbr title="Goals against">GA</abbr></th>
                    <th><abbr title="Goal difference">GD</abbr></th>
                    <th><abbr title="Points">Pts</abbr></th>
                    <th>Qualification or relegation</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                    </td>
                    <td>38</td>
                    <td>23</td>
                    <td>12</td>
                    <td>3</td>
                    <td>68</td>
                    <td>36</td>
                    <td>+32</td>
                    <td>81</td>
                    <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
                    <td>38</td>
                    <td>20</td>
                    <td>11</td>
                    <td>7</td>
                    <td>65</td>
                    <td>36</td>
                    <td>+29</td>
                    <td>71</td>
                    <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                    <td>38</td>
                    <td>19</td>
                    <td>13</td>
                    <td>6</td>
                    <td>69</td>
                    <td>35</td>
                    <td>+34</td>
                    <td>70</td>
                    <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                  </tr>
                  <tr className="is-selected">
                    <th>4</th>
                    <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
                    <td>38</td>
                    <td>19</td>
                    <td>9</td>
                    <td>10</td>
                    <td>71</td>
                    <td>41</td>
                    <td>+30</td>
                    <td>66</td>
                    <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
                  </tr>
                
              
                
                </tbody>
                
              </table>
            </div>
            <div className="column is-12">
              <h1 className="subtitle is-3">Firebase imported Data</h1>
              <hr/>
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                  <tr><th>Speed</th></tr> 

                </thead>
                <tbody>
                  {/* this spee will update when firebase is changed */}
                  <tr><td>{this.state.speed1}</td></tr>
                  {/* this speed will update when the page is reloaded */}
                  <tr><td>{this.state.speed2}</td></tr>
                </tbody>
              </table>
            </div>
            <div className="column is-12 is-centered">
              <h1 className="subtitle is-3">Api from django</h1>
              <hr/>
              {/* read the json file and map the objects */}
            {this.state.todos.map(item => (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <span>{item.description}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
    </div>
       
    );
  }
}

export default FooterData;
