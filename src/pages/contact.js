import React from 'react';
import Portrait from '../assets/portrait.jpg'

const Contact = (props) =>{
    return (
    <div className="contact">
         <div className = "about-top">
            <h1>i’d love to hear from you!</h1>
        </div>
        <div className = "about-bottom">
            <p>Feel free to email me at <a href ="mailto:mergal.maria@gmail.com">mergal.maria@gmail.com</a>. </p>
        </div>
    </div>
    );
}
export default Contact;