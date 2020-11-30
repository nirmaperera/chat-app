import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InforBar/InforBar';
import InputMenu from '../InputMenu/InputMenu';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

import errorImg from '../../assets/images/error.png';
import './Chat.scss';

//const ENDPOINT = 'https://chat-application23.herokuapp.com/'
const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const [error, setError] = useState(false);
	const [openMenu, setOpenMenu] = useState(true)
	window.scrollTo(0, 0);

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setRoom(room);
		setName(name)

		socket.emit('join', { name, room }, (error) => {
			if (error) {
				setError(true)
				alert(error);

			}
		});
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('message', message => {
			setMessages(messages => [...messages, message]);
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		console.log(message, 'MESSAGES')
		const time = new Date().toLocaleTimeString();

		if (message) {
			socket.emit('sendMessage', message, time, () => setMessage(''));
		}
	}

	return (
		<div className="chat">
			{error ? <div className="chat__error">
				<div> <img src={errorImg} alt="error"></img></div>
				<Link to={"/"}>
					<button> Join TeleChat! </button>
				</Link>

			</div> :
				<div className="chatInner">
					<TextContainer users={users} name={name} room={room} setOpenMenu={setOpenMenu} menu={openMenu} />
					<div className="chatInner__main">
						<div className="chatInner__inner">
							<InfoBar room={room} setOpenMenu={setOpenMenu} menu={openMenu} />
							<Messages messages={messages} name={name} />
							<InputMenu setMessage={setMessage} />
							<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
						</div>
					</div>
				</div>
			}
		</div>
	);
}

export default Chat;
