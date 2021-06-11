import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme: {colors}}) => colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  ${({theme: {colors}}) => colors.title};
`