import React from 'react'
import "./Welcome.scss";
import playingcodeLogo from "../images/logo.png";

export default function Welcome() {
    return (
        <div className='WelcomeScreen'>
            <div className="topbar">
                <div className="dividingSpace1"></div>
                <div className="dividingSpace2">
                    <h2>Home</h2>
                    <h2>Projects</h2>
                    <h2>Hire</h2>
                    <h2>Support</h2>
                    <h2>About Me</h2>
                </div>

            </div>
            <div className="body">
                <img src={playingcodeLogo} alt="No Img Found" />
            </div>
        </div>
    )
}
