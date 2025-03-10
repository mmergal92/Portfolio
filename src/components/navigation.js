import React from 'react';
import Home from '../pages/home';
import Projects from '../pages/projects';

const Navigation = () =>{
    return (
<div className="navbar">
<div className="leftnav">
    <a href="https://www.mariamergal.dev" className="homenav"><h6>MARIA MERGAL</h6></a> 
</div>
  <div className="rightnav">
    <a href="https://www.mariamergal.dev/projects" className="projectnav"><h6>WORK</h6></a> 
  </div>
</div>
    )
}
export default Navigation;
