import './App.css';
//IMPORT ROUTE and COMPONENTS
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Nav from "./components/Nav"
import {Redirect} from 'react-router';
import {useState} from 'react';
import Footer from "./components/footer";
import Resume from './pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import mergal_resume from './assets/mergal_resume.pdf'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  const [bcolor, changeBcolor] = useState("#FFFFF4");

  return (
    <div className="App" style ={{background: bcolor }}>
      <Router>
      <div className="navbar">
        <div className="leftnav">
        <Link to="/" className="homenav" onClick={() => changeBcolor("#FFFFF4")}>
                <h6>MARIA MERGAL</h6>
            </Link>
        </div>
          <div className="rightnav">
          <Link to="/projects" className="projectnav" onClick={() => changeBcolor("#8C967A")}>
                <h6>WORK</h6>
            </Link>
          </div>
        </div>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/>
            <Footer />
      </Router>
    </div>
  );
}

export default App;

