import React from 'react';
import Section from './components/nav/section';
import Header from './components/nav/header';
import { hot } from 'react-hot-loader'

const App = () => (
  <div >
    <Header />
    <Section />
  </div>
);

export default hot(module)(App);