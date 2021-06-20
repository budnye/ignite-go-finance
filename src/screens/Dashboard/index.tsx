import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'

export function Dashboard(){
  const data = [{
    title: "Desenvolvimento de site",
    amount: "12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date:"13/04/2021",
  },
  {
    title: "Desenvolvimento de site",
    amount: "12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date:"13/04/2021",
  },
  {
    title: "Desenvolvimento de site",
    amount: "12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date:"13/04/2021",
  },
]
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
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transactions>
    </Container>
  )
}