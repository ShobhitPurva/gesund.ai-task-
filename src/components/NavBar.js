import React from 'react';
import "./NavBar.css";
import HomeRoundedIcon from "@material-ui/icons/Home";
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import { MenuItem, Select, ListItemIcon, ListItemText} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import Fade from 'react-reveal/Fade';

function NavBar() {
    return (
        
        <div className="navbar">
            <Fade>
            <div className="navbar__left">
                <h1>Gesundai</h1>
            </div>
            <div className="navbar__middle">
                <div className="navbar__button">
                    <HomeRoundedIcon />
                    <p className="navbar__buttonText">Model</p>
                </div>
                <div className="navbar__button">
                    <HomeRoundedIcon />
                    <p className="navbar__buttonText">Validation</p>
                </div>
                <div className="navbar__button">
                    <HomeRoundedIcon />
                    <p className="navbar__buttonText">Deployment</p>
                </div>
            </div>
            <div className="navbar__space">
            </div>
            <div className="navbar__right">
                <NotificationsRoundedIcon />
                {/* dropdown */}
                <button className="navbar__rightButton">
                    <AccountCircleIcon style={{ color: 'white'}} />
                    <p>Enes Hosgor</p>
                    <KeyboardArrowDownRoundedIcon style={{ color: 'white'}} />    
                </button>
               
            </div>
            </Fade>
        </div>
   
    )
}

export default NavBar;
