import React, { Component } from 'react';
import {menuItems} from './menuItems';
import './navbar.css';

import { Link } from "react-router-dom";

// use class when you untilize state

class navbar extends Component{
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="navbarItems">
                <Link className="nav-logo-home" to="/" ><h1 className="navbar-logo">foodishCORE</h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                
                                  <Link className={item.cName} to={item.url}>{item.title}</Link>
                                
                            </li>
                        )
                    })}  
                </ul>
            </nav>
        );
    }
}

export default navbar;