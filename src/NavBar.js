import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (

    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/list">List Components</Link>
            </li>
            <li>
                <Link to="/modal">Modal Component</Link>
            </li>
            <li>
                <Link to="/split-screen">Split Screen Component</Link>
            </li>
            <li>
                <Link to="/container">Container Components</Link>
            </li>
            <li>
                <Link to="/uncontrolled">Uncontrolled Components</Link>
            </li>
            <li>
                <Link to="/controlled">Controlled Components</Link>
            </li>
            <li>
                <Link to="/high-order">High Order Components</Link>
            </li>

        </ul>


    </nav>
);
export default NavBar;