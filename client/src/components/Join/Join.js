import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import blueBubble from '../../assets/images/circle-b.png'
import greenBubble from '../../assets/images/circle-g.png'
import logo from '../../assets/images/logo.png';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

import './Join.scss';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState("");
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(room);
		setCopy(true);
	}

	return (
		<div className="join">
			<div className="join__logo"><img src={logo} alt="logo" width="94px"></img></div>
			<div className="bubblesLeft">
				<img className="bubbles-blue bubbles-floating" alt="blue-bubbles" src={blueBubble}></img>
				<img className="bubble-green bubbles-floating delay" alt="green-bubbles" src={greenBubble}></img>
			</div>

			<div className="joinInner">
				<h1 className="joinInner__heading"> Join </h1>
				<div className="joinInner__input"><input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}></input></div>
				<div className="joinInner__input">
					<input placeholder="Room" type="text" onChange={(e) => setRoom(e.target.value)}></input>
					{room && !copy ? <FileCopyOutlinedIcon onClick={handleCopy} />
						: room && copy ? <CheckOutlinedIcon />
							: null}
				</div>

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
