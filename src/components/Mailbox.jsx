import React from 'react';
import MailboxList from './MailboxList';
import ComposeMail from './ComposeMail';

const mailOptions = [
  {listItem: 'Inbox', count: '12'},
  {listItem: 'Starred', count: '7'},
  {listItem: 'Important', count: '2'},
  {listItem: 'Sent Mail', count: '10'},
  {listItem: 'Drafts', count: '1'},
];

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterProp: 'inbox'};
  }

  render() {
    return(
      <div>
        <ComposeMail></ComposeMail>

        {mailOptions.map(item => (
          <div className="mailbox-list flex-display" onClick={() => this.setState({ filterProp : item.listItem})}>
            <p className="list-name">{item.listItem}</p>
            <p className="list-count">{item.count}</p>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Mailbox;