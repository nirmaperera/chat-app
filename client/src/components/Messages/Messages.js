import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './Messages.scss';

const Messages = ({ messages, name, themeDark }) => {
	return (
		<ScrollToBottom className={themeDark && themeDark ? 'messages messages__dark' : 'messages messages__light'}>
			{messages.map((message, i) => <div key={i}><Message message={message} name={name} themeDark={themeDark} /></div>)}
		</ScrollToBottom>
	)
}

export default Messages;
