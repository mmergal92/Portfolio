import React from 'react';
import About from '../pages/about';

const Footer = () =>{
    return (
    <div className="footer">
            <div className="footer-left">
                <h6>email: <a href="mailto:mergal.maria@gmail.com">mergal.maria@gmail.com</a></h6>
            </div>
            <div className="footer-center">
                <h6>&copy; maria mergal 2021</h6>
            </div>
            <div className ="footer-right">
                <h6>
                <a href="https://github.com/mmergal92" target="_blank" rel="noreferrer noopener" className="github"><i class="fab fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/mariamergal/" target="_blank" rel="noreferrer noopener" className="linkedin"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/pillsmergs/" target="_blank" rel="noreferrer noopener" className="instagram"><i class="fab fa-instagram"></i></a>
                </h6>
            </div>
    </div>
    )
}
export default Footer;