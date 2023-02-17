// importing react, and all components
import React from "react";
import Details from "./Details";
import Habit from "./Habit";

// import link, routes and route for rendering purpose
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
const Navbar = () => {
    // rendering navbar section
    return (
        <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                         Habit Tracker
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/Details">
                                    Weekly 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
 
            {/*  habits and their details rendering */}
            <Routes>
                <Route exact path="/Details" element={<Details />} />
                <Route path="/" element={<Habit />} />
            </Routes>
        </div>
        </Router>
    );
};
export default Navbar;
