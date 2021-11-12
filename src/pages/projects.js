import React, {useState} from 'react';
import ImageProject from '../assets/ImageProject.png'
import brandingkits from '../assets/brandingkits.png'
import projecthippo from '../assets/projecthippo.png'

const Projects = (props) =>{
    return (
        <div className = "projects">
        <div className ="project-text">
            <h3>here is a look at some recent projects and work</h3>
        </div>
        <div className = "project1">
            <img className = "p1image" src={ImageProject} alt="Image of the Day Project"/>
            <h4>Project 1: Image of the Day</h4>
            <p><a href = "https://git.generalassemb.ly/mmergal92/project1/tree/master/MariaMergalProject1">Github</a></p>
            <p><a href = "https://pages.git.generalassemb.ly/mmergal92/Image_API_Project/">LiveSite</a></p>
        </div>
        <div className = "project2">
            <img className = "p2image" src={brandingkits} alt=" Branding Kits Project"/>
            <h4>Project 2: Branding Kits</h4>
            <p><a href = "https://github.com/mmergal92/project2m">Github</a></p>
            <p><a href = "https://git-project-brand-kit.herokuapp.com/">LiveSite</a></p>
        </div>
        <div className = "project3">
            <img className = "p3image" src={projecthippo} alt=" Stock Prediction Forum Project"/>    
            <h4>Project 3: Stock Prediction Forum App</h4>
            <p><a href = "https://github.com/mmergal92/Stock_Prediction_Forum_App/tree/dev">Github</a></p>
            <p><a href = "https://stock-prediction-forum-app.herokuapp.com/">LiveSite</a></p>
        </div>
        </div>
        );
    }
export default Projects;