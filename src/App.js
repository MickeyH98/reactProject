import React, { Component } from 'react';
import BuildTeam from './BuildTeam.js';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state= {
      teamUnassigned: [
        {
          name: "user1",
          team: "unassigned"
        },
        {
          name: "user2",
          team: "unassigned"
        },
        {
          name: "user3",
          team: "unassigned"
        }
      ],
      team1: [],
      team2: []
    }
  }

  render() {
    return (
      <div className="App">

        <BuildTeam
        teamArray={this.state.team1}
        teamID="team1"

        />

        <BuildTeam
        teamArray={this.state.teamUnassigned}
        teamID="teamUnassigned"
        changeTeam={[">", "<"]}
        />

        <BuildTeam
        teamArray={this.state.team2}
        teamID="team2"

        />

      </div>
    );
  }
}

export default App;

//Create an app to assign a list of people to one of two teams. You may either start with a hard-coded array of people or you can create a form to gather names from the user. Either way, start with listing the users. Have some way to add them into one of the two teams. Once a person is assigned, they should be removed from the unassigned list and should be added to a team list. Once a person is on a team list, have a way to remove them from a team assignment (which will put them back on the unassigned list) or to switch them to the other team. Finally, have a way to reset things back to the original state of the game at the beginning.
