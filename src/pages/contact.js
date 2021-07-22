import React from 'react';
import Portrait from '../assets/portrait.jpg'

const Contact = (props) =>{
    return (
    <div className="contact">
    <h1>CONTACT ME</h1>
    <img className = "portrait" src={Portrait} alt=" Portrat"/>
    <h4>Feel free to email me at mmergal92@gmail.com. </h4>
    <h4><a href="https://drive.google.com/file/d/1M4F1Pp3v5r1_tQJMPFZXoqMJ4EIoXSZZ/view">Resume</a></h4>
    </div>
    );
}
export default Contact;