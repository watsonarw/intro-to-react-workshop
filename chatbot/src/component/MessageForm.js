import React from 'react';
import Input from './Input';
import Button from './Button';
import RestClient from '../restclient';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ''
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <form className="container-fluid">
          <Input
            title={'Message'}
            placeholder={'Enter your message here!'}
            handlechange={event =>
              this.setState({ newMessage: event.target.value })
            }
          />
          <Button title={'Send'} action={e => this.sendmessage(e)} />
        </form>
      </div>
    );
  }

  sendmessage(event) {
    event.preventDefault();
    RestClient.post('https://chatapi.site/messages', this.state.newMessage);
  }
}

export default MessageForm;
