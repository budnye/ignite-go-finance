import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date:"13/04/2021",
  },
  {
    id: '2',
    type: 'negative',
    title: "Hamburguer Pizzy",
    amount: "R$ 59,00",
    category: {
      name: 'Alimentação',
      icon: 'coffee',
    },
    date:"10/04/2021",
  },
  {
    id: '3',
    type: 'negative',
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: {
      name: 'Casa',
      icon: 'shopping-bag',
    },
    date:"27/03/2021",
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/>}
        />
      </Transactions>
    </Container>
  )
}