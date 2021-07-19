import React from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
