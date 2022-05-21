import React from 'react';
import {ActivityIndicator} from 'react-native';

import * as S from './styles';

interface LoadingIndicatorProps {
  loading: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({loading}) => {
  return <S.Wrapper>{loading && <ActivityIndicator size="large" />}</S.Wrapper>;
};
export default LoadingIndicator;
