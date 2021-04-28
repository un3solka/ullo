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
    const { name, value } = e.target;
    setSaved(false);
    const prevState = { ...formState };
    switch (name) {
      case 'lat':
        if (!prevState.location) {
          prevState.location = {};
        }
        prevState.location.lat = +value;
        break;
      case 'lng':
        if (!prevState.location) {
          prevState.location = {};
        }
        prevState.location.lng = +value;
        break;
      case 'kitchens':
        prevState[e.target.name] = Array.from(
          e.target.selectedOptions,
          (option) => option.value,
        );
        break;
      default:
        prevState[e.target.name] = e.target.value;
    }
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

  const uploadImageAsPromise = (path, imageFile) => {
    return new Promise(function (resolve) {
      if (!imageFile) {
        resolve('');
      }
      const childPath = `${path}/${Math.random().toString(36)}`;
      const task = firebase.storage().ref().child(childPath).put(imageFile);
      const taskProgress = (snapshot) => {
        console.log(`transferred: ${snapshot.bytesTransferred}`);
      };

      const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((image) => {
          resolve(image);
        });
      };
      const taskError = (snapshot) => {
        console.log(snapshot);
      };

      task.on('state_changed', taskProgress, taskError, taskCompleted);
    });
  };

  const uploadImages = () => {
    const logoFieldElement = document.querySelector('[name="logo"]');
    const menuFieldElement = document.querySelector('[name="menu"]');
    const logoPromise = uploadImageAsPromise('logo', logoFieldElement.files[0]);
    const menuPromises = [];
    for (let i = 0; i < menuFieldElement.files.length; i++) {
      const imageFile = menuFieldElement.files[i];

      menuPromises.push(uploadImageAsPromise('menu', imageFile));
    }

    Promise.all([logoPromise, ...menuPromises]).then((res) => {
      save(res);
    });
  };
  const save = (res) => {
    setDisabled(true);
    firebase
      .firestore()
      .collection('restaurants')
      .doc()
      .set({ ...formState, logo: res[0], menu: res.slice(1) })
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
            value={
              item.name === 'lat' || item.name === 'lng'
                ? formState.location && formState.location[item.name]
                : formState[item.name]
            }
          />
        </Row>
      ))}
      <Button onClick={uploadImages} disabled={disabled}>
        Добавить
      </Button>
      {saved && <Message>Сохранено!!!</Message>}
    </Wrapper>
  );
};
