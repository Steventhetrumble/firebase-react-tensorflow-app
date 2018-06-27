import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'bulma/css/bulma.css';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyBg0hBM9hdEIJ9LUE5bj85SUIfne6vlSGY",
    authDomain: "fir-react-tensorflow.firebaseapp.com",
    databaseURL: "https://fir-react-tensorflow.firebaseio.com",
    projectId: "fir-react-tensorflow",
    storageBucket: "fir-react-tensorflow.appspot.com",
    messagingSenderId: "507913062066"
  };
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
