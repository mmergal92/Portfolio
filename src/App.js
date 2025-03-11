import './App.css';
//IMPORT ROUTE and COMPONENTS
import About from "./pages/about";
import Home from "./pages/home";
import newHome from "./pages/newhome";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import {Redirect} from 'react-router';
import {useState} from 'react';
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Resume from './pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import mergal_resume from './assets/Maria_Mergal_Resume.pdf'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Router>

     <Navigation />
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/newhome' component={newHome}/>
        
      <Footer />
     
      </Router>
    </div>
  );
}

export default App;

