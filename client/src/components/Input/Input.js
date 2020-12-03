import React from 'react';

import './Input.scss';

const Input = ({ setMessage, sendMessage, message, themeDark }) => {
	return (
		<form className="inputForm">
			<input
				className={themeDark ? 'inputForm__input input__dark' : 'inputForm__input'}
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={({ target: { value } }) => setMessage(value)}
			/>
			<button className={themeDark ? 'inputForm__sendBtn sendBtn__dark ' : 'inputForm__sendBtn sendBtn__light'} onClick={e => sendMessage(e)}>Send</button>
		</form>
	)
}

export default Input;
