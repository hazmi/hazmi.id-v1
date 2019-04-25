import React from 'react';
import ReactGA from 'react-ga';
import './index.scss';

const introTodoMVC = `
  An example of component based approach of React app. A methodology that 
  highly concern with the MAINTAINABILITY of a long projects. A clear 
  separation between logic, styles and assets of each features will make 
  updating or removing features much more easier to do. Avoid mountains of 
  dead codes that can cause a significant problems.
`;

export const Playground = () => (
  <div className="playground">
    <h2>Playground</h2>
    <div className="playground__item">
      <h3>
        <ReactGA.OutboundLink
          eventLabel="todomvc:demo:header"
          to="https://todomvc.hazmi.id"
        >
          <span data-title="TodoMVC">TodoMVC</span>
        </ReactGA.OutboundLink>
      </h3>
      <p>{introTodoMVC}</p>
      <ul className="playground__item-footer">
        <li>
          <ReactGA.OutboundLink
            eventLabel="todomvc:demo:action"
            to="https://todomvc.hazmi.id"
          >
            <span data-title="Demo">Demo</span>
          </ReactGA.OutboundLink>
        </li>
        <li>
          <ReactGA.OutboundLink
            eventLabel="todomvc:github"
            to="https://github.com/hazmi/TodoMVC"
          >
            <span data-title="Source">Source</span>
          </ReactGA.OutboundLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Playground;
