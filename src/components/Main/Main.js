import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Main.css'

const Main = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(error => console.log(error))
    }, [])
    
    const [teamPlayers, setTeamPlayers] = useState([])
    const handleAddButton = (player) =>{
        if (teamPlayers.indexOf(player) > -1) {
            alert('You have already added this player')
        }
        else if (teamPlayers.length >= 11) {
            alert('You can not add more than 11 players')
        }
        else {
            const newTeamPlayers = [...teamPlayers, player];
            setTeamPlayers(newTeamPlayers);
        }
    }
    let totalSalary = 0;
    for (let i = 0; i < teamPlayers.length; i++) {
        const teamPlayer = teamPlayers[i];
        totalSalary = totalSalary + teamPlayer.salary;
        
    }

    return (
        <div className ='main-container'>
            <div className="players">
                {
                    players.map(player => <Player handleAddButton = {handleAddButton} key = {player.id} player = {player}></Player>)
                }
            </div>
            <div className="team">
                <h2>Total Team Player: {teamPlayers.length}</h2>
                {
                    teamPlayers.map(teamPlayer => <Team teamPlayer = {teamPlayer} key = {teamPlayer.id}></Team>)
                }
                <hr />
                <div className="team-player-details total-salary">
                <p>Total Salary:</p>
                <p>${totalSalary}</p>
            </div>
            </div>
        </div>
    );
};

export default Main;