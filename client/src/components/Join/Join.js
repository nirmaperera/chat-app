import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blueBubble from '../../images/circle-b.png'
import greenBubble from '../../images/circle-g.png'

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuter_Containter">
            <div className="bubbles-left ">
                <img className="blue-bubble floating" src={blueBubble}></img>

                <img className="green-bubble floating delay" src={greenBubble}></img>

            </div>

            <div className="joinInner_Container">
                <h1 className="heading"> Join </h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)}></input></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)}></input></div>

                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat/?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>

            <div className="bubbles-top floating delay">
                <img className="blue-bubble" src={blueBubble}></img>
            </div>

            <div className="bubbles-bottom floating">
                <img className="blue-bubble" src={blueBubble}></img>
            </div>

            <div className="bubbles-right ">
                <img className="blue-bubble floating " src={blueBubble}></img>
                <img className="green-bubble floating delay" src={greenBubble}></img>
            </div>


        </div >
    )

}


export default Join;
