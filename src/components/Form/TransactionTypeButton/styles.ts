import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps{
  type: 'up' | 'down'
}

interface ContainerProps{
  isActive: boolean;
  type: 'up' | 'down';
}


export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, isActive }) => !isActive ? theme.colors.text : 'transparent'};
  padding: 16px;
  border-radius: 5px;
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.successLight};
  `};
  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.warningLight};
  `};
  
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textDark};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.success : theme.colors.warning};
`;

