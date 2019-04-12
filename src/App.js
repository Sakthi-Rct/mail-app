import React from 'react';
import Mailbox from './components/Mailbox';
import EmailList from './components/EmailList';
import './App.css';
import logo from './images/logo.svg';
import bubbles from './images/bubbles.svg';
import menu from './images/menu.svg';
import notification from './images/notification.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="flex-display">
          <a href="/">
            <img src={logo} alt="Mail logo" className="mail-logo"/>
          </a>
          <div className="search-section">
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-right">
            <ul className="flex-display">
              <li>
                <a href="/">
                  <img src={bubbles} alt="Bubbles" width="15" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={menu} alt="Menu" width="15" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={notification} alt="Notification" width="15" />
                </a>
              </li>
              <li>

              </li>
            </ul>
          </div>
        </header>
        <section className="mail-body flex-display">
          <div className="side-bar">
            <Mailbox></Mailbox>
          </div>
          <div className="email-list">
            <EmailList></EmailList>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
