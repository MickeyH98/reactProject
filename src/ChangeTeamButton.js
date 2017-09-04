import React from 'react';

function ChangeTeamButton(props){
  console.log('props', props);
  return(
    <input type="button"
    value={props.team}
    />
  );
}

export default ChangeTeamButton;
