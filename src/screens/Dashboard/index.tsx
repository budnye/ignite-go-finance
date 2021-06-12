import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper
} from './styles'

export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo source={{uri: 'https://avatars.githubusercontent.com/u/51931984?v=4.png'}}/>
          <User>
            <UserGreeting>Olá</UserGreeting>
            <UserName>Eduardo</UserName>
          </User>
        </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  )
}