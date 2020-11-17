import React, { useState } from 'react';

import GifIcon from '@material-ui/icons/Gif';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Gif from '../gifSearch/gif';
import ImageInput from '../ImageInput/ImageInput';
import CloseIcon from '@material-ui/icons/Close';
import sticker from '../../images/sticker.png'

import './InputMenu.css';

const InputMenu = ({ setMessage }) => {
    const [clickGif, setClickGif] = useState(false);
    const [clickImg, setClickImg] = useState(false);
    const [clickStickers, setClickStickers] = useState(false);
    return (
        <div className="inputMenu__container">
            <div className="inputMenu">
                <div>
                    <GifIcon onClick={() => setClickGif(true)} className="Icon" />
                    <ImageSearchIcon onClick={() => setClickImg(true)} className="Icon" />
                    <img src={sticker} width='48px' className="Icon" alt="stickers" onClick={() => setClickStickers(true)} />
                </div>
                <div>
                    {clickGif ? <CloseIcon className="close" onClick={() => setClickGif(false)} /> : null}
                    {clickImg ? <CloseIcon className="close" onClick={() => setClickImg(false)} /> : null}
                    {clickStickers ? <CloseIcon className="close" onClick={() => setClickStickers(false)} /> : null}

                </div>
            </div>

            <div>
                {clickGif ? <Gif setMessage={setMessage} library={"gifs"} setClickGif={setClickGif} /> : null}
                {clickStickers ? <Gif setMessage={setMessage} library={"stickers"} setClickStickers={setClickStickers} /> : null}
                {clickImg ? <ImageInput setMessage={setMessage} setClickImg={setClickImg} /> : null}
            </div>


        </div>

    )
}

export default InputMenu;