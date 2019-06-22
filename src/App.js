import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clicks:0,
  }

  Plus = () => { 
    this.setState({clicks:this.state.clicks +1 });
  }
  Minus = () => { 
    this.setState({clicks:this.state.clicks -1 });
  }
  
  render() {
    return (
      <div>
        <div className="displaycount"></div>
        <h1 className="Counter">{this.state.clicks}</h1>
        <button onClick={this.Plus}>Plus</button>
        <button onClick={this.Minus}>Minus</button>
      </div>
    );
  }
}

export default App;

