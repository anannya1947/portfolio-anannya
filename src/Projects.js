import React, { Component } from "react";
import './projects.css';
import Cards from "./Card";
import customice from "./icons/customice.png"
import dbmsmini from "./icons/dbmsmini.png"
import collision from "./icons/collision.png"

class Projects extends Component {
    render() {
        return (
            <div className="card_display">
                <Cards img={customice}
                    title="CustomIce Mobile Application"
                    description="Ice-cream customization app for accessible personalised ice-cream experience"
                    link="https://github.com/Deepanc7/Customice"
                />
                <Cards img={dbmsmini}
                    title="Watchlist Web Application with React"
                    description="Application to track the watch history of shows and movies of a user"
                    link="https://github.com/anannya1947/dbmsMiniFrontend"
                />
                <Cards img={collision}
                    title="openGL Graphics mini-project"
                    description="This collsion game is similar to Google Chrome Dinosaur Game"
                    link="https://github.com/anannya1947/openGL-collision"
                />
            </div>
        )
    }
}

export default Projects;