import React, {useState} from 'react';
import Projects from './projects';

const Home = (props) =>{

      return ( 
        <div className= 'home'>
          <div className = "home-top">
            <h1>SOFTWARE 
              <br/>
              ENGINEER
            </h1>
          </div>
          <div className = "home-bottom">
            <p>maria is a full-stack software developer based in astoria, ny<br/>
            co-founder of <a href="https://itsproof.co" target="_blank">Proof Agency</a></p>
          </div>
        </div>  
        )
}

export default Home;