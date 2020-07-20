import React, { Component } from 'react';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import { render } from 'react-dom';

class App extends Component {
  handleName=(name)=>{
    alert(name)
  }
  render(){
  return (
    <div className="App">
     <ProfileComponent fullName="Tony Stark" 
      Bio="born on 1975" 
      profession="Engineer"
      handleName={this.handleName} >
      <div>
          <img src="./Tony.jpg" alt="image" />
      </div>
      </ProfileComponent>
    </div>
  );
}}

export default App;
