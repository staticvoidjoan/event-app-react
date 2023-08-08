import React from 'react';
import "./NavBar.css"
import profilepic from "../assets/profilepic.jpg"

const NavBar = () => {

    return(
        <header>
        <div className='navbar-container'>
            <div>
                <h1 className='nav-title'>
                    <a href='/' className='nav-link'>AppName</a>
                </h1>
            </div>
            <div className='nav-user'>
                <h4 className='profile-name'>Masha</h4>
                <img src={profilepic} alt="profile pic"  className='profile-pic'/>
            </div>
        </div>
        </header>
    )
}

export default NavBar;