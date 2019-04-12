import React from 'react'

const EmailListItem = ({ emailData }) => (
    <div className="email-list-item flex-display" key={emailData.name}>
    <div className="sender-name">
      <p>{emailData.name}</p>
    </div>
    <div className="mail-content">
      <p>
        {emailData.subject}
        <span> - {emailData.content}</span>
      </p>
    </div>
    <div className="mail-date">
      <p>{emailData.date}</p>
    </div>
  </div>
);

export default EmailListItem;