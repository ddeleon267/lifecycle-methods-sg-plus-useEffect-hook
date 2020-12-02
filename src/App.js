import './App.css';
import React, { Component } from 'react'
import Name from './Name'

class App extends Component {
  constructor(props){
    console.log("constructor for App")
    super(props)

    this.state = {
      name: "Bob"
    }
  }


  render(){
    console.log("App render was run")
    return (
      <div className="App">
        {this.state.name}
        <Name />
      </div>
    );
  }
  
}

export default App;
