import React from 'react';
import colorTypes from '../../theme/colorTypes';
import ProgressBar from '../ProgressBar';

import * as S from './styles';

interface CharacteristicItemPorps {
  value: number;
  label: string;
  color: 'red' | 'green';
}

const CharacteristicItem: React.FC<CharacteristicItemPorps> = ({
  value,
  label,
  color,
}) => {
  const barColor = color === 'red' ? colorTypes.fire : colorTypes.grass;
  return (
    <S.CharacteristicItemContainer>
      <S.CharacteristicItem width={25}>
        <S.Label>{label}</S.Label>
      </S.CharacteristicItem>
      <S.CharacteristicItem width={13} align="center">
        <S.Label>{value}</S.Label>
      </S.CharacteristicItem>
      <S.CharacteristicItem width={55}>
        <ProgressBar progress={value <= 100 ? value : 100} color={barColor} />
      </S.CharacteristicItem>
    </S.CharacteristicItemContainer>
  );
};
export default CharacteristicItem;
