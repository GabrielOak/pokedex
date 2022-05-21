import {useNavigation} from '@react-navigation/core';
import React from 'react';
import Back from '../../assets/icons/chevron-left.svg';
import Heart from '../../assets/icons/heart.svg';

import * as S from './styles';

interface DetailNavBarProps {
  color: string;
}

const DetailNavBar: React.FC<DetailNavBarProps> = ({color}) => {
  const navigation = useNavigation();
  return (
    <S.Wrapper color={color}>
      <S.IconsContainer>
        <S.Icon onPress={() => navigation.goBack()}>
          <Back color="white" width={25} height={25} />
        </S.Icon>
        <S.Icon>
          <Heart fill="white" width={25} height={25} />
        </S.Icon>
      </S.IconsContainer>
    </S.Wrapper>
  );
};
export default DetailNavBar;
