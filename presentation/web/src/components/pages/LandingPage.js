import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/wheatfield.jpeg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Quantum Soil Solution</h1>
            <p className="main-para text-center">Stop Climate Change</p>
            <p className="main-para text-center">Save Soil And Ensure Future Food Production For The Next Generation</p>
            <p className="main-para text-center">Quantum Computing With Artificial Intelligence</p>
            <p className="main-para text-center">21st Century Technology Saving Earth</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}