import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StackRootParamList} from '../../routes';

import * as S from './styles';
import colorTypes from '../../theme/colorTypes';
import TypeIndicator from '../../components/TypeIndicator';
import CharacteristicItem from '../../components/CharacteristicItem';
import DetailNavBar from '../../components/DetailNavBar';

import Balance from '../../assets/icons/balance.svg';
import Ruler from '../../assets/icons/ruler.svg';

interface PokemonDetailProp {
  route: RouteProp<StackRootParamList, 'PokemonDetail'>;
}

const PokemonDetail: React.FC<PokemonDetailProp> = ({route}) => {
  const {pokemon} = route.params;
  const color = colorTypes[pokemon.types[0]];

  return (
    <S.Wrapper color={color}>
      <DetailNavBar color={color} />
      <S.TitleContainer>
        <S.Title>{pokemon.name}</S.Title>
        <S.TextId>{`#${String(pokemon.id).padStart(3, '0')}`}</S.TextId>
      </S.TitleContainer>
      <S.TypesContainer>
        {pokemon.types.map(type => (
          <TypeIndicator type={type} key={`${pokemon.name}-${type}`} />
        ))}
      </S.TypesContainer>
      <S.ImageContainer>
        <S.PokemonImage source={{uri: pokemon.image}} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.SizeContainer>
          <Balance fill="black" width={25} height={25} />
          <S.SizeItemContainer>
            <S.SizeValue>{`${pokemon.weight} kg`}</S.SizeValue>
            <S.Label>Peso</S.Label>
          </S.SizeItemContainer>
          <S.Divider />
          <Ruler fill="black" width={25} height={25} />
          <S.SizeItemContainer>
            <S.SizeValue>{`${pokemon.height} m`}</S.SizeValue>
            <S.Label>Altura</S.Label>
          </S.SizeItemContainer>
        </S.SizeContainer>

        <S.InfoSubTitle>Características</S.InfoSubTitle>
        <CharacteristicItem value={pokemon.hp} color="red" label="Saúde" />
        <CharacteristicItem
          value={pokemon.attack}
          color="green"
          label="Ataque"
        />
        <CharacteristicItem
          value={pokemon.defense}
          color="red"
          label="Defesa"
        />
        <CharacteristicItem
          value={pokemon.specialAttack}
          color="green"
          label="VI. Ataque"
        />
        <CharacteristicItem
          value={pokemon.specialDefence}
          color="green"
          label="VI. Defesa"
        />
        <CharacteristicItem
          value={pokemon.speed}
          color="red"
          label="Velocidade"
        />
      </S.InfoContainer>
    </S.Wrapper>
  );
};
export default PokemonDetail;
