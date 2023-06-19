import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "./images/HomeLogo.svg"
import messages from "./images/messages.svg"
import Tasks from "./images/Tasks.svg"
import Members from "./images/Members.svg"
import Settings from "./images/Settings.svg"
import Project from "./images/myProject.svg"
import orange from "./images/orangeDot.svg"
import purple from "./images/purpleDot.svg"
import green from "./images/greenDot.svg"
import blue from "./images/blueDot.svg"
import Logo from "./images/logo.svg"
import Logo2 from "./images/logo2.svg"
import bulbShadow from "./images/bulbShadow.svg"
import bulb from "./images/bulb.svg"


const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleNavItemClick = () => {
        setShowMenu(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-toggle" onClick={handleMenuClick}>
                    <span className="navbar-toggle-icon"></span>
                </div>
                <div className={`navbar-menu ${showMenu ? "active" : ""}`} onClick={handleNavItemClick}>
                    <div className="Logo">
                        <img className="logo1" src={Logo} alt="" />
                        <p>Project M.</p>
                        <img className="logo2" src={Logo2} alt="" />

                    </div>
                    <div className="vector"></div>
                    <ul className="navbar-menu-list">
                        <li>
                            <a href="/"> <img src={HomeIcon} alt="" /></a>
                        </li>
                        <li>
                            <a href="/"> <img src={messages} alt="" /></a>
                        </li>
                        <li>
                            <a href="/"> <img src={Tasks} alt="" /></a>
                        </li>
                        <li>
                            <a href="/"> <img src={Members} alt="" /></a>
                        </li>
                        <li>
                            <a href="/"><img src={Settings} alt="" /></a>
                        </li>
                    </ul>
                    <div className="vector">
                    </div>
                    <div className="projects">
                        {/* <p className="projects-heading">MY PROJECTS</p> */}
                        <img src={Project} alt="" />
                    </div>
                    <div className="project-description">
                        <div className="project1"> <img src={green} alt="" /><p>Mobile App</p></div>
                        <div className="project2"><img src={orange} alt="" /> <p>Website Redesign</p></div>
                        <div className="project3"> <img src={purple} alt="" /><p>Design System</p></div>
                        <div className="project4"> <img src={blue} alt="" /><p>Wireframes</p></div>
                    </div>
                     <div className="thought-Div">
                        <div className="thoughtLogo">
                                 <img className="shadow" src={bulbShadow } alt="img" /> 
                                 <img className="bulb" src={bulb} alt="img" />
                        </div>
                        <div className="thoughtMsg">
                              <p className="thoughtHeading">Thoughts Time</p>
                              <p className="thoughtDiscription">
                              We don’t have any notice for you, till then you can share your thoughts with your peers.
                              </p>
                              <input type="text" placeholder="Write a message"/>
                        </div>
                     </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;