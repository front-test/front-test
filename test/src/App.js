import React from 'react';
import { Navbar, Intro, Works, Team, Contact } from './components';
import { GlobalStyles } from './styles/App.style';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Intro />
        <Works />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
