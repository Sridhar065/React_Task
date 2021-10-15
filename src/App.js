
import React, { lazy, Suspense } from 'react';
// import logo from './logo.svg';  
import './App.css';
import Student_form from './Reg';
import Tables from './ViewList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SecureLS from 'secure-ls';
import storage from './helpers/storageHelper';




class App extends React.Component {
  constructor(prpos) {
    super(prpos)
    this.storageClient = new SecureLS({ encodingType: 'aes' });
  }


  render() {
    return (
      <Router>
        <div>

          <div>
            <ul className="namess" >
              <li className="lin2">
                <Link to={'/'}>Regsister</Link>
              </li>
              <li className="lin3">
                <Link to={'/ViewList'}>ViewList</Link>
              </li>
            </ul>
          </div>
          <br />

          <Switch>

            <Route path='/' component={Student_form} />
            <Route path='/ViewList' component={Tables} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
