import React, {useState} from 'react';
import homescreen from "../assets/homescreen.jpg"

const Home = (props) =>{
      return ( 
        <div className= 'home'>
          <div className = 'hero'>
          <h2>Maria Mergal</h2>
          <h4>Full-Stack Software Developer</h4>
          <img className = "welcomeImage" src={homescreen} alt=" Intro Image"/>
          </div>
          <div className = "background">
          <h4>Background</h4>  
          <h5>I'm a full stack software developer based in Brooklyn, NY. </h5>
          </div>
        </div>  
        )
}

export default Home;