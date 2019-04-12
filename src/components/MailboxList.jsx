import React from 'react';

class MailboxList extends React.Component {
  render() {
    return (
      <div className="mailbox-list flex-display">
        <p className="list-name">{this.props.listText}</p>
        <p className="list-count">{this.props.count}</p>
      </div>
    )
  }
}

export default MailboxList;