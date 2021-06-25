import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TranscationsTypes,
} from './styles'
// import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

interface FormData{
  name: string;
  amount: string;
}

export function Register(){
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })
  
  const {
    control,
    handleSubmit,
  } = useForm();

  function handleTranscationsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
      <Form>
      <Fields>
        <InputForm 
          placeholder="Nome"
          control={control}
          name="name"
          autoCapitalize="sentences"
          autoCorrect={false}
        />
        <InputForm 
          placeholder="Preço"
          control={control}
          name="amount"
          keyboardType="numeric"
        />
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
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
      </Fields>
      <Button title="Adicionar" onPress={handleSubmit(handleRegister)}/>
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};
