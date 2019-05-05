import React from 'react';
import Input from './Input';
import Button from './Button';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ''
    };
  }

  render() {
    return (
      <div className="col-xs-3 col-md-5">
        <form>
          <Input
            title={'Message'}
            placeholder={'Enter your message here!'}
            handlechange={event =>
              this.setState({ newMessage: event.target.value })
            }
          />
          <Button
            title={'Send'}
            action={e => this.props.handler(e, this.state.newMessage)}
          />
        </form>
      </div>
    );
  }
}

export default MessageForm;
