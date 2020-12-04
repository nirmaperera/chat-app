import React from 'react';

import logo from '../../assets/images/logo.png';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LastPageIcon from '@material-ui/icons/LastPage';

import './TextContainer.scss';

const TextContainer = ({ users, name, room, setOpenMenu, menu, themeDark, setThemeDark }) => {
	return (
		<div className={menu ? 'textContainer slide-right' : 'textContainer  slide-left'}>
			{users ? (
				<div className={themeDark ? 'textContainer__inner textContainer__dark' : 'textContainer__inner textContainer__light'}>
					<div className="textContainer__menu">
						<img src={logo} alt="logo" width="75px"></img>
						{themeDark ? <Brightness7Icon style={{ cursor: 'pointer' }} onClick={() => setThemeDark(false)} /> :
							<Brightness2Icon style={{ transform: "rotate(180deg)", cursor: 'pointer' }} onClick={() => setThemeDark(true)} />}
						<LastPageIcon className="textContainer__closeMenu" onClick={() => setOpenMenu(false)} />
					</div>

					<h2 className={themeDark ? 'textContainer__room room__dark' : 'textContainer__room room__light'}><MeetingRoomIcon /> Room: {room}</h2>
					<h2 className="textContainer__online"> <PeopleAltIcon /> Online users:</h2>

					<div className="textContainer__active">
						<h2>
							{users.map(({ name }) => (
								<div key={name} className={themeDark ? 'textContainer__activeItem active__dark' : 'textContainer__activeItem active__light'}>
									<FiberManualRecordIcon style={{ color: '#ACD957' }} />
									{name}
								</div>
							))}
						</h2>
					</div>
				</div>
			)
				: null
			}
		</div>
	)
};

export default TextContainer;
