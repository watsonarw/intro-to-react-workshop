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
    this.getMessages();
  }

  async getMessages() {
    const response = await restclient.get('https://chatapi.site/messages');
    this.setState({ messages: response.messages });
  }

  async sendmessage(event, msg) {
    event.preventDefault();
    await restclient.post('https://chatapi.site/messages', msg);
  }

  render() {
    return (
      <div>
        <h1 className="App-header">Intro to React Workshop</h1>
        <MessageForm handler={this.sendmessage} />
        <MessageList entries={this.state.messages} />
      </div>
    );
  }
}

export default App;
