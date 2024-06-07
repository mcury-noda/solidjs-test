import type { Component } from 'solid-js';

import styles from '../App.module.css';
import logo from '../logo.svg';
import Counter from '../components/ReactiveSample/Counter';

const Home: Component = (props: any) => {
  return (
    <div>
      <h3>Homeです</h3>
      <Counter/>
    </div>
  )
}

export default Home
