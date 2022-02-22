import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (

    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/list">ListComponents</Link>
            </li>
            <li>
                <Link to="/modal">ModalComponent</Link>
            </li>
            <li>
                <Link to="/split-screen">SplitScreenComponent</Link>
            </li>
            <li>
                <Link to="/container">ContainerComponent</Link>
            </li>
        </ul>


    </nav>
);
export default NavBar;