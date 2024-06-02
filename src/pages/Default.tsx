import type { Component } from 'solid-js';


import styles from '../App.module.css';
import logo from '../logo.svg';

const Default: Component = (props: any) => {
  return (
    <div class={styles.App}>
    <header class={styles.header}>
      <img src={logo} class={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        class={styles.link}
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>
      {props.children}
    </header>
  </div>
  )
}

export default Default