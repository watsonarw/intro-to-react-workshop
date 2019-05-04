import React from 'react';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import restclient from '../restclient';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      messages: []
    };
  }

  componentDidMount() {
    restclient.get('https://chatapi.site/messages', data => {
      this.setState({ messages: data.messages });
    });
  }

  render() {
    return (
      <div>
        <h1 className="App-header">Intro to React Workshop</h1>
        <MessageForm />
        <MessageList className="col-md-10" entries={this.state.messages} />
      </div>
    );
  }
}

export default App;
