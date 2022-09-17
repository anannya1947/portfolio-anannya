import React, { Component } from "react";
import './about.css';
import github_logo from './icons/github_logo.png';
import linkedin_logo from './icons/linkedin_logo.png';


class About extends Component {
    render() {
        return (
            <div>
                <p><b>More about me</b></p>
                <p>I am a final year Computer Science Engineering student. I have been exploring various domains of CSE like
                    basic programming(C, CPP, Java), Web development(React js), Android Studio, AWS, Data Analytics, Web 3.0, Integration
                    (Anypoint Studio) and have attempted learning by collaborating with people and making small projects. Just the idea of creating
                    and understanding something by making it from scratch is facinating to me. I am passionate about creating in general and have attempted to bring it to life
                    through my projects.
                    When I'm not coding, I enjoy painting in various mediums and exploring places :) </p>
                <div className="socials">
                    <a href="https://github.com/anannya1947"><img id="git" src={github_logo} alt="github-icon" /></a>
                    <a href="https://www.linkedin.com/in/anannya-mahapatra/"><img id="lin" src={linkedin_logo} alt="github-icon" /></a>
                </div>

            </div >
        )
    }
}

export default About;