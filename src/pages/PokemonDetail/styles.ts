import styled from 'styled-components/native';

interface WrapperProps {
  color: string;
}

export const Wrapper = styled.View<WrapperProps>`
  background-color: ${({color}) => (color ? color : 'lighblue')};
  flex: 1;
`;

export const Title = styled.Text`
  color: white;
  font-size: 34px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const TextId = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  padding-left: 13px;
  padding-right: 13px;
  justify-content: space-between;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  padding-left: 13px;
  padding-right: 13px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  padding: 24px;
  padding-top: 35px;
  margin-top: -35px;
`;

export const DescriptionText = styled.Text`
  color: black;
  text-align: justify;
  margin-bottom: 10px;
`;

interface InfoTitleProps {
  color: string;
}

export const InfoTitle = styled.Text<InfoTitleProps>`
  font-size: 28px;
  color: ${({color}) => (color ? color : 'black')};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SizeContainer = styled.View`
  width: 70%;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Divider = styled.View`
  height: 35px;
  width: 2px;
  background-color: gray;
`;

export const SizeItemContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const SizeValue = styled.Text`
  font-weight: bold;
  text-align: center;
  max-width: 120px;
`;

export const Label = styled.Text`
  font-size: 12px;
`;

export const InfoSubTitle = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;
