import styled from 'styled-components/native';

export const Bar = styled.View`
  width: 100%;
  height: 8px;
  background-color: lightgray;
  border-radius: 5px;
`;

interface ProgressProps {
  color: string;
  progress: number;
}

export const Progress = styled.View<ProgressProps>`
  background-color: ${({color}) => (color ? color : 'lightblue')};
  height: 8px;
  width: ${({progress}) => (progress ? `${progress}%` : '0px')};
  border-radius: 5px;
`;
