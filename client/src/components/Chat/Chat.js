import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';

import InfoBar from '../InforBar/InforBar';
import errorImg from '../../images/error.png';

import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';


import './Chat.css';
import InputMenu from '../InputMenu/InputMenu';

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

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            {error ? <div className="error">
                <div> <img src={errorImg}></img></div>
                <Link to={"/"}>
                    <button> Join TeleChat! </button>
                </Link>


            </div> :
                <div className="innerContainer">
                    <TextContainer users={users} name={name} room={room} />
                    <div className="message__container">

                        <div className="container">
                            <InfoBar room={room} />
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
