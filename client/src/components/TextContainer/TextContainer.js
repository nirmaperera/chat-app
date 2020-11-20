import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './TextContainer.css';
import logo from '../../images/logo.png';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LastPageIcon from '@material-ui/icons/LastPage';

const TextContainer = ({ users, name, room, setOpenMenu, menu }) => {
    console.log(users, 'users', name, "name");
    console.log(menu, "openMenu");
    return (
        <div className={menu ? 'textContainer slide-right' : 'textContainer  slide-left'}>
            {
                users
                    ? (
                        <div>

                            <div className="textContainer__menu">
                                <img src={logo} width="75px"></img>
                                <LastPageIcon className="textContainer__closeMenu" onClick={() => setOpenMenu(false)} />
                            </div>
                            <h2 className="meeting__room"><MeetingRoomIcon /> Room: {room}</h2>
                            <h2 style={{
                                marginLeft: "5%", marginBottom: "0", fontWeight: "200"
                            }}><PeopleAltIcon /> Online users:</h2>
                            <div className="activeContainer">
                                <h2>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            <FiberManualRecordIcon style={{ color: '#ACD957' }} />
                                            {name}
                                        </div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    )
};

export default TextContainer;