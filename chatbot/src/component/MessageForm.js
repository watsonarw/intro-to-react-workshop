import React from 'react';
import Input from './Input';
import Button from './Button';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ''
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSendMessage(e) {
    e.preventDefault();
    //const url = 'https://chatapi.site/messages';
    alert(this.state.newMessage);
    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.newMessage),
    //   mode: 'no-cors',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    //   .then(response => {
    //     response.json().then(data => {
    //       console.log('Successful' + data);
    //     });
    //   })
    //   .catch(() =>
    //     console.log('Can’t access ' + url + ' response. Blocked by browser?')
    //   );
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newMessage: {
        content: ''
      }
    });
  }

  handleInput(event) {
    this.setState({ newMessage: event.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <form className="container-fluid" onSubmit={this.handleSendMessage}>
          <Input
            inputtype={'text'}
            type={'input'}
            title={'Message'}
            name={'newMessage'}
            value={this.state.newMessage}
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
      </div>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

export default MessageForm;
