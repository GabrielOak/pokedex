import React from 'react';
import {PokemonProvider} from './contexts/PokemonContext';
import Routes from './routes';

const App = () => (
  <PokemonProvider>
    <Routes />
  </PokemonProvider>
);

export default App;
