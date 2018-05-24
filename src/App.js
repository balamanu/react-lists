import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UniqueId from 'react-html-id';

class App extends Component {
  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users:[
        {id:this.nextUniqueId(), name:'Bala',age:30},
        {id:this.nextUniqueId(),name:'Krishna',age:31},
        {id:this.nextUniqueId(),name:'Manukonda',age:32},
      ]
    }
    console.log(this.state);
  }

  deleteUser = (index,e) =>{
    //we can not edit state, so we need to copy of state
    const users =Object.assign([], this.state.users);
    users.splice(index,1);
    this.setState({users:users})
  }
  changeUserName = (id,e) =>{
    const index = this.state.users.findIndex((user)=>{
      return user.id === id
    });
    const user = Object.assign({},this.state.users[index]);
    user.name = e.target.value;
    const users =Object.assign([], this.state.users);
    users[index] = user;
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
        this.state.users.map((user,index)=>{
          return(<User delEvent={this.deleteUser.bind(this, index)} 
          changeEvent ={this.changeUserName.bind(this, user.id)}
          key={user.id}
          age={user.age}>{user.name}</User>);
        })
          }
          
          </ul>
      </div>
    );
  }
}

export default App;
