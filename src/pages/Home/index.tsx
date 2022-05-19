import React from 'react';
import {FlatList, Text} from 'react-native';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../contexts/PokemonContext';

import * as S from './styles';

const Home = () => {
  const {pokemons, loading} = usePokemon();

  return (
    <S.Wrapper>
      {loading ? (
        <Text>loading</Text>
      ) : (
        !!pokemons && (
          <>
            <FlatList
              data={pokemons}
              numColumns={2}
              keyExtractor={item => `${item.id}`}
              renderItem={({item}) => <PokemonCard pokemon={item} />}
              ListHeaderComponent={() => <Header />}
            />
          </>
        )
      )}
    </S.Wrapper>
  );
};

export default Home;
