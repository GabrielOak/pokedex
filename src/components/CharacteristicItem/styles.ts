import styled from 'styled-components/native';

export const CharacteristicItemContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text``;

interface CharacteristicItemProps {
  width: number;
  align?: 'center';
}

export const CharacteristicItem = styled.View<CharacteristicItemProps>`
  width: ${({width}) => (width ? `${width}%` : '30%')};
  align-items: ${({align}) => (align ? 'center' : 'flex-start')};
`;
