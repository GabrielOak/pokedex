import React from 'react';
import {PokemonType} from '../../contexts/PokemonContext';

import * as S from './styles';

interface PokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  return (
    <S.Card type={pokemon.types[0]}>
      <S.PokemonID>{`#0${pokemon.id}`}</S.PokemonID>
      <S.Title>{pokemon.name}</S.Title>
      <S.InfoContainer>
        <S.TypesContainer>
          {pokemon.types.map(type => (
            <S.TypeIndicator>
              <S.TypeIndicatorText key={`${pokemon.name}-${type}`}>
                {type}
              </S.TypeIndicatorText>
            </S.TypeIndicator>
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
