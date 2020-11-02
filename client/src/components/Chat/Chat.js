import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000'




    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log(name, room);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect') //leaving the chat room
            socket.off();
        }

    }, [ENDPOINT, location.search])

    //handle messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);

        })
    }, [messages])

    //function for sending messages
    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }

    }



    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <input value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />

            </div>
        </div>
    )


}

export default Chat;
