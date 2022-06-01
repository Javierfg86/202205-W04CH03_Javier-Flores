import React from 'react';

import './App.css';
import { CrearPersonajes } from './componentes/personajes';
import { List } from './componentes/lista';

function App() {
  const personajes = CrearPersonajes();
  return (
    <>
      <div className="app container">
        <List personajes={personajes}></List>
      </div>
    </>
  );
}

export default App;
