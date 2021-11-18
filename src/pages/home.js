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
            <h5>mmaria is a full-stack software developer based in brooklyn, ny  </h5>
            <h5>currently she is on the road travelling across the U.S.</h5>
          </div>
          {/* <Projects /> */}
        </div>  
        )
}

export default Home;