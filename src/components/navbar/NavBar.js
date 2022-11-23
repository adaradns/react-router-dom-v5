import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ items }) => {
    return(
        <nav>
            <ul>
                {items.map((item, index) => {
                    return <li key={index} > <Link to={`/${item}`}>{item}</Link></li>
                })}
            </ul>
        </nav>
    );
}

export default NavBar;