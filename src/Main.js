import React, { Component } from "react";
import { Routes, Route, NavLink, Link, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Link className="logo" to="/">Anannya Mahapatra</Link>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default Main;