import React from 'react';
import './Globals.css';
import './App.css';
import { Home, Cadastro, Lista, Sobre } from './pages';

function App() {
  return (
    <div id="app">
      <Home />
      <Cadastro />
      <Lista />
      <Sobre />
    </div>
  );
}

export default App;
