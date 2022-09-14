import React, { Component } from "react";
import { Routes, Route, NavLink, Link, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {/* <Link className="logo" to="/">Anannya Mahapatra</Link> */}

                    <ul className="header">
                        <li><a href="#home-page">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    {/* <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div> */}
                    <section id="home-page">
                        <Home />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </HashRouter>
        )
    }
}
export default Main;