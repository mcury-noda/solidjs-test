import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import Home from './pages/Home';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = (props: any) => {
  return (<>
    <nav>
      <A href="/default">Default</A>
      <A href="/">Home</A>
      <A href="/map">Map</A>
    </nav>
    <h1>solidjs-test</h1>
    {props.children}
  </>
  );
};

export default App;
