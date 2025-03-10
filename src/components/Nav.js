// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
// // import * as FaIcons from 'react-icons/fa';
// // import * as AiIcons from 'react-icons/ai';
// // import Sidebar from './Sidebar'
// import { IconContext } from 'react-icons'
// import Home from '../pages/home';
// import Projects from '../pages/projects';
// import About from '../pages/about';
// import Contact from '../pages/contact';
// import mergal_resume from '../assets/mergal_resume.pdf';
import React from 'react';
import home from '../pages/home';
import projects from '../pages/projects';

const Nav = () =>{
    return (
<div className="navbar">
<div className="leftnav">
    <a href={home} className="homenav"><h6>MARIA MERGAL</h6></a> 
</div>
  <div className="rightnav">
    <a href={projects} className="projectnav"><h6>WORK</h6></a> 
  </div>
</div>
    )
}
export default Nav;

// const Nav = () => {
//     // const [sidebar, setSidebar] = useState(false);

//     // const showSidebar = () => setSidebar(!sidebar);

//     return (
//         <>
//         {/* <IconContext.Provider value={{color: '#624EA1'}}> */}
//         <div className="navbar">
//             {/* <Link to="#" className="menu-bars">
//                 <FaIcons.FaGripLines onClick = {showSidebar}/>
//             </Link> */}
//         <div className="leftnav">
//         <Link to="/" className="homenav">
//                 <h6>MARIA MERGAL</h6>
//             </Link>
    
//         </div>
//           <div className="rightnav">
//           <Link to="/projects" className="projectnav">
//                 <h6>WORK</h6>
//             </Link>
//           </div>
//         </div>
//         {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
//             {/* <ul className='nav-menu-items' onClick = {showSidebar}>
//                 <li className='navbar-toggle'>
//                     <Link to="#" className='menu-bars'>
//                         <AiIcons.AiOutlineClose />
//                     </Link>
//                 </li>
//                 {Sidebar.map((item, index) => {
//                     return (
//                         <li key = {index} className={item.cName}>
//                             <Link to={item.path}>
//                                 {item.icon}
//                                 <span>{item.title}</span>
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//             </nav>
//             </IconContext.Provider> */}
//     </>
//     )
// }
// export default Nav;