import React from 'react';
import Input from './Input';
import Button from './Button';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: {
        content: ''
      }
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSendMessage(e) {
    e.preventDefault();
    const url = 'https://chatapi.site/messages';
    fetch(url, {
      method: 'GET',
      body: JSON.stringify(this.state.newMessage.content),
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        response.json().then(data => {
          console.log('Successful' + data);
        });
      })
      .catch(() =>
        console.log('Can’t access ' + url + ' response. Blocked by browser?')
      );
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newMessage: {
        content: ''
      }
    });
  }

  handleInput(e) {
    let value = e.target.value;
    let content = e.target.content;
    this.setState(
      prevState => {
        return {
          newMessage: {
            ...prevState.newMessage,
            [content]: value
          }
        };
      },
      () => console.log(this.state.newMessage)
    );
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleSendMessage}>
        <Input
          inputtype={'text'}
          type={'input'}
          title={'Message'}
          name={'content'}
          defaultValue={this.state.newMessage.content}
          placeholder={'Enter your message'}
          handlechange={this.handleInput}
        />
        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Send'}
          style={buttonStyle}
        />{' '}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear'}
          style={buttonStyle}
        />{' '}
        {/*Clear button */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

export default MessageForm;
