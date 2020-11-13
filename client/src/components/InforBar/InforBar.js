import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import './InforBar.css';

const InfoBar = ({ room }) => {

    return (
        <div className="inforBar">
            <div className="inforBar-inner">
                <FiberManualRecordIcon className="blink" style={{ color: '#ACD957' }} />
                <h3>{room}</h3>

            </div>
            <div className="InforBar-rightContainer">
                <a href="/"><ExitToAppIcon /></a>
            </div>

        </div>
    )


}

export default InfoBar;
