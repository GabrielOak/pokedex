import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import PokemonCard from '../../components/PokemonCard';
import {usePokemon} from '../../contexts/PokemonContext';

import * as S from './styles';

const Home = () => {
  const [pageLoading, setPageLoading] = useState(false);
  const {pokemons, loading, getPokemons} = usePokemon();

  useEffect(() => {
    setPageLoading(true);
    getPokemons();
    setPageLoading(false);
  }, []);

  return (
    <S.Wrapper>
      {pageLoading ? (
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
              onEndReached={getPokemons}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() => <LoadingIndicator loading={loading} />}
            />
          </>
        )
      )}
    </S.Wrapper>
  );
};

export default Home;
