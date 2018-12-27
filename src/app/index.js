import React, { Component } from 'react';
import './index.scss';

class App extends Component {
  render() {
    const emailPart1 = 'hello';
    const emailPart2 = 'hazmi.id';
    const helpTextIntro = <span className="app__help">Need help? Feel free to</span>;
    const helpTextLink = (
      <a className="app__contact" href={`mailto:${emailPart1}@${emailPart2}`}>
        <span data-title="contact me">contact me</span>
      </a>
    );
    const helpTextDot = <span className="app__help">.</span>;

    return (
      <div className="app">
        <header className="app__content">
          <p>
            Hi, I’m Hazmi.<br />
            I create apps and websites.
          </p>
          <p>
            {helpTextIntro} {helpTextLink}{helpTextDot}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
