import React, {useState} from 'react';
import ImageOfTheDay from '../assets/ImageOfTheDay.png'
import brandingkits from '../assets/brandingkits.png'
import projecthippo from '../assets/projecthippo.png'
import Sample_Site from '../assets/Sample_Site.png'

const Projects = (props) =>{
    return (
        <div className = "projects">
        <div className ="project-text">
            <h1>here is a look at some recent projects and work</h1>
        </div>
        <div className = "project1">
            <div className="p1text">
                <div className = "p1-top">
                    <h6>introductory project</h6>
                </div>
                <div className = "p1-bottom">
                    <h2 className = "p1-bottomheader">Image of the Day</h2><br/>
                    <p>This project connects to the Metropolitan Museum of Art to provide images of post-impressionist artists. There are 5 artists to choose from and each artist has an array of 10 random pantaings.</p><br/>
                    <h6><a href = "https://github.com/mmergal92/Image_Of_The_Day_Project" target="_blank" rel="noreferrer noopener" >Github</a><br/>
                    <a href = "https://pages.git.generalassemb.ly/mmergal92/Image_API_Project/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h6>
                </div>
            </div>
            <div className="p1-image">
                <img className = "p1image" src={ImageOfTheDay} alt="Image of the Day Project"/>
            </div>
        </div>
        <div className = "project2">
            <div className = "p2-image">
                <img className = "p2image" src={brandingkits} alt=" Branding Kits Project"/>
            </div>
            <div className="p2text">
                <div className = "p2-top">
                    <h6>full-stack project</h6>
                </div>
                <div className = "p2-bottom">
                    <h2 className = "p1-bottomheader">Branding Kits</h2><br/>
                    <p>This project allows brands to save their branding kits online. They can open the website and see their own branding colors, typography and images in a moodboard in one place.</p><br/>
                    <h6><a href = "https://github.com/mmergal92/Brand_Kits_Project" target="_blank" rel="noreferrer noopener" >Github</a><br/>
                    <a href = "https://brand-kits.herokuapp.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h6>
                </div>
            </div>
        </div>
        <div className = "project1">
            <div className="p2text">
                <div className = "p1-top">
                    <h6>group project</h6>
                </div>
                <div className = "p1-bottom">
                    <h2 className = "p1-bottomheader">Stock Prediction Forum App</h2><br/>
                    <p>This stock forum app provides insights into stock prices for several very active companies. Logged-in users can interact with the app and leave comments and predictions for other logged-in users to view, as well.</p><br/>
                    <h6><a href = "https://github.com/mmergal92/Stock_Prediction_Forum_App/tree/dev" target="_blank" rel="noreferrer noopener" >Github</a><br/>
                    <a href = "https://stock-prediction-forum-app.herokuapp.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h6>
                </div>
            </div>
            <div className = "p2-image">
                <img className = "p2image" src={projecthippo} alt=" Stock Prediction Forum Project"/>
            </div>
        </div>
        <div className = "project2">
            <div className = "p2-image">
                <img className = "p2image" src={Sample_Site} alt=" Branding Kits Project"/>
            </div>
            <div className="p2text">
                <div className = "p2-top">
                    <h6>self-initiated project</h6>
                </div>
                <div className = "p2-bottom">
                    <h2 className = "p1-bottomheader">Brand Agency Sample Site</h2><br/>
                    <p>This project was a site I recreated to work on animation design.</p><br/>
                    <h6><a href = "https://github.com/mmergal92/Sample_site" target="_blank" rel="noreferrer noopener" >Github</a><br/>
                    <a href = "https://mmergal92.github.io/Sample_site/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h6>
                </div>
            </div>
        </div>
        </div>
        );
    }
export default Projects;