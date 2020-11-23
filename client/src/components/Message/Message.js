import React from 'react';
import ReactEmoji from "react-emoji";

import './Message.scss';

const Message = ({ message: { user, text, time }, name }) => {
	let isSentByCurrentUser = false;
	const trimName = name.trim().toLowerCase();
	if (user === trimName) {
		isSentByCurrentUser = true
	}

	return (
		isSentByCurrentUser ? (
			<div className="message__Container fadeIn justify__end">
				<p className="sent__Text pr-10">{trimName}</p>
				<div className="message__BoxContainer">
					<div className="message__Box background__Blue bounceInUp">
						{text.includes("data:image") ? <img width="400px" alt="message-img" src={text} />
							: text.includes("giphy.com/media") ? <img width="300px" alt="message-gif" src={text} />
								: <p className="message__Text color__white">{ReactEmoji.emojify(text)}</p>}
					</div>
					<p className="sent__Time pr-10 justify__end">{time}</p>
				</div>

			</div>
		) : (
				<div className="message__Container fadeIn justify__start">
					<div className="message__BoxContainer">
						<div className="message__Box bounceInUp">
							{text.includes("data:image") ? <img width="400px" alt="message-img" src={text} />
								: text.includes("giphy.com/media") ? <img width="300px" alt="message-gif" src={text} />
									: <p className="message__Text color__Dark">{ReactEmoji.emojify(text)}</p>}

						</div>
						<p className="sent__Time pr-10 justify__start">{time}</p>
					</div>
					<p className="sent__Text pl-10">{user}</p>

				</div>
			)
	)
}

export default Message;

