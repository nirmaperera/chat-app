import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import './InforBar.scss';

const InfoBar = ({ room, setOpenMenu, menu, themeDark }) => {
	return (
		<div className={themeDark ? 'inforBar inforBar__dark' : 'inforBar inforBar__light'}>
			<div className="inforBar__inner">
				{!menu ? <MenuOutlinedIcon onClick={() => setOpenMenu(true)} className="inforBar__menu" /> : null}
				<div style={{ display: "flex", alignItems: "center" }}>
					<FiberManualRecordIcon className="inforBar-blink" style={{ color: '#ACD957' }} />
					<h3>{room}</h3>
				</div>
			</div>

			<div className="InforBar__rightContainer">
				<a href="/"><ExitToAppIcon /></a>
			</div>
		</div>
	)
}

export default InfoBar;
