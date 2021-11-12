import React from 'react';
import Portrait from '../assets/portrait.jpg'

const Contact = (props) =>{
    return (
    <div className="contact">
    <h1>i’d love to hear from you!</h1>
    {/* <img className = "portrait" src={Portrait} alt=" Portrat"/> */}
    <h5>Feel free to email me at mmergal92@gmail.com. </h5>
    <h5><a href="https://drive.google.com/file/d/1M4F1Pp3v5r1_tQJMPFZXoqMJ4EIoXSZZ/view">Resume</a></h5>
    </div>
    );
}
export default Contact;