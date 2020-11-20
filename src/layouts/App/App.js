import React from "react";
import './App.css';

import {Header} from "../../components/Header/Header";
import {Counter} from "../../components/Counter/Counter";
import {Steps} from "../../components/Steps/Steps";
import {AboutUs} from "../../components/AboutUs/AboutUs";
import {Help} from "../../components/Help/Help";
import {Contact} from "../../components/Contact/Contact";


function App () {
  return (
      <div className="App">
        <Header/>
          <Counter/>
          <Steps/>
          <AboutUs/>
          <Help/>
          <Contact/>
      </div>
  );

}

export default App;
