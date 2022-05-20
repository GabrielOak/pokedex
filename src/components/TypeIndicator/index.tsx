import React from 'react';

import * as S from './styles';

interface TypeIndicatorProps {
  type: string;
}

const TypeIndicator: React.FC<TypeIndicatorProps> = ({type}) => {
  return (
    <S.TypeIndicator>
      <S.TypeIndicatorText>{type}</S.TypeIndicatorText>
    </S.TypeIndicator>
  );
};
export default TypeIndicator;
