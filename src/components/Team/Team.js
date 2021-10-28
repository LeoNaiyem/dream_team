import React from 'react';
import './Team.css'

const Team = (props) => {
    const {name, salary} = props.teamPlayer;
    return (
        <div className='team-player' >
            <div className="team-player-details">
                <p>{name}</p>
                <p>${salary}</p>
            </div>
        </div>
    );
};

export default Team;