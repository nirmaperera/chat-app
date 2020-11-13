import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


import InfoBar from '../InforBar/InforBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import dots from '../../images/dots.png';

import './Chat.css';

//const ENDPOINT = 'https://chat-application23.herokuapp.com/'
const ENDPOINT = 'localhost:5000';
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
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

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="outerContainer">
            <TextContainer users={users} name={name} room={room} />
            <div className="message__container">
                <image src={dots} />
                <div className="container">
                    <InfoBar room={room} />
                    <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>

        </div>
    );
}

export default Chat;
