import React from "react";
import './App.css';

import{Home} from "../../components/Home/Home";
import {Register} from "../../components/Register/Register";
import {Login} from "../../components/Login/Login";


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App () {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
              </Switch>
          </Router>

      </div>
  );

}

export default App;
