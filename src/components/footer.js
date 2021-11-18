import React from 'react';
import About from '../pages/about';

const Footer = () =>{
    return (
    <div className="footer">
            <div className="footer-left">
                <p>FOR ALL INQUIRIES</p><br/>
                <p><a href="mailto:maria@mariamergal.com">maria@mariamergal.com</a></p>
            </div>
            <div className="footer-center">
                <br/>
                <p>&copy; maria mergal 2021</p>
            </div>
            <div className ="footer-right">
                <p>SOCIALS</p><br/>
                <a href="https://github.com/mmergal92" target="_blank" rel="noreferrer noopener" className="github"><i class="fab fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/mariamergal/" target="_blank" rel="noreferrer noopener" className="linkedin"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/pillsmergs/" target="_blank" rel="noreferrer noopener" className="instagram"><i class="fab fa-instagram"></i></a>
            </div>
    </div>
    )
}
export default Footer;