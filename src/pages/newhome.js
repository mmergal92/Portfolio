import React, {useState, useEffect} from 'react';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"


const newHome = () => {


      return (
        <div className ="loremsite"  >
          <div className="main-content">
            <div className="left-lorem-container">
            
                <div className="riddims" >
                    <h1 className="title"></h1>
                </div>
                <div className="made-by">
                    <p className="credit">Segacy and Maria</p>
                </div>
            </div>
            <div className="right-lorem-container">
                
            
            </div>
        </div>
  
          
    </div>
      );

}

  
  export default newHome;
