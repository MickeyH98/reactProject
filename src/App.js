import React, { Component } from 'react';
import './App.css';
import UserButton from './Components/UserButton.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [
        {
          name: "Mickey",
          teamId: 0,
        },
        {
          name: "Hunter",
          teamId: 0,
        },
        {
          name: "Ian",
          teamId: 0,
        },
        {
          name: "Lesly",
          teamId: 0,
        },
        {
          name: "Markus",
          teamId: 0,
        },
        {
          name: "Angel",
          teamId: 0,
        },
        {
          name: "Britanny",
          teamId: 0,
        },
        {
          name: "Chris",
          teamId: 0,
        },
        {
          name: "Ivan",
          teamId: 0,
        },
        {
          name: "Juan",
          teamId: 0,
        },
        {
          name: "Malik",
          teamId: 0,
        },
        {
          name: "Miguel",
          teamId: 0,
        },
        {
          name: "Teia",
          teamId: 0,
        },
        {
          name: "Victoria",
          teamId: 0,
        },
        {
          name: "Tabitha",
          teamId: 0,
        },
        {
          name: "Mark",
          teamId: 0,
        },

      ],
      teams: {
        team0: [],
        team1: [],
        team2: [],
      }
    }
    this.teamBuilder = this.teamBuilder.bind(this);
    this.onTeamChange = this.onTeamChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  onTeamChange(i, teamId) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.teams = {
      team0: [],
      team1: [],
      team2: [],
    }
    stateCopy.users[i].teamId = teamId;
    this.setState(stateCopy);
  }

  resetState(){
    this.setState({
      users: [
        {
          name: "Mickey",
          teamId: 0,
        },
        {
          name: "Hunter",
          teamId: 0,
        },
        {
          name: "Ian",
          teamId: 0,
        },
        {
          name: "Lesly",
          teamId: 0,
        },
        {
          name: "Markus",
          teamId: 0,
        },
        {
          name: "Angel",
          teamId: 0,
        },
        {
          name: "Britanny",
          teamId: 0,
        },
        {
          name: "Chris",
          teamId: 0,
        },
        {
          name: "Ivan",
          teamId: 0,
        },
        {
          name: "Juan",
          teamId: 0,
        },
        {
          name: "Malik",
          teamId: 0,
        },
        {
          name: "Miguel",
          teamId: 0,
        },
        {
          name: "Teia",
          teamId: 0,
        },
        {
          name: "Victoria",
          teamId: 0,
        },
        {
          name: "Tabitha",
          teamId: 0,
        },
        {
          name: "Mark",
          teamId: 0,
        }
      ],
      teams: {
        team0: [],
        team1: [],
        team2: [],
      }
    })
  }

  teamBuilder() {
    const usersJsx = this.state.users.map(function(user, i) {
      if(user.teamId === 0){
        let userElement = (
          <UserButton
          userData = {user}
          leftTeam = "1"
          rightTeam = "2"
          handleTeam1Change = { () => this.onTeamChange(i, 1) }
          handleTeam2Change = { () => this.onTeamChange(i, 2) }
          />
        );
        this.state.teams.team0.push(userElement);
      }else if(user.teamId === 1){
        let userElement = (
          <UserButton
            userData = {user}
            leftTeam = "x"
            rightTeam = "2"
            handleTeam1Change = { () => this.onTeamChange(i, 0) }
            handleTeam2Change = { () => this.onTeamChange(i, 2) }
          />
        );
        this.state.teams.team1.push(userElement);
      }else{
        let userElement = (
          <UserButton
            userData = {user}
            leftTeam = "1"
            rightTeam = "x"
            handleTeam1Change = { () => this.onTeamChange(i, 1) }
            handleTeam2Change = { () => this.onTeamChange(i, 0) }
          />
        );
        this.state.teams.team2.push(userElement);
      }
    }, this);

    var renderedTeams = (
      <div className="allThreeTeams">
        <div className="team1">
          <h2>Team 1</h2>
          {this.state.teams.team1}
        </div>

        <div className="teamUnassigned">
          <h2>Unassigned</h2>
          {this.state.teams.team0}
        </div>

        <div className="team2">
          <h2>Team 2</h2>
          {this.state.teams.team2}
        </div>
      </div>
    )
    return renderedTeams;
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Team Picker</h1>
        </div>
        <div className="allTeams">
        {this.teamBuilder()}
        </div>
        <button className="resetButton" onClick={this.resetState}>Reset</button>
      </div>
    );
  }
}

export default App;

//Create an app to assign a list of people to one of two teams. You may either start with a hard-coded array of people or you can create a form to gather names from the user. Either way, start with listing the users. Have some way to add them into one of the two teams. Once a person is assigned, they should be removed from the unassigned list and should be added to a team list. Once a person is on a team list, have a way to remove them from a team assignment (which will put them back on the unassigned list) or to switch them to the other team. Finally, have a way to reset things back to the original state of the game at the beginning.
