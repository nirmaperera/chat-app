import React, { useState } from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message, setTyping }) => {
    let timer, timeoutVal = 1000;


    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         sendMessage(e)
    //     } else {
    //         window.clearTimeout(timer)
    //         setTyping(true);
    //     }
    //     //event => event.key === 'Enter' ? sendMessage(event) : null
    // }
    // const handleKeyUp = (e) => {
    //     window.clearTimeout(timer);
    //     timer = window.setTimeout(() => {
    //         setTyping(false);
    //     }, timeoutVal);
    // }

    return (
        <form className="form">
            <input
                className="message_input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
            // onKeyPress={(e) => handleKeyPress(e)}
            // onKeyUp={(e) => handleKeyUp(e)}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;