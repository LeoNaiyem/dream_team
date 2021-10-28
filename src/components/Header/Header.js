import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className = 'header'>
            <div className="logo">
                <a href="!#">IN Web Solution</a>
            </div>
            <div className="links">
                <ul>
                    <li><a href="!#">News</a></li>
                    <li><a href="!#">Transfers & Rumours</a></li>
                    <li><a href="!#">Market Value</a></li>
                    <li><a href="!#">Competitions</a></li>
                    <li><a href="!#">Forums</a></li>
                    <li><a href="!#">My Team</a></li>
                    <li><a href="!#">Live</a></li>
                </ul>
            </div>
            <div className="log-in">
                <a href="!#"><FontAwesomeIcon icon={faUser} /> Login</a>
            </div>
        </div>
    );
};

export default Header;