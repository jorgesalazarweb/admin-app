import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signin, Signup } from '../auth';
import { Home } from '../Layout';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'component={Home} />
          <Route exact path='/signin'component={Signin} />
          <Route exact path='/signup'component={Signup} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;