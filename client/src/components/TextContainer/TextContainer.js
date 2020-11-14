import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './TextContainer.css';
import logo from '../../images/logo.png';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const TextContainer = ({ users, name, room }) => {
    console.log(users, 'users', name, "name");
    return (
        <div className="textContainer">
            {
                users
                    ? (
                        <div>
                            <img src={logo} width="75px"></img>
                            <h2 className="meeting__room"><MeetingRoomIcon /> Room: {room}</h2>
                            <h2 style={{
                                marginLeft: "5%", marginBottom: "0", fontWeight: "200"
                            }}><PeopleAltIcon /> Online users:</h2>
                            <div className="activeContainer">
                                <h2>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            {name}
                                            <FiberManualRecordIcon style={{ color: '#ACD957' }} />
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