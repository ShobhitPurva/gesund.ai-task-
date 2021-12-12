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
            <div className="navbar__left" style={{
                    width:'605.89px', 
                    height:'52px', 
                    display:'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    
                }}>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img  src="/images/gesund-logo-white.svg"/>
                </div>  
                <div style={{ display: 'flex', flexDirection:'row' }}>
                    <div className="navbar__button">
                        <img style={{paddingRight: '3.5px', height: '18px', width: '18px'}} src="/images/home.svg" />
                        <p className="navbar__buttonText" style={{ paddingLeft: '3.5px'}}>Model</p>
                    </div>
                    <div className="navbar__button">
                        <img style={{paddingRight: '3.5px', height: '18px', width: '18px'}} src="/images/home.svg" />
                        <p className="navbar__buttonText" style={{ paddingLeft: '3.5px'}}>Validation</p>
                    </div>
                    <div className="navbar__button">
                        <img style={{paddingRight: '3.5px', height: '18px', width: '18px'}} src="/images/home.svg" />
                        <p className="navbar__buttonText">Deployment</p>
                    </div>
                </div>
            </div>

            <div className="navbar__right">
                <img style={{ color: 'white', height: '21px', width: '21px' }} src="/images/notification.svg"/>
               
                <button className="navbar__rightButton">
                    <AccountCircleIcon style={{ color: 'white', height: '32px', width: '32px' }} />
                    <p>Enes Hosgor</p>
                    <KeyboardArrowDownRoundedIcon style={{ color: 'white'}} />    
                </button>
               
            </div>
            </Fade>
        </div>
   
    )
}

export default NavBar;
