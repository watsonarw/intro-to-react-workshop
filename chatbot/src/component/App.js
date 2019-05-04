import React from 'react';
import './App.css';
import MessageForm from './MessageForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  render() {
    return (
      <div>
        <h1 className="App-header">Intro to React Workshop</h1>
        <MessageForm />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://chatapi.site/messages')
      .then(response => response.json())
      .then(data => console.log(data));
  }
}

export default App;
