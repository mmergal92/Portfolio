import React, {useState} from 'react';
import ImageOfTheDay from '../assets/ImageOfTheDay.png'
import brandingkits from '../assets/brandingkits.png'
import projecthippo from '../assets/projecthippo.png'
import Sample_Site from '../assets/Sample_Site.png'

const Projects = (props) =>{
    return (
        <div className = "projects">
        <div className ="project-text">
            <h3>here is a look at some recent projects and work</h3>
            {/* <hr
                style={{
                    color: "black",
                    backgroundColor: "red",
                    height: 5,
                    borderColor: "orange"
                    }}
             /> */}
        </div>
        <div className = "project1">
            <div className="p1text">
                <div className = "p1-top">
                    <p>self-initiated project</p>
                </div>
                <div className = "p1-bottom">
                    <h6 className = "p1-bottomheader">Image of the Day</h6><br/>
                    <p>This project connects to the Metropolitan Museum of Art to provide images of post-impressionist artists. There are 5 artists to choose from and each artist has an array of 10 random pantaings.</p><br/>
                    <p><a href = "https://git.generalassemb.ly/mmergal92/project1/tree/master/MariaMergalProject1" target="_blank" rel="noreferrer noopener" >Github</a></p>
                    <p><a href = "https://pages.git.generalassemb.ly/mmergal92/Image_API_Project/" target="_blank" rel="noreferrer noopener" >LiveSite</a></p>
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
                    <p>self-initiated project</p>
                </div>
                <div className = "p2-bottom">
                    <h6 className = "p1-bottomheader">Branding Kits</h6><br/>
                    <p>This project connects to the Metropolitan Museum of Art to provide images of post-impressionist artists. There are 5 artists to choose from and each artist has an array of 10 random pantaings.</p><br/>
                    <p><a href = "https://github.com/mmergal92/project2m" target="_blank" rel="noreferrer noopener" >Github</a></p>
                    <p><a href = "https://brand-kits.herokuapp.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></p>
                </div>
            </div>
        </div>
        <div className = "project1">
            <div className="p2text">
                <div className = "p1-top">
                    <p>group project</p>
                </div>
                <div className = "p1-bottom">
                    <h6 className = "p1-bottomheader">Stock Prediction Forum App</h6><br/>
                    <p>This project connects to the Metropolitan Museum of Art to provide images of post-impressionist artists. There are 5 artists to choose from and each artist has an array of 10 random pantaings.</p><br/>
                    <p><a href = "https://github.com/mmergal92/Stock_Prediction_Forum_App/tree/dev" target="_blank" rel="noreferrer noopener" >Github</a></p>
                    <p><a href = "https://stock-prediction-forum-app.herokuapp.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></p>
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
                    <p>self-initiated project</p>
                </div>
                <div className = "p2-bottom">
                    <h6 className = "p1-bottomheader">Brand Agency Sample Site</h6><br/>
                    <p>This project connects to the Metropolitan Museum of Art to provide images of post-impressionist artists. There are 5 artists to choose from and each artist has an array of 10 random pantaings.</p><br/>
                    <p><a href = "https://github.com/mmergal92/Sample_site" target="_blank" rel="noreferrer noopener" >Github</a></p>
                    <p><a href = "https://mmergal92.github.io/Sample_site/" target="_blank" rel="noreferrer noopener" >LiveSite</a></p>
                </div>
            </div>
        </div>
        </div>
        );
    }
export default Projects;