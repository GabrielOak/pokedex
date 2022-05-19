import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PokemonProvider} from './contexts/PokemonContext';
import Routes from './routes';

const App = () => (
  <PokemonProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </PokemonProvider>
);

export default App;
