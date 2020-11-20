import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import blueBubble from '../../images/circle-b.png'
import greenBubble from '../../images/circle-g.png'
import logo from '../../images/logo.png';

import './Join.css';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState("");

	return (
		<div className="join">
			<div className="join__logo"><img src={logo} alt="logo" width="94px"></img></div>
			<div className="bubblesLeft">
				<img className="bubbles-blue bubbles-floating" alt="blue-bubbles" src={blueBubble}></img>
				<img className="bubble-green bubbles-floating delay" alt="green-bubbles" src={greenBubble}></img>
			</div>

			<div className="joinInner">
				<h1 className="joinInner__heading"> Join </h1>
				<div><input placeholder="Name" className="joinInner__input" type="text" onChange={(e) => setName(e.target.value)}></input></div>
				<div><input placeholder="Room" className="joinInner__input mg-20" type="text" onChange={(e) => setRoom(e.target.value)}></input></div>

				<Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat/?name=${name}&room=${room}`}>
					<button className="joinInner__btn mg-20" type="submit">Join</button>
				</Link>
			</div>

			<div className="bubblesTop">
				<img className="bubbles-blue bubbles-floating" alt="blue-bubbles" src={blueBubble}></img>
				<img className="bubble-green-2 bubbles-floating delay" alt="green-bubbles" src={greenBubble}></img>
			</div>

			<div className="bubblesBottom bubbles-floating">
				<img className="bubbles-blue" alt="blue-bubbles" src={blueBubble}></img>
			</div>

			<div className="bubblesRight">
				<img className="bubbles-blue bubbles-floating" alt="blue-bubbles" src={blueBubble}></img>
				<img className="bubble-green bubbles-floating delay" alt="green-bubbles" src={greenBubble}></img>
			</div>
		</div >
	)
}
export default Join;
