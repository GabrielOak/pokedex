import styled from 'styled-components/native';
import {Platform} from 'react-native';

interface WrapperProps {
  color: string;
}

export const Wrapper = styled.View<WrapperProps>`
  background-color: ${({color}) => (color ? color : 'ligthblue')};
  flex-direction: column-reverse;
  padding-top: ${Platform.OS === 'ios' ? '50px' : '8px'};
`;

export const Icon = styled.TouchableOpacity`
  padding: 13px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 700;
`;
