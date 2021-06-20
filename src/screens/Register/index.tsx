import React, { useState } from 'react';
import { Input } from '../../components/Form/Input';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TranscationsTypes,
} from './styles'
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

export function Register(){
  const [transactionType, setTransactionType] = useState('')
  
  function handleTranscationsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
    <Form>
     <Fields>
      <Input placeholder="Nome"/>
      <Input placeholder="Preço"/>
      <TranscationsTypes>
        <TransactionTypeButton 
        type="up" 
        title="Income" 
        onPress={() => handleTranscationsTypeSelect('up')}
        isActive={transactionType === 'up'}
        />

        <TransactionTypeButton 
        type="down" 
        title="Outcome" 
        onPress={() => handleTranscationsTypeSelect('down')}
        isActive={transactionType === 'down'}
        />

      </TranscationsTypes>
        <CategorySelect title="Categorias"/>
     </Fields>
     <Button title="Adicionar"/>
    </Form>

    </Container>
  );
};
