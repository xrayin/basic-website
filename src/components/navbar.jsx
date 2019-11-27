import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top left" alt="">
                        </img>
                    </Link>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                        <span className="sr-only">(current)</span></NavLink>
                                </li>
                            </ul>
                        </div>
                </nav>
            </div>
        );
};

export default Navbar;