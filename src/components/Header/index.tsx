import React from 'react';
import Pokeball from '../../assets/pokeball.png';
import Ash from '../../assets/ash.png';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.PokeballImage source={Pokeball} />
      <S.HeaderContainer>
        <S.InfoContainer>
          <S.Title>
            Olá, <S.TitleBold>Ash Ketchum</S.TitleBold>
          </S.Title>
          <S.SubTitle>Bem vindo! 😄</S.SubTitle>
        </S.InfoContainer>
        <S.ProfileImage source={Ash} />
      </S.HeaderContainer>
    </S.Wrapper>
  );
};
export default Header;
