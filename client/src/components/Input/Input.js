import React from 'react';

import './Input.scss';

const Input = ({ setMessage, sendMessage, message }) => {
	return (
		<form className="inputForm">
			<input
				className="inputForm__input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={({ target: { value } }) => setMessage(value)}
			/>
			<button className="inputForm__sendBtn" onClick={e => sendMessage(e)}>Send</button>
		</form>
	)
}

export default Input;
