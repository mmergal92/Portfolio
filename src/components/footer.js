import React from 'react';
import About from '../pages/about';
import mergal_resume from "../assets/Maria_resume.pdf"

const Footer = () =>{
    return (
    <div className="footer">
            <div className="footer-left">
                <a href="mailto:mergal.maria@gmail.com" target="_blank" rel="noreferrer noopener"><h6>CONTACT ME</h6></a>
            </div>
            <div className ="footer-right">
                <a href="https://github.com/mmergal92" target="_blank" rel="noreferrer noopener"><h6>GITHUB</h6></a> 
                <a href="https://www.linkedin.com/in/mariamergal/" target="_blank" rel="noreferrer noopener"><h6>LINKEDIN</h6></a> 
                <a href="https://www.instagram.com/pillsmergs/" target="_blank" rel="noreferrer noopener"><h6>INSTAGRAM</h6></a>
                <a href={mergal_resume} target="_blank" rel="noreferrer noopener"><h6> RESUME</h6></a>
            </div>
    </div>
    )
}
export default Footer;