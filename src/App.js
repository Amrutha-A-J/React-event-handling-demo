import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleType = this.handleType.bind(this);
    this.state = {
      count : 0,
      content : "nothing"
    };
  }
  handleClick(){
    this.setState({count : this.state.count+1});
  }
  handleType(e){
    this.setState({content:e.target.value? e.target.value : "nothing"});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Event demo</h1>
        </header>
        <div className="App-intro">
          <p>Clicked {this.state.count} times</p>
          <button onClick = {this.handleClick}>Click me</button>
          <br/>
          <p>Type something</p>
          <input onChange={this.handleType}></input>
          <p>You typed : {this.state.content}</p>
        </div>
      </div>
    );
  }
}

export default App;