import React from 'react';
import './index.scss';

const emailPart1 = 'hello';
const emailPart2 = 'hazmi.id';

export const Contact = () => (
  <div className="contact">
    <span className="contact__help">Need help? Feel free to</span>
    {' '}
    <a className="contact__email" href={`mailto:${emailPart1}@${emailPart2}`}>
      <span data-title="contact me">contact me</span>
    </a>
     <span className="contact__help">.</span>
  </div>
);

export default Contact;
