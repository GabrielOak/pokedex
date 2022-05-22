import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {fireEvent, render, act} from '@testing-library/react-native';
import {PokemonContext, PokemonProvider, usePokemon} from './PokemonContext';
import {Button, Text} from 'react-native';

describe('PokemonContext', () => {
  it('pokemons is empty for default', () => {
    const {getByText} = render(
      <PokemonContext.Consumer>
        {value => <Text>{value.pokemons.length}</Text>}
      </PokemonContext.Consumer>,
      {wrapper: PokemonProvider},
    );
    expect(getByText('0')).toBeTruthy();
  });

  it('should render the first 20 pokemons', async () => {
    const {getByText} = render(
      <PokemonContext.Consumer>
        {value => (
          <>
            <Text>{value.pokemons.length}</Text>
            <Button title="Get Pokemons" onPress={() => value.getPokemons()} />
            {value.pokemons.length > 0 &&
              value.pokemons.map(pokemon => (
                <Text key={pokemon.id}>{pokemon.name}</Text>
              ))}
          </>
        )}
      </PokemonContext.Consumer>,
      {wrapper: PokemonProvider},
    );
    await act(async () => {
      await fireEvent.press(getByText('Get Pokemons'));
    });
    expect(getByText('20')).toBeTruthy();
    expect(getByText(/bulbasaur/i)).toBeTruthy();
    expect(getByText(/charmander/i)).toBeTruthy();
    expect(getByText(/squirtle/i)).toBeTruthy();
  });

  it('should have a pokemon list', async () => {
    const {result} = renderHook(() => usePokemon(), {
      wrapper: PokemonProvider,
    });

    await act(() => result.current.getPokemons());

    expect(result.current.pokemons).toBeTruthy();
  });
});
