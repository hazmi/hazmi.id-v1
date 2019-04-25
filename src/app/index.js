import React from 'react';
import { Header } from './components/header';
import { Contact } from './components/contact';
import './index.scss';

export const App = () => (
  <div className="app">
    <Header />
    <Contact />
  </div>
);

export default App;
