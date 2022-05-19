import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 150px;
  width: 100%;
  background-color: #403f3f;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: center;
  padding: 20px;
`;

export const PokeballImage = styled.Image`
  position: absolute;
  width: 120px;
  height: 120px;
  align-self: flex-end;
`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 6px;
`;

export const InfoContainer = styled.View`
  margin-top: 20px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export const SubTitle = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export const TitleBold = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
