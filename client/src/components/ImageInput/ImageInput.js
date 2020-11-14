import React, { useState } from 'react';



const ImageInput = ({ setMessage, sendMessage, message }) => {
    const [image, setImage] = useState("");
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        setMessage(image);
    }

    return (
        <form className="form">
            <input
                className="message_input"
                type="file"
                onChange={onImageChange}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={e => sendMessage(e, true)}>Send</button>
            <img id="target" src={image} />
        </form>
    )
}

export default ImageInput;