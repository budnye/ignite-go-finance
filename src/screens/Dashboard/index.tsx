import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards
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
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards> 
      <HighlightCard 
        title="Entradas"
        amount="R$ 17.400,00"
        lastTransaction="Última transação dia 05 de abril"
        type="up"
        />
      <HighlightCard 
        title="Saídas"
        amount="R$ 1.200,00"
        lastTransaction="Última transação dia 05 de abril"
        type="down"
        />
      <HighlightCard 
        title="Total"
        amount="R$ 16.200,00"
        lastTransaction="Última transação dia 05 de abril"
        type="total"
        />
      </HighlightCards>
    </Container>
  )
}