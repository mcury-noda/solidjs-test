import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import Home from './pages/Home';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = (props: any) => {
  return (<>
    <nav>
      <A href="/default">Default</A><i> </i>
      <A href="/home">Home</A><i> </i>
      <A href="/map">Map</A>
    </nav>
    <h1>solidjs-test</h1>
    {props.children}
  </>
  );
};

export default App;
