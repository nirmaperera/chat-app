import React from 'react';

import './Input.scss';

const Input = ({ setMessage, sendMessage, message, themeDark, setTyping, isTyping }) => {
	let timer, timeoutVal = 2000;
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			sendMessage(e)
		} else {
			console.log('start')
			window.clearTimeout(timer)
			setTyping(true);
			isTyping(true)
		}
	}

	const handleKeyUp = (e) => {
		console.log('stopp')
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			setTyping(false);
			isTyping(false)
		}, timeoutVal);
	}
	return (
		<form className="inputForm">
			<input
				className={themeDark ? 'inputForm__input input__dark' : 'inputForm__input'}
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={({ target: { value } }) => setMessage(value)}
				onKeyPress={(e) => handleKeyPress(e)}
				onKeyUp={(e) => handleKeyUp(e)}
			/>
			<button className={themeDark ? 'inputForm__sendBtn sendBtn__dark ' : 'inputForm__sendBtn sendBtn__light'} onClick={e => sendMessage(e)}>Send</button>
		</form>
	)
}

export default Input;
