import React, { Component } from 'react';
import ChangeTeamButton from './ChangeTeamButton';

function BuildTeam(props){
  console.log('props in BuildTeam', props);
  const teamList = props.teamArray.map(function(object, i) {
    return(
      <li className="player" key={i}>
        <ChangeTeamButton
        team={props.changeTeam[1]}
        />
        {object.name}
        <ChangeTeamButton
        team={props.changeTeam[0]}
        />
      </li>
    );
  })

  return(
    <ul className="team" id={props.teamID}>
      {teamList}
    </ul>
  );
};

export default BuildTeam;
