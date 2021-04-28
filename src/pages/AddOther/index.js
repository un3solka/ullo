import React, { useState } from 'react';
import { Wrapper, Button, Message, Row } from './components/styled';
import { Field } from '../../components/Field';
import firebase from 'firebase';
import 'firebase/firestore';
import { Label } from '../AddInfo/components/styled';

export const AddOther = () => {
  const [disabled, setDisabled] = useState(false);
  const [savedType, setSavedType] = useState(false);
  const [savedKitchen, setSavedKitchen] = useState(false);
  const [type, setType] = useState('');
  const [kitchen, setKitchen] = useState('');

  const onTypeChange = (e) => {
    setType(e.target.value);
  };
  const onKitchenChange = (e) => {
    setKitchen(e.target.value);
  };

  const saveType = () => {
    setDisabled(true);
    firebase
      .firestore()
      .collection('type')
      .doc()
      .set({ name: type })
      .then(() => {
        setSavedType(true);
        setDisabled(false);
      });
  };

  const saveKitchen = () => {
    setDisabled(true);
    firebase
      .firestore()
      .collection('kitchen')
      .doc()
      .set({ name: kitchen })
      .then(() => {
        setSavedKitchen(true);
        setDisabled(false);
      });
  };

  return (
    <Wrapper>
      <Row>
        <Label>Тип:</Label>
        <Field type="text" value={type} onChange={onTypeChange} />
      </Row>
      <Row>
        <Button onClick={saveType} disabled={disabled}>
          Добавить
        </Button>
        {savedType && <Message>Сохранено!!!</Message>}
      </Row>
      <Row>
        <Label>Кухня:</Label>
        <Field type="text" value={kitchen} onChange={onKitchenChange} />
      </Row>
      <Row>
        <Button onClick={saveKitchen} disabled={disabled}>
          Добавить
        </Button>
        {savedKitchen && <Message>Сохранено!!!</Message>}
      </Row>
    </Wrapper>
  );
};
