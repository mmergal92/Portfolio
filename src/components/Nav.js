import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Sidebar from './Sidebar'
import { IconContext } from 'react-icons'
import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';
import Contact from '../pages/contact';

const Nav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#f5f3ec'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick = {showSidebar}/>
            </Link>
            <Link to="/" className="homenav">
                <h4>HOME</h4>
            </Link>
            <Link to="/projects" className="projectnav">
                <h4>PROJECTS</h4>
            </Link>
            <Link to="/about"className="aboutnav">
                <h4>ABOUT</h4>
            </Link>
            <Link to="/contact" className="contactnav">
                <h4>CONTACT</h4>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick = {showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {Sidebar.map((item, index) => {
                    return (
                        <li key = {index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </nav>
            </IconContext.Provider>
    </>
    )
}
export default Nav;