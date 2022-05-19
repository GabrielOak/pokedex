import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {PokemonProvider} from './contexts/PokemonContext';
import Routes from './routes';

const App = () => (
  <PokemonProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  </PokemonProvider>
);

export default App;
