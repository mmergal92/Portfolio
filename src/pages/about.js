import React from 'react';
import { AiTwotoneHtml5 } from 'react-icons/ai';

const About = (props) =>{
    return (
    <div className="about">
        <div className = "about-top">
            <h1>all about me</h1>
        </div>
        <div className = "about-bottom">
            <p>I'm a full-stack software developer based in Brooklyn, N.Y. and currently on the road traveling across the U.S.<br/><br/>
            I am passionate about helping others build their brands and create well designed, interactive websites that keep their audience coming back for more.<br/>
            My goal is to use technology as a tool to build interpersonal experiences and connect the world by building together.
            <br/><br/>
            Skills: JavaScript, React.js, JQuery, Python, Django, HTML, CSS, EJS, Bootstrap, Heroku, Express, Netlify, Node.js,
MongoDB, Mongoose, Git, GitHub, Adobe Photoshop, Adobe Illustrator, and Figma.
            </p>
        </div>
    </div>
    )
}
export default About;