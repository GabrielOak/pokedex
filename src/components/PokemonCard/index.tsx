import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {PokemonType} from '../../contexts/PokemonContext';
import TypeIndicator from '../TypeIndicator';

import * as S from './styles';

interface PokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  const navigation = useNavigation();

  return (
    <S.Card
      onPress={() => navigation.navigate('PokemonDetail', {pokemon})}
      type={pokemon.types[0]}>
      <S.PokemonID>{`#${String(pokemon.id).padStart(3, '0')}`}</S.PokemonID>
      <S.Title>{pokemon.name}</S.Title>
      <S.InfoContainer>
        <S.TypesContainer>
          {pokemon.types.map(type => (
            <TypeIndicator type={type} key={`${pokemon.id}-${type}`} />
          ))}
        </S.TypesContainer>
        <S.Image
          source={{
            uri: pokemon.image,
          }}
        />
      </S.InfoContainer>
    </S.Card>
  );
};
export default PokemonCard;
