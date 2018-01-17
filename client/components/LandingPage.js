import React from 'react'
import {NavLink} from 'react-router-dom'

export const LandingPage = () => {
    return (
        <div className="giant-image">
            <h1 className="landing-tagline josefin-font">Purveyors of Fine Cocoa Products</h1>
            <img 
                src="http://i66.tinypic.com/2ekkyo6.png"
                height="250"
                width="250"
                className="circle-logo"
            />
            <NavLink to="/products">
            <h2 className="shop-link josefin-font">
                shop >
            </h2>
            </NavLink>
        </div>
    )
}

