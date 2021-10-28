import React from 'react';
import './Team.css'

const Team = (props) => {
    console.log(props.teamPlayer)
    const {name, photo, salary} = props.teamPlayer;
    console.log(name, photo, salary)

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