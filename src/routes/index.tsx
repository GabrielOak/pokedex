import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';
import {PokemonType} from '../contexts/PokemonContext';

export type StackRootParamList = {
  Home: undefined;
  PokemonDetail: {pokemon: PokemonType};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackRootParamList {}
  }
}

const Stack = createNativeStackNavigator<StackRootParamList>();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="PokemonDetail"
      component={PokemonDetail}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Routes;
