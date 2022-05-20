import React from 'react';

import * as S from './styles';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress, color}) => {
  return (
    <S.Bar>
      <S.Progress progress={progress} color={color} />
    </S.Bar>
  );
};
export default ProgressBar;
