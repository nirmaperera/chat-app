import React, { useState } from 'react';
import './ImageInput.scss';

const ImageInput = ({ setMessage, setClickImg }) => {
	const [image, setImage] = useState("");

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				setImage(e.target.result)
				setMessage(e.target.result);
				setClickImg(false);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	return (
		<div>
			<input
				className="image__input"
				type="file"
				accept="image/*"
				onChange={onImageChange}
			/>
		</div>
	)
}

export default ImageInput;
