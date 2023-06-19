import React from 'react'
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import notification from "./images/topBar-logo.svg"
import Profile from "./images/profile.svg"

function Navbar() {
    return (

        <div className="topBar">
            <div>

                <div className='searchLogo'>

                    <CiSearch style={{ width: "19px", height: "19px", padding: "0px", top: "33.83px", left: "317.63px", position: "absolute", zIndex: 1 }} />

                </div>
                <input type="search" placeholder='Search for anything....' />
            </div>
            <div className='profile-div'>

                <img className='notifications' src={notification} alt="" />

                <img className='profile' src={Profile} alt="" />
                <div className="PhotoDiv"><div className="ProfilePhoto"></div></div>
            </div>

        </div>

    )
}

export default Navbar