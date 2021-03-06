import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ChatContext } from '../../chatContext';

import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InforBar/InforBar';
import InputMenu from '../InputMenu/InputMenu';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import MenuContainer from '../MenuContainer/MenuContainer';
import DotLoader from "react-spinners/DotLoader";
import errorImg from '../../assets/images/error.png';

import './Chat.scss';

//const ENDPOINT = 'https://chat-application23.herokuapp.com/'
const ENDPOINT = 'localhost:5000';// for testing purpuses

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
	const [typing, setTyping] = useState(false);
	const [typeMess, setTypeMess] = useState('');

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

		if (typing) {
			socket.emit('typing', name);
		}

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

	useEffect(() => {
		socket.on('typing', typeMess => {
			setTypeMess(typeMess.data);
		});

	}, [name, typeMess])

	const isTyping = (typing) => {
		socket.emit('typing', name, typing, () => setTypeMess(''))
	}

	const sendMessage = (event) => {
		event.preventDefault();
		const time = new Date().toLocaleTimeString();

		if (message) {
			socket.emit('sendMessage', message, time, () => setMessage(''));
		}
	}

	return (
		<ChatContext.Provider value={{ theme: [themeDark, setThemeDark], Message: [message, setMessage], Name: [name, setName] }}>
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
								<MenuContainer users={users} userName={name} room={room} setOpenMenu={setOpenMenu} menu={openMenu} />
								<div className="chatInner__main">
									<div className="chatInner__inner">
										<InfoBar room={room} setOpenMenu={setOpenMenu} menu={openMenu} />
										<Messages messages={messages} />
										{typeMess ? <p className={themeDark ? "chatInner__typing dark__typing" :
											"chatInner__typing light__typing"}>{typeMess}</p>
											: null}

										<InputMenu />
										<Input sendMessage={sendMessage} setTyping={setTyping} isTyping={isTyping} />
									</div>
								</div>
							</div>
						}
					</div>}
			</div>
		</ChatContext.Provider>
	);
}

export default Chat;
