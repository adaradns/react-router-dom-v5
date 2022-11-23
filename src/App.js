import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";



function App() {
  return (      
      <Switch>
        <Route exact path='/inicio'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
  );
}

export default App;
