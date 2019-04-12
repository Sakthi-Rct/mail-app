import React from 'react';
import EmailListItem from './EmailListItem';
import MailListData from '../data/posts.js';

class EmailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterKeyword: 'inbox'};
  }

  render() {
    const { filterKeyword } = this.state;
    const FilteredMailList = MailListData.filter(item => item.type === filterKeyword);
    return(
      <div>
        { FilteredMailList.map( item => <EmailListItem emailData={item} />
        )}
      </div>
    )
  }
}

export default EmailList;