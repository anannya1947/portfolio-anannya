import React, { Component } from "react";
import './home.css';
import woman_illustration from "./woman_illustration.jpg"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-content">
                    <div className="intro">
                        <h1>hello!!</h1>
                        <p>I'm Anannya, a Developer in Bangalore</p>
                        <button><a href="#contact">Work with me</a></button>
                    </div>
                    <img src={woman_illustration} alt="illustration"></img>
                </div>
            </div >
        )
    }
}
export default Home;