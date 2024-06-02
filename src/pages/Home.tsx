import type { Component } from 'solid-js';


import styles from '../App.module.css';
import logo from '../logo.svg';

const Home: Component = (props: any) => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        Homeです
      </header>
  </div>
  )
}

export default Home
