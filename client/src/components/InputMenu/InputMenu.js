import React, { useState } from 'react';

import GifIcon from '@material-ui/icons/Gif';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Gif from '../gifSearch/gif';
import ImageInput from '../ImageInput/ImageInput';
import CloseIcon from '@material-ui/icons/Close';

import './InputMenu.css';

const InputMenu = ({ setMessage }) => {
    const [clickGif, setClickGif] = useState(false);
    const [clickImg, setClickImg] = useState(false);
    return (
        <div className="inputMenu__container">
            <div className="inputMenu">
                <div>
                    <GifIcon onClick={() => setClickGif(true)} className="Icon" />
                    <ImageSearchIcon onClick={() => setClickImg(true)} className="Icon" />
                </div>
                <div>
                    {clickGif ? <CloseIcon className="close" onClick={() => setClickGif(false)} /> : null}
                    {clickImg ? <CloseIcon className="close" onClick={() => setClickImg(false)} /> : null}

                </div>
            </div>

            <div>
                {clickGif ? <Gif setMessage={setMessage} setClickGif={setClickGif} /> : null}
                {clickImg ? <ImageInput setMessage={setMessage} setClickImg={setClickImg} /> : null}
            </div>


        </div>

    )
}

export default InputMenu;