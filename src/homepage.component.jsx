import React from "react";

import './homepage.styles.scss'

const Homepage = () => (

    <div className="homepage">

        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="tittle">Hats</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="tittle">Jackets</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="tittle">Sneakers</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>


            <div className="menu-item">
                <div className="content">
                    <h1 className="tittle">Women</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="tittle">Men</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);


export default Homepage;