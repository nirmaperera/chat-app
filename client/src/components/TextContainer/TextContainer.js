import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './TextContainer.css';
import { useScrollTo } from 'react-scroll-to-bottom';

const TextContainer = ({ users, name }) => {
    console.log(users, 'users', name, "name");
    return (
        <div className="textContainer">
            {
                users
                    ? (
                        <div>
                            <h1>People currently chatting:</h1>
                            <div className="activeContainer">
                                <h2>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            {name}
                                            <FiberManualRecordIcon />
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