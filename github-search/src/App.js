import React, { Component } from 'react';
import './App.css';
import GithubSearch from './GithubSearch/GithubSearch';
import User from './User/User';
import Profile from './Profile/Profile';
import axios from 'axios';

class App extends Component {
  state = {
    searchText: '',
    users:[],
    userShowProfile: false,
    selectedUser:''
  }
  searchInput = (event) => {
    this.setState({searchText: event.target.value});
    console.log("Searched Text:",this.state.searchText);
    let url = 'https://api.github.com/search/users?q='+this.state.searchText;
    axios.get(url)
      .then(response =>{
        this.setState({users: response.data.items});
        console.log("Searched Users:",this.state.users);
      })
  }
  getProfileHandler = (user) => {
    this.setState({
                    selectedUser:user,
                    userShowProfile:true,
                    users:[],
                    searchText:''
                  });
  }
  render() {
    let usersfound = null;
    let showHide = "";
    if ( this.state.users ) {
      usersfound = (
        <ul className="userList">
          {this.state.users.map((user, index) => {
            return <User
              login={user.login}
              clicked={()=>this.getProfileHandler(user)}/>
          })}
        </ul>
      );
    }
    if(this.state.selectedUser){
      showHide = "show-table";
    }else{
      showHide = "hide";
    }
    return (
      <div className="App">
          <GithubSearch changed={this.searchInput}/>
          {usersfound}
          <Profile 
            class={showHide} 
            login={this.state.selectedUser.login} 
            id={this.state.selectedUser.id}
            repos={this.state.selectedUser.repos_url}
            score={this.state.selectedUser.score}
            subscribe={this.state.selectedUser.subscriptions_url}
            url={this.state.selectedUser.url}/>
      </div>
    );
  }
}

export default App;
