import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import './App.css';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
  render() {
    return (
      <Router> 
       <div className="App">
            <Navbar/>
            {/* <h1>My React app</h1> */}

           {/* <Landing/> */}
            <Route exact path= "/" component = {Landing} />
            <div className="container">
            <Route exact path = '/register' component ={ Register }/>
            <Route exact path = '/login' component ={ Login }/>
            </div>


           <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
