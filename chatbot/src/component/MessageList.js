import React from 'react';
import Moment from 'react-moment';

class MessageList extends React.Component {
  createEntry(item) {
    return (
      <div className="media" key={item.id}>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{item.message}</h5>
          {item.user} at{' '}
          <Moment toNow format="HH:mm DD/MM/YYYY " date={item.timeStamp} />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="col-xs-9 col-md-7">
        <h5 className="card-title">Chat room</h5>
        {this.props.entries.map(this.createEntry)}
      </div>
    );
  }
}

export default MessageList;
