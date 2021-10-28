import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const Player = (props) => {
    const { id, name, age, photo, nation, club, position, market_value, salary } = props.player;
    const handleAddButton = props.handleAddButton;
    return (
        <div className='player-container'>
            <div className="player">
                <h1 className='player-name'> <span>{id}</span> {name} </h1>
                <div className="player-info">
                    <div className="player-image">
                        <img src={photo} alt="" />
                    </div>
                    <div className="player-details">
                        <p><span>Famous As: </span> Football Player</p>
                        <p><span>Nationality: </span> {nation} </p>
                        <p><span>Club: </span> {club} </p>
                        <p><span>Position: </span> {position} </p>
                        <p><span>Age: </span> {age} </p>
                        <p><span>Market Value: </span> €{market_value} </p>
                        <p><span>Salary(weekly): </span> ${salary} </p>
                        <Button onClick = {()=> handleAddButton(props.player) }  className="add-button"  variant="success"><FontAwesomeIcon icon={faUserPlus} /> Add To Team</Button>{' '}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;