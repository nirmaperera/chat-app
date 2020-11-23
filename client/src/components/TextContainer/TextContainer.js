import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import logo from '../../assets/images/logo.png';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LastPageIcon from '@material-ui/icons/LastPage';

import './TextContainer.scss';

const TextContainer = ({ users, name, room, setOpenMenu, menu }) => {
	return (
		<div className={menu ? 'textContainer slide-right' : 'textContainer  slide-left'}>
			{users ? (
				<div>
					<div className="textContainer__menu">
						<img src={logo} alt="logo" width="75px"></img>
						<LastPageIcon className="textContainer__closeMenu" onClick={() => setOpenMenu(false)} />
					</div>

					<h2 className="textContainer__room"><MeetingRoomIcon /> Room: {room}</h2>
					<h2 className="textContainer__online"> <PeopleAltIcon /> Online users:</h2>

					<div className="textContainer__active">
						<h2>
							{users.map(({ name }) => (
								<div key={name} className="textContainer__activeItem">
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
