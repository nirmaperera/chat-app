import React, { useContext } from 'react';
import { ChatContext } from '../../chatContext';

import './ImageInput.scss';

const ImageInput = ({ setClickImg }) => {
	const { theme, Message } = useContext(ChatContext);
	const [themeDark] = theme;
	const [message, setMessage] = Message;

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				setMessage(e.target.result);
				setClickImg(false);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	return (
		<div>
			<input
				className={themeDark ? 'image__input imageInput__dark' : 'image__input imageInput__light'}
				type="file"
				accept="image/*"
				onChange={onImageChange}
			/>
		</div>
	)
}

export default ImageInput;
