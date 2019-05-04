import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  handleClick = () => {
    //this.setState(send(this.state));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Intro to React Js workshop Wired Monash.</p>
          <small>
            You are running this app in <b>{process.env.NODE_ENV}</b> mode.
          </small>
        </header>
      </div>
    );
  }
}

export default App;
