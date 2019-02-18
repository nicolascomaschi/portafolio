import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
          <div class="row">
            <div id="header" className="col-4">
                <div id="nav" className="col-12">
                  <div id="img-div" className="row justify-content-end">
                      <img src="/img/avatar.jpg" className="" alt="avatar" />
                    </div>
                    <h3>Hi World!</h3>
                    <p>Ligula scelerisque justo sem accumsan diam quis</p>
                </div>
                <footer className="row justify-content-center">
                  <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item"><a href="" className="icon fab fa-twitter"></a></li>
                    <li class="list-group-item"><a href="" className="icon fab fa-github"></a></li>
                    <li class="list-group-item"><a href="" className="icon fab fa-instagram"></a></li>
                    <li class="list-group-item"><a href="" className="icon fas fa-envelope"></a></li>
                  </ul>
              </footer>
            </div>
            <div id="page" className="col-8">
              <section id="one">
                  <div class="major">
                    <h2>Ipsum lorem dolor aliquam ante commodo<br/> magna sed accumsan arcu neque.</h2>
                  </div>
                  <p className="p-page">Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                  <ul className="actions">
                    <li><a href="#" className="a-page">Learn More</a></li>
                  </ul>
					    </section>
              <section id="two">
                  <div class="major">
                    <h2>Ipsum lorem dolor aliquam ante commodo<br/> magna sed accumsan arcu neque.</h2>
                  </div>
                  <p className="p-page">Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                  <ul className="actions">
                    <li><a href="#" className="a-page">Learn More</a></li>
                  </ul>
					    </section>
              <section id="three">
                  <div class="major">
                    <h2>Ipsum lorem dolor aliquam ante commodo<br/> magna sed accumsan arcu neque.</h2>
                  </div>
                  <p className="p-page">Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                  <ul className="actions">
                    <li><a href="#" className="a-page">Learn More</a></li>
                  </ul>
					    </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
