import React, { useContext } from 'react';
import { ChatContext } from '../../chatContext';
import ReactEmoji from "react-emoji";

import './Message.scss';

const Message = ({ message: { user, text, time } }) => {
	const { theme, Name } = useContext(ChatContext);
	const [themeDark] = theme;
	const [name] = Name;

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
					<div className={themeDark ? 'message__Box background__Blue_dark bounceInUp' : 'message__Box background__Blue bounceInUp'}>
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
						<div className={themeDark ? 'message__Box message__Box__dark bounceInUp' : 'message__Box message__Box__light bounceInUp'}>
							{text.includes("data:image") ? <img width="400px" alt="message-img" src={text} />
								: text.includes("giphy.com/media") ? <img width="300px" alt="message-gif" src={text} />
									: <p className={themeDark ? "message__Text color__white" : "message__Text color__Dark"}>{ReactEmoji.emojify(text)}</p>}

						</div>
						<p className="sent__Time pr-10 justify__start">{time}</p>
					</div>
					<p className="sent__Text pl-10">{user}</p>

				</div>
			)
	)
}

export default Message;

