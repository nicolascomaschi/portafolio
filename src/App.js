import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
          <div class="row">
            <div id="header" className="col-4 bg-dark">
                <div className="col-12">
                  <Navigation title="My Portfolio" />
                </div>
                <footer className="col-12">
                  <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item">F</li>
                    <li class="list-group-item">I</li>
                    <li class="list-group-item">T</li>
                    <li class="list-group-item">L</li>
                  </ul>
              </footer>
            </div>
            <div id="page" className="col-8">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
