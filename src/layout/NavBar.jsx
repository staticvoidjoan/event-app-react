import React from 'react';
import "./NavBar.css"
import profilepic from "../assets/profilepic.jpg"
import Bold20px27px from "../components/Text Components/bold20px27px"
import Normal16px22px from "../components/Text Components/regular16px22px"
const NavBar = () => {

    return(
        <header>
        <div className='navbar-container'>
            <div className='nav-title'>
               <Bold20px27px text={"AppName"} />
               
            </div>
            <div className='nav-user'>
                <div className="profile-name">
                <Normal16px22px text={"Masha"}/>

                </div>
                <img src={profilepic} alt="profile pic"  className='profile-pic'/>
            </div>
        </div>
        <hr className='nav-divider'/>
        </header>
    )
}

export default NavBar;