import React, { Component } from 'react';
import logomenu from '../resources/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUsers, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import './menu.css';

class Menu extends Component {
    render(){
        return(
            <div className='menu hidemenu'>
                <div className="section">
                    <div className="logo">
                        <img width='100%' height='100%' src={logomenu} alt="logo"/>
                    </div>
                    <div className="allmenu">
                        <div className="listmenu">
                            <div className='thumbnail'>
                                <span>
                                    <FontAwesomeIcon
                                        icon={faHouseChimney}
                                        size="1x"
                                    />
                                </span>
                            </div>
                            <div>
                                <h5>Beranda</h5>
                            </div>
                        </div>
                        <div className="listmenu active">
                            <div className='thumbnail'>
                                <span>
                                    <FontAwesomeIcon
                                        icon={faUsers}
                                        size="1x"
                                    />
                                </span>
                            </div>
                            <div>
                                <h5>Personnel List</h5>
                            </div>
                        </div>
                        <div className="listmenu">
                            <div className='thumbnail'>
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCalendarAlt}
                                        size="1x"
                                    />
                                </span>
                            </div>
                            <div>
                                <h5>Daily Attendance</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;