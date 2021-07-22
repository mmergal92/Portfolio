import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Switch} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Nav from "./components/Nav"
import {Redirect} from 'react-router';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Route>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      </Route>
    </div>
  );
}

export default App;

