import React from 'react';
import { Media } from 'reactstrap';
import Moment from 'react-moment';

class MessageList extends React.Component {
  createEntry(item) {
    return (
      <Media className="mt-1" key={item.id}>
        <Media body>
          <Media heading>{item.message}</Media>
          {item.user} at{' '}
          <Moment toNow format="HH:mm DD/MM/YYYY " date={item.timeStamp} />
        </Media>
      </Media>
    );
  }
  render() {
    var entries = this.props.entries;
    return <div className="col-md-10">{entries.map(this.createEntry)}</div>;
  }
}

export default MessageList;
