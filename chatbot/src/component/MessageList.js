import React from 'react';
import Moment from 'react-moment';

class MessageList extends React.Component {
  createEntry(item) {
    return (
      <div className="media" key={item.id}>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{item.message}</h5>
          {item.user} at{' '}
          <Moment format="HH:mm DD/MM/YYYY ">{item.timestamp}</Moment>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="col-xs-9 col-md-7">
        <h4 className="card-title">Chat room</h4>
        {this.props.entries.map(this.createEntry)}
      </div>
    );
  }
}

export default MessageList;
