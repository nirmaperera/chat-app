import React, { useContext } from 'react';
import { ChatContext } from '../../chatContext';
import ReactGiphySearchbox from "react-giphy-searchbox";

import './gifSearch.scss';

const Gif = ({ setClickGif, setClickStickers, library }) => {
	const { Message } = useContext(ChatContext);
	const [message, setMessage] = Message;

	const selectMedia = (item) => {
		console.log(item);
		if (library === 'stickers') {
			setMessage(item.images.original.url)
			setClickStickers(false);
		}
		else {
			setMessage(item.images.original.url)
			setClickGif(false)
		}
	}

	let placeholder = library === "stickers" ? "Search for Stickers" : "Search for GIFs";

	return (
		<div className="giphy">
			<ReactGiphySearchbox
				apiKey="7mG2YLq7OBLyrlxpi0o64vb0mB8wHHPh"
				onSelect={item => selectMedia(item)}
				library={library}
				searchPlaceholder={placeholder}
				masonryConfig={[
					{ columns: 3, imageWidth: 110, gutter: 5 },
					{ mq: "700px", columns: 6, imageWidth: 120, gutter: 5 }
				]}
			/>
		</div>
	);
}

export default Gif;
