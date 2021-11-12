import React from 'react';
import About from '../pages/about';

const Footer = () =>{
    return (
    <div className="footer">
        <div className = "footer-container">
            <div className="footer-left">
                <h6>FOR ALL INQUIRIES</h6><br/>
                <h6>maria@mariamergal.com</h6>
            </div>
            <div className="footer-center">
                <br/>
                <h6>&copy; maria mergal 2021</h6>
            </div>
            <div className ="footer-right">
                <h6>SOCIALS</h6><br/>
                <a href="https://github.com/mmergal92" className="github"><i class="fab fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/mariamergal/" className="linkedin"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/pillsmergs/" className="instagram"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    )
}
export default Footer;