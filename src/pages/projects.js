import React, {useState} from 'react';
import image_ot_day from '../assets/image_ot_day.jpg'
import brandingkits from '../assets/brandingkits.png'
import stocks from '../assets/stocks.jpg'
import sample_site_AdobeCreativeCloudExpress from '../assets/sample_site_AdobeCreativeCloudExpress.mp4'
import sample_image from '../assets/sample_image.png'
import AAFSCfeatures from '../assets/AAFSCfeatures.jpg'
import ALportfolio from '../assets/ALportfolio.jpg'

const Projects = (props) =>{
    return (
        <>
        <div className ="project-text">
            <h1>CURRENT WORK</h1>
        </div>
        < div className= "project-page">
        <div className = "projects">
            <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://annaliselockhart.com/" target="_blank" rel="noreferrer noopener" ><img src={ALportfolio} alt="Annalise Lockhart Portfolio"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Annalise Lockhart Porfolio</h2><br/>
                    <h4>Together with the UX designer, we created a brand identity for a film director's portfolio that evokes emotion, builds a connection with her audience, and communicates her deeper purpose. After developing her brand identity, we created a website that is the digital representation of this brand. This is a WordPress website with custom coding that I developed. </h4>
                    <h5><a href = "https://annaliselockhart.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://www.aafscny.org/" target="_blank" rel="noreferrer noopener" ><img src={AAFSCfeatures} alt="Arab American Family Support Center"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Arab American Family Support Center Features</h2><br/>
                    <h4>I created several features for this existing WordPress website. I added the rotating banner found on the homepage. I also created a new blog layout and implemented a search and filter feature. These features all use Advanced Custom Fields so that the client can update and edit internally, as needed.</h4>
                    <h5><a href = "https://www.aafscny.org/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className = "individual">
                <div className="individual-image-container sample-image">
                <a href = "https://mmergal92.github.io/Sample_site/" target="_blank" rel="noreferrer noopener" >
                        <video autoPlay loop muted>
                        <source src={sample_site_AdobeCreativeCloudExpress} type="video/mp4" />
                        </video>
                        </a>
                </div>
                <div className = "individual-content">
                    <h2 >Brand Agency Sample Site</h2><br/>
                    <h4>This project was a site I recreated to work on animation design.</h4>
                    <h5><a href = "https://github.com/mmergal92/Sample_site" target="_blank" rel="noreferrer noopener" >Github</a>&nbsp;&nbsp;&nbsp;
                    <a href = "https://mmergal92.github.io/Sample_site/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://brand-kits.herokuapp.com/" target="_blank" rel="noreferrer noopener" ><img src={brandingkits} alt=" Branding Kits Project"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Branding Kits Agency App</h2><br/>
                    <h4>This project allows brands to save their branding kits online. They can open the website and see their own branding colors, typography and images in a moodboard in one place.</h4>
                    <h5><a href = "https://github.com/mmergal92/Brand_Kits_Project" target="_blank" rel="noreferrer noopener" >Github</a>&nbsp;&nbsp;&nbsp;
                    <a href = "https://brand-kits.herokuapp.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className = "individual">
                <div className="individual-image-container">
                <a href = "https://stock-prediction-forum-app.herokuapp.com/" target="_blank" rel="noreferrer noopener" ><img src={stocks} alt=" Stock Prediction Forum Project"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Stock Prediction Forum App</h2><br/>
                    <h4>This stock forum app provides insights into stock prices for several very active companies. Logged-in users can interact with the app and leave comments and predictions for other logged-in users to view, as well.</h4>
                    <h5><a href = "https://github.com/mmergal92/Stock_Prediction_Forum_App/tree/dev" target="_blank" rel="noreferrer noopener" >Github</a>&nbsp;&nbsp;&nbsp;
                    <a href = "https://stock-prediction-forum-app.herokuapp.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className = "individual">
                 <div className="individual-image-container">    
                 <a href = "https://pages.git.generalassemb.ly/mmergal92/Image_API_Project/" target="_blank" rel="noreferrer noopener" ><img src={image_ot_day} alt="Image of the Day Project"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Image of the Day App</h2><br/>
                    <h4>This project connects to the Metropolitan Museum of Art to provide images of post-impressionist artists. There are 5 artists to choose from and each artist has an array of 10 random pantaings.</h4>
                    <h5><a href = "https://github.com/mmergal92/Image_Of_The_Day_Project" target="_blank" rel="noreferrer noopener" >Github</a>&nbsp;&nbsp;&nbsp;
                    <a href = "https://pages.git.generalassemb.ly/mmergal92/Image_API_Project/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>    
                </div>
    </div>
    </div>
    </>
        );
    }
export default Projects;