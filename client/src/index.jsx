import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import Square from './components/Square.jsx'
import uniqueid from 'uniqueid';
import Anime from 'react-anime';

let App =() => (
  <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
  <h1>Blog Post</h1>
  <section>
    <p>Upon this, Daggoo, with either hand upon the gunwale to steady his way, swiftly slid aft, and then erecting himself volunteered his lofty shoulders for a pedestal.</p>
    <p>"Good a mast-head as any, sir. Will you mount?"</p>
    <p>"That I will, and thank ye very much, my fine fellow; only I wish you fifty feet taller."</p>
  </section>
</Anime>
    );

let node = document.getElementById('app');

ReactDOM.render(<App/>, node);