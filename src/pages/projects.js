import React, {useState} from 'react';
// import image_ot_day from '../assets/image_ot_day.webp'
// import brandingkits from '../assets/brandingkits.webp'
// import stocks from '../assets/stocks.webp'
import sample_site_AdobeCreativeCloudExpress from '../assets/sample_site_AdobeCreativeCloudExpress.mp4'
// import sample_image from '../assets/sample_image.webp'
import AAFSCfeatures from '../assets/AAFSCfeatures.jpg'
import ALportfolio from '../assets/annalise.webm'
import fts from '../assets/fts.webp'
import mapping from '../assets/enclaves.webm'
import wmjordanvideo from '../assets/wmjordanvideo.mp4'
import vavideo from '../assets/vavideo.mp4'
import academic from '../assets/academic.mp4'

const Projects = (props) =>{
    return (
        <>
        <div className ="project-text">
            <h1>RECENT WORK</h1>
        </div>
        <div className= "project-page">
        <div className = "projects">
            <div className="individual">
                <div className="individual-image-container">
                <a href = "https://academiccme.com/" target="_blank" rel="noreferrer noopener" >
                    <video autoPlay loop muted playsInline preload="none" loading="lazy">
                        <source src={academic} type="video/mp4" />
                        </video>
                        </a>
                </div>
                <div className = "individual-content">
                    <h2>AcademicCME <br/>Website Redesign</h2><br/>
                    <h4>AcademicCME provides continuing medical education to medical professionals around the world. Recognizing the need to enhance user experience, strengthen brand presence within the educational community, and drive user acquisition and retention, AcademicCME partnered with our team to develop a comprehensive digital solution. Our team created an updated brand that promoted user trust and transformed their site by building a custom user management system and a robust CME course creation platform.</h4>
                    <h5><a href = "https://academiccme.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className = "individual">
                <div className="individual-image-container">
                <a href = "https://wmjordan.com/" target="_blank" rel="noreferrer noopener" >
                    <video autoPlay loop muted playsInline preload="none" loading="lazy">
                        <source src={wmjordanvideo} type="video/mp4" />
                        </video>
                        </a>
                </div>
                <div className = "individual-content">
                    <h2>W.M. Jordan <br/>Website Redesign</h2><br/>
                    <h4>W.M. Jordan Company is a leading construction and real estate development firm serving Virginia, North Carolina, and South Carolina. Committed to quality and excellence, the company supports projects from concept to completion in diverse markets across the region and adds value to every project through quality workmanship, efficiency, and a positive attitude. Our team was brought on to future-proof W.M. Jordan and to create a new website that not only followed current best practices and reflected the growth of the company, but also allowed for scalability.</h4>
                    <h5><a href = "https://wmjordan.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>    
            </div>
            <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://focaltherapy.org/" target="_blank" rel="noreferrer noopener" ><img src={fts} alt="Focal Therapy Society website"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Focal Therapy Society <br/>Website Redesign</h2><br/>
                    <h4>The Focal Therapy Society is an educational initiative that focuses on advancing minimally invasive cancer treatments to destroy prostate cancer while preventing a man’s continence and potency. Through annual conferences and distinguished faculty, the society fosters a forward-thinking community that is dedicated to improving patient care with the latest techniques. Our team partnered with FTS to create a more comprehensive online platform for their society members and transform the website into a tool that can be used to showcase events, learner resources, and technological advances for the society.</h4>
                    <h5><a href = "https://focaltherapy.org/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className="individual">
                <div className="individual-image-container">
                <a href = "https://www.visitaugustacounty.com/" target="_blank" rel="noreferrer noopener" >
                    <video autoPlay loop muted playsInline preload="none" loading="lazy">
                        <source src={vavideo} type="video/mp4" />
                        </video>
                        </a>
                </div>
                <div className = "individual-content">
                    <h2>Visit Augusta <br/>Website Redesign</h2><br/>
                    <h4>Visit Augusta County is a tourism company that focuses on attracting visitors to Augusta County, located in Virginia's Shenandoah Valley. It’s a destination known for its outdoor recreation, local farms, historical landmarks, and scenic beauty. Our team redesigned Augusta County’s website to elevate its tourism appeal and highlight the natural beauty along with its other attractions and make it easier for visitors to plan their perfect getaway.</h4>
                    <h5><a href = "https://www.visitaugustacounty.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://mariam100.sg-host.com/" target="_blank" rel="noreferrer noopener" >
                    <video autoPlay loop muted playsInline preload="none" loading="lazy">
                        <source src={mapping} type="video/mp4" />
                        </video>
                    </a>
                </div>
                <div className = "individual-content">
                    <h2>Mapping Communities <br/>Microsite Build</h2><br/>
                    <h4>This project aims to study and map the histories of two Black enclaves in New York City—Seneca Village and Weeksville— from the early 1800s to the mid 1950s, highlighting their cultural, social, and historical significance. By examining public records, historical contexts, and racial dynamics, it seeks to create educational resources that amplify silenced voices and deepen understanding of Black communities' contributions to NYC's development.</h4>
                    <h5><a href = "https://mariam100.sg-host.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://annaliselockhart.com/" target="_blank" rel="noreferrer noopener" >
                    <video autoPlay loop muted playsInline preload="none" loading="lazy">
                        <source src={ALportfolio} type="video/mp4" />
                        </video>
                    </a>
                </div>
                <div className = "individual-content">
                    <h2>Annalise Lockhart <br/>Porfolio Website</h2><br/>
                    <h4>Together with the UX designer, we created a brand identity for a film director's portfolio that evokes emotion, builds a connection with her audience, and communicates her deeper purpose. After developing her brand identity, we created a website that is the digital representation of this brand. This is a WordPress website with custom coding that I developed. </h4>
                    <h5><a href = "https://annaliselockhart.com/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div>
            {/* <div className="individual">
                <div className="individual-image-container">
                    <a href = "https://www.aafscny.org/" target="_blank" rel="noreferrer noopener" ><img src={AAFSCfeatures} alt="Arab American Family Support Center"/></a>
                </div>
                <div className = "individual-content">
                    <h2>Arab American Family Support Center Features</h2><br/>
                    <h4>I created several features for this existing WordPress website. I added the rotating banner found on the homepage. I also created a new blog layout and implemented a search and filter feature. These features all use Advanced Custom Fields so that the client can update and edit internally, as needed.</h4>
                    <h5><a href = "https://www.aafscny.org/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div> */}
            {/* <div className = "individual">
                <div className="individual-image-container sample-image">
                <a href = "https://mmergal92.github.io/Sample_site/" target="_blank" rel="noreferrer noopener" >
                        <video autoPlay loop muted>
                        <source src={sample_site_AdobeCreativeCloudExpress} type="video/mp4" />
                        </video>
                        </a>
                </div>
                <div className = "individual-content">
                    <h2 >Brand Agency <br/>Sample Site</h2><br/>
                    <h4>This project was a site I recreated to work on animation design.</h4>
                    <h5><a href = "https://github.com/mmergal92/Sample_site" target="_blank" rel="noreferrer noopener" >Github</a>&nbsp;&nbsp;&nbsp;
                    <a href = "https://mmergal92.github.io/Sample_site/" target="_blank" rel="noreferrer noopener" >LiveSite</a></h5>
                </div>
            </div> */}
        </div>
    </div>
    </>
        );
    }
export default Projects;