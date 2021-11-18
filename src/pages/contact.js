import React from 'react';
import Portrait from '../assets/portrait.jpg'

const Contact = (props) =>{
    return (
    <div className="contact">
         <div className = "about-top">
            <h1>i’d love to hear from you!</h1>
        </div>
        <div className = "about-bottom">
            <h5>Feel free to email me at <a href ="mailto:maria@mariamergal.com">maria@mariamergal.com</a>. </h5>
        </div>
    </div>
    );
}
export default Contact;