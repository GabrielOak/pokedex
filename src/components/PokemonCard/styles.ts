import styled from 'styled-components/native';
import colorType from '../../theme/colorTypes';

interface CardProps {
  type: string;
}

export const Card = styled.TouchableOpacity<CardProps>`
  flex: 0.5;
  background-color: ${({type}) => colorType[type] || 'lightblue'};
  border-radius: 20px;
  height: 150px;
  margin: 8px;
  padding: 13px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const PokemonID = styled.Text`
  color: gray;
  font-size: 16px;
  align-self: flex-end;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const TypesContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 85px;
  align-self: flex-end;
`;
