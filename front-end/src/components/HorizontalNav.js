import React from "react";
import logo from "../assets/logo.png";
import '../styles/HorizontalNav.css'
import { Link } from "react-router-dom";

/**
 * It returns a div with a logo and a nav with a list of links
 * @returns {React.ReactElement} A component that displays a horizontal navigation bar.
 */

const HorizontalNav = () => {
    const links = ["accueil", "profile", "réglage", "communauté"];

    return (
        <div className="hornav_container">
            <div className="bloc-logo">
                <img src={logo} className='logo' alt='logo SportSee'/>
            </div>
        
            <nav className="bloc-nav">
                <ul className="bloc-list">
                {links.map((link, key) => {
                    return (
                    <Link to="/" className="list__nav-link" key={key}>
                        {(link).charAt(0).toUpperCase() + (link).substring(1).toLowerCase()}
                    </Link>
                    );
                })}
                </ul>
        </nav>
      </div>
    )
}

export default HorizontalNav