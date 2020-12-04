import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InforBar/InforBar';
import InputMenu from '../InputMenu/InputMenu';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import DotLoader from "react-spinners/DotLoader";
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
	const [loading, setLoading] = useState(true);
	const [themeDark, setThemeDark] = useState(false);

	window.scrollTo(0, 0);
	const history = useHistory();

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);
		console.log(socket, 'SOCKET');


		setRoom(room);
		setName(name)

		socket.emit('join', { name, room }, (error) => {
			if (error) {
				setError(true)
			}
			setLoading(false);
		});

		socket.on('connect_error', (error) => {
			alert('Server is currently down :( Please come back later!');
			socket.disconnect()
			history.push('/')
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
		<div className={themeDark ? 'chat chat__dark' : 'chat chat__light'}>
			{loading ?
				<div style={{ margin: "0 auto" }}>
					<DotLoader
						size={150}
						color={"#69D1D1"}
						loading={loading}
					/>
					<p className="chat__loading">Setting up your chat room ... </p>
				</div>
				:
				<div style={{ width: "100%", height: "100%" }}>
					{error ? <div className="chat__error">
						<div> <img src={errorImg} alt="error"></img></div>
						<Link to={"/"}>
							<button> Join TeleChat! </button>
						</Link>

					</div> :
						<div className="chatInner">
							<TextContainer users={users} name={name} room={room} setOpenMenu={setOpenMenu} menu={openMenu} themeDark={themeDark} setThemeDark={setThemeDark} />
							<div className="chatInner__main">
								<div className="chatInner__inner">
									<InfoBar room={room} setOpenMenu={setOpenMenu} menu={openMenu} themeDark={themeDark} />
									<Messages messages={messages} name={name} themeDark={themeDark} />
									<InputMenu setMessage={setMessage} themeDark={themeDark} />
									<Input message={message} setMessage={setMessage} sendMessage={sendMessage} themeDark={themeDark} />
								</div>
							</div>
						</div>
					}
				</div>}
		</div>
	);
}

export default Chat;
