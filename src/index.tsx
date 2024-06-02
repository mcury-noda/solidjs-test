/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, A } from '@solidjs/router';

import './index.css';
import App from './App';
import Home from './pages/Default';
import Default from './pages/Default';
import Map from './pages/Map';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router root={App} base='solidjs-test'>
    <Route path="/default" component={Default} />
    <Route path="/map" component={Map} />
    {/* <Route path="/" component={App} /> */}
  </Router>
)

, root!);
