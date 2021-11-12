import React, {useState} from 'react';
import homescreen from "../assets/homescreen.jpg"
import Projects from './projects';


const Home = (props) =>{
      return ( 
        <div className= 'home'>
          <div className = 'hero'>
          <h1>maria mergal</h1>
          <h5>mmaria is a full-stack software developer based in brooklyn, ny  
<br/>
<br/>
<br/>
currently she is on the road travelling across the U.S.
</h5>
          {/* <img className = "welcomeImage" src={homescreen} alt=" Intro Image"/> */}
          </div>
          {/* <Projects /> */}
        </div>  
        )
}

export default Home;