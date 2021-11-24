import React, {useState} from 'react';
import homescreen from "../assets/homescreen.jpg"
import Projects from './projects';


const Home = (props) =>{
      return ( 
        <div className= 'home'>
          <div className = "about-top">
            <h1>maria mergal</h1>
          </div>
          <div className = "about-bottom">
            <p>maria is a full-stack software developer based in Brooklyn, N.Y.<br/>
            currently she is on the road travelling across the U.S.</p>
          </div>
          {/* <Projects /> */}
        </div>  
        )
}

export default Home;