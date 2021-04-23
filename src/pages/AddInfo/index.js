import React, { useState } from 'react';
import { Wrapper, Row, Label, Button, Message } from './components/styled';
import { Field } from '../../components/Field';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import { initialFields } from './fieldsConfig';

export const AddInfo = () => {
  const [formState, setFormState] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [saved, setSaved] = useState(false);
  const [fields, setFields] = useState(initialFields);

  const onFieldChange = (e) => {
    setSaved(false);
    const prevState = { ...formState };
    prevState[e.target.name] = e.target.value;
    setFormState(prevState);
  };

  React.useEffect(() => {
    Promise.all([
      firebase
        .firestore()
        .collection('kitchen')
        .get()
        .then((querySnapshot) => {
          const arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ id: doc.id, name: doc.data().name });
          });
          return arr;
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        }),
      firebase
        .firestore()
        .collection('type')
        .get()
        .then((querySnapshot) => {
          const arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ id: doc.id, name: doc.data().name });
          });
          return arr;
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        }),
    ]).then(([kitchens, types]) => {
      const newFields = [...initialFields];
      newFields.find((item) => item.name === 'kitchens').options = kitchens;
      newFields.find((item) => item.name === 'type').options = types;
      setFields(newFields);
    });
  }, []);

  const uploadData = async () => {
    const childPath = `logos/${Math.random().toString(36)}`;
    const task = firebase
      .storage()
      .ref()
      .child(childPath)
      .put(document.querySelector('[name="logo"]').files[0], {
        contentType: formState.logo.type,
      });
    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        save(snapshot);
      });
    };
    const taskError = (snapshot) => {
      console.log(snapshot);
    };

    task.on('state_changed', taskProgress, taskError, taskCompleted);
  };
  const save = (snapshot) => {
    setDisabled(true);
    firebase
      .firestore()
      .collection('restaurants')
      .doc()
      .set({ ...formState, logo: snapshot })
      .then(() => {
        setSaved(true);
        setDisabled(false);
        setFormState({});
      });
  };
  return (
    <Wrapper>
      {fields.map((item) => (
        <Row key={`${item.name}-row`}>
          <Label key={`${item.name}-label`}>{item.label}</Label>
          <Field
            type={item.type}
            name={item.name}
            onChange={onFieldChange}
            options={!!item.options && item.options}
            value={formState[item.name]}
          />
        </Row>
      ))}
      <Button onClick={uploadData} disabled={disabled}>
        Добавить
      </Button>
      {saved && <Message>Сохранено!!!</Message>}
    </Wrapper>
  );
};
