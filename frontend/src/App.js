// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
 import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
    <Nav/>

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
