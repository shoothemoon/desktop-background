import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      // this.setState({ isClicked: true })
      console.log("Ethan should learn on his own")
    }
  }

  render() {
    return (
      <div className="input-panel" onKeyPress={this.handleKeyPress}>
        <input type="text" className="input" />
      </div>
    );
  }
}

export default App;
