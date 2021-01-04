import React from 'react'
import { Parallax } from 'react-parallax';

import * as pix from './assets/pix'
import './App.css';

const t = {
  header: 'Welcome to the 5G Smart Community.' 
}

function App() {
  return (
    <main className='app'>
      <Parallax id='parallax' blur={1} bgImage={pix.homeBackground} bgImageAlt='background' strength={250}>
        <section id='splashTop'>
          <header id='header'>{t.header}</header>
          <div id='overlayBar' />
          <img id='logoWhite' src={pix.logoWhite} />
        </section>
      </Parallax>
        <img id='visionTriangle' src={pix.visionTriangle} />
    </main>
  );
}

export default App;
