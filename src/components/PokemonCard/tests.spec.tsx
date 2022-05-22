import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import PokemonCard from '.';

const pokemonMock = {
  attack: 52,
  defense: 43,
  height: 0.6,
  hp: 39,
  id: '4',
  image: '',
  name: 'charmander',
  specialAttack: 60,
  specialDefence: 50,
  speed: 65,
  types: ['fire'],
  weight: 8.5,
};

describe('<PokemonCard />', () => {
  it('should render correcly', () => {
    const {getByText, toJSON} = render(
      <NavigationContainer>
        <PokemonCard pokemon={pokemonMock} />
      </NavigationContainer>,
    );

    const id = `#${String(pokemonMock.id).padStart(3, '0')}`;

    expect(getByText(pokemonMock.name)).toBeTruthy();
    expect(getByText(id)).toBeTruthy();
    pokemonMock.types.map(type => expect(getByText(type)).toBeTruthy());

    expect(toJSON()).toMatchSnapshot();
  });
});
