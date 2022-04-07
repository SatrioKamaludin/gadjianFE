import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import gadjianLogo from '../resources/logo.png';
import profilepic from '../resources/8587427.jpg';
import './header.css';

class Header extends Component {
    render(){
        return(
            <div>
                <div className='header'>
                    <div className="section">
                        <div className="logoside">
                            <div className="bars">
                                <span>
                                    <FontAwesomeIcon
                                            icon={faBars}
                                            size="2x"
                                    />
                                </span>
                            </div>
                            <div className="thelogo">
                                <div className="insidelogo">
                                    <img width='95%' height='95%' src={gadjianLogo} alt="logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="loginside">
                            <div className="welcome hidewelcome">Hallo, <span className='blockname'>Satrio Kamaludin</span></div>
                            <div className="photo">
                                <div className="insidephoto">
                                    <img className='borderimg' width='100%' height='100%' src={profilepic} alt="profile_picture"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;