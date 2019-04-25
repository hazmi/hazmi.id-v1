import React from 'react';
import ReactGA from 'react-ga';
import './index.scss';

const emailPart1 = 'hello';
const emailPart2 = 'hazmi.id';

export const Contact = () => (
  <div className="contact">
    <span className="contact__help">Need help? Feel free to</span>
    {' '}
    <ReactGA.OutboundLink
      eventLabel="contact"
      className="contact__email"
      to={`mailto:${emailPart1}@${emailPart2}`}
    >
      <span data-title="contact me">contact me</span>
    </ReactGA.OutboundLink>
    <span className="contact__help">.</span>
  </div>
);

export default Contact;
