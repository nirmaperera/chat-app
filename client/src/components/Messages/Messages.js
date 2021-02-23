import React, { useContext } from 'react';
import { ChatContext } from '../../chatContext';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './Messages.scss';

const Messages = ({ messages }) => {
	const { theme } = useContext(ChatContext);
	const [themeDark] = theme;

	return (
		<ScrollToBottom className={themeDark && themeDark ? 'messages messages__dark' : 'messages messages__light'}>
			{messages.map((message, i) => <div key={i}><Message message={message} /></div>)}
		</ScrollToBottom>
	)
}

export default Messages;
