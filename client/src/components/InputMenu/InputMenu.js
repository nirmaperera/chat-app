import React, { useState } from 'react';

import GifIcon from '@material-ui/icons/Gif';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Gif from '../gifSearch/gif';
import ImageInput from '../ImageInput/ImageInput';
import CloseIcon from '@material-ui/icons/Close';
import sticker from '../../assets/images/sticker.png'

import './InputMenu.scss';

const InputMenu = ({ setMessage, themeDark }) => {
	const [clickGif, setClickGif] = useState(false);
	const [clickImg, setClickImg] = useState(false);
	const [clickStickers, setClickStickers] = useState(false);

	const gif = () => {
		setClickGif(true);
		setClickImg(false);
		setClickStickers(false)
	}

	const img = () => {
		setClickImg(true);
		setClickGif(false);
		setClickStickers(false);
	}

	const stickers = () => {
		setClickImg(false);
		setClickGif(false);
		setClickStickers(true);
	}

	return (
		<div className={themeDark ? 'inputMenu inputMenu__dark' : 'inputMenu inputMenu__light'}>
			<div className="inputMenu__inner">
				<div>
					<GifIcon onClick={() => gif()} className={themeDark ? 'inputMenu__icon inputMenu__icon__dark' : 'inputMenu__icon inputMenu__icon__light'} />
					<ImageSearchIcon onClick={() => img()} className={themeDark ? 'inputMenu__icon inputMenu__icon__dark' : 'inputMenu__icon inputMenu__icon__light'} />
					<img src={sticker} width='48px' className={themeDark ? 'inputMenu__icon inputMenu__icon__dark' : 'inputMenu__icon inputMenu__icon__light'} alt="stickers" onClick={() => stickers()} />
				</div>
				<div>
					{clickGif ? <CloseIcon className="inputMenu__close" onClick={() => setClickGif(false)} /> :
						clickImg ? <CloseIcon className="inputMenu__close" onClick={() => setClickImg(false)} /> :
							clickStickers ? <CloseIcon className="inputMenu__close" onClick={() => setClickStickers(false)} /> : null}
				</div>
			</div>

			<div>
				{clickGif ? <Gif setMessage={setMessage} library={"gifs"} setClickGif={setClickGif} /> :
					clickStickers ? <Gif setMessage={setMessage} library={"stickers"} setClickStickers={setClickStickers} /> :
						clickImg ? <ImageInput setMessage={setMessage} setClickImg={setClickImg} themeDark={themeDark} /> : null}
			</div>
		</div>
	)
}

export default InputMenu;
