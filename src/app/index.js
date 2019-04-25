import React from 'react';
import { Header } from './components/header';
import { Contact } from './components/contact';
import { Playground } from './components/playground';
import './index.scss';

export const App = () => (
  <div className="app">
    <div className="app__intro">
      <Header />
      <Contact />
    </div>
    <div className="app__playground">
      <Playground />
    </div>
  </div>
);

export default App;
